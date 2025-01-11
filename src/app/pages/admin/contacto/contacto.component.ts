import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/services/contacto.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterLink,
  ],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css',
})
export class ContactoComponent {
  listContactos: any = [];
  files_date: any;
  submitted = false;
  data: any;
  form: FormGroup = new FormGroup({});
  urlRaiz = environment.urlRaiz + '/';
  post = new Contacto();

  constructor(
    private formBuilder: FormBuilder,
    private dataService: ContactoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadContactos();
  }

  loadContactos() {
    return this.dataService.getContactos().subscribe((data: {}) => {
      console.log(data);
      this.listContactos = data;
    });
  }

  exportToExcel(): void {
    // Preparar los datos para el Excel
    const dataToExport = this.listContactos.map((contacto: any) => {
      return {
        Nombre: contacto.nombre,
        Correo: contacto.correo,
        Teléfono: contacto.telefono,
        Asunto: contacto.asunto,
      };
    });

    // Crear el libro de trabajo y la hoja
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();

    // Obtener el rango de datos
    const range = XLSX.utils.decode_range(worksheet['!ref'] || 'A1');

    // Establecer el ancho de las columnas
    const columnsWidth = [
      { wch: 25 }, // Nombre
      { wch: 35 }, // Correo
      { wch: 15 }, // Teléfono
      { wch: 40 }, // Asunto
    ];
    worksheet['!cols'] = columnsWidth;

    // Estilos para las celdas
    for (let R = range.s.r; R <= range.e.r; R++) {
      for (let C = range.s.c; C <= range.e.c; C++) {
        const cellRef = XLSX.utils.encode_cell({ r: R, c: C });
        if (!worksheet[cellRef]) continue;

        // Establecer estilos base para todas las celdas
        worksheet[cellRef].s = {
          font: {
            sz: 12, // Tamaño de fuente
            name: 'Arial',
          },
          alignment: {
            vertical: 'center',
            horizontal: 'left',
            wrapText: true,
          },
          border: {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' },
          },
        };

        // Estilos especiales para la cabecera (primera fila)
        if (R === 0) {
          worksheet[cellRef].s = {
            ...worksheet[cellRef].s,
            fill: {
              fgColor: { rgb: '4A90E2' }, // Color azul para la cabecera
            },
            font: {
              sz: 13,
              bold: true,
              color: { rgb: 'FFFFFF' }, // Texto blanco
              name: 'Arial',
            },
            alignment: {
              vertical: 'center',
              horizontal: 'center',
            },
          };
        }

        // Filas alternas con color de fondo suave
        if (R > 0 && R % 2 === 0) {
          worksheet[cellRef].s = {
            ...worksheet[cellRef].s,
            fill: {
              fgColor: { rgb: 'F5F5F5' }, // Color gris muy claro
            },
          };
        }
      }
    }

    // Establecer altura de filas
    worksheet['!rows'] = Array(range.e.r + 1).fill({ hpt: 25 }); // 25 puntos de altura

    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contactos');

    // Generar el archivo y descargarlo
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
      cellStyles: true,
    });

    // Agregar la fecha formateada al nombre del archivo
    const fecha = new Date()
      .toLocaleDateString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      })
      .replace(/\//g, '-');

    this.saveExcelFile(excelBuffer, `contactos_${fecha}`);
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    });
    const url: string = window.URL.createObjectURL(data);
    const link: HTMLAnchorElement = document.createElement('a');
    link.href = url;
    link.download = `${fileName}_${new Date().toLocaleDateString()}.xlsx`;
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
