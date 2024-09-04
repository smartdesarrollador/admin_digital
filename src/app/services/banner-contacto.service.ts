import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BannerContacto } from '../models/banner_contacto.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerContactoService {
  selectCategory: BannerContacto = new BannerContacto();
  urlListar = environment.apiListarBannerContacto;
  urlUpdateFile = environment.apiUpdateBannerContacto;
  urlDelete = environment.apiDeleteBannerContacto;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<BannerContacto> {
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
    return this.http.post(environment.apiUpdateBannerContacto, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}
