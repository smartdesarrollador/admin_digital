import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BannerEvento } from '../models/banner_evento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerEventoService {
  selectCategory: BannerEvento = new BannerEvento();
  urlListar = environment.apiListarBannerEvento;
  urlUpdateFile = environment.apiUpdateBannerEvento;
  urlDelete = environment.apiDeleteBannerEvento;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<BannerEvento> {
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
    return this.http.post(environment.apiUpdateBannerEvento, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}
