import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BannerSolucion } from '../models/banner_solucion.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerSolucionService {
  selectCategory: BannerSolucion = new BannerSolucion();
  urlListar = environment.apiListarBannerSolucion;
  urlUpdateFile = environment.apiUpdateBannerSolucion;
  urlDelete = environment.apiDeleteBannerSolucion;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<BannerSolucion> {
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
    return this.http.post(environment.apiUpdateBannerSolucion, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}
