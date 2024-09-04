import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BannerEspecialidad } from '../models/banner_especialidad.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerEspecialidadService {
  selectCategory: BannerEspecialidad = new BannerEspecialidad();
  urlListar = environment.apiListarBannerEspecialidad;
  urlUpdateFile = environment.apiUpdateBannerEspecialidad;
  urlDelete = environment.apiDeleteBannerEspecialidad;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<BannerEspecialidad> {
    return this.http.get(this.urlListar);
  }

  uploadData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUrl3, data, {
      headers: headers,
    });
  }

  updateData(data: any) {
    const headers = new HttpHeaders();
    return this.http.post(environment.apiUpdateBannerEspecialidad, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}
