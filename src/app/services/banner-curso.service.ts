import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpEvent,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BannerCurso } from '../models/banner_curso.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BannerCursoService {
  selectCategory: BannerCurso = new BannerCurso();
  urlListar = environment.apiListarBannerCurso;
  urlUpdateFile = environment.apiUpdateBannerCurso;
  urlDelete = environment.apiDeleteBannerCurso;
  constructor(private http: HttpClient) {}

  getCategories(): Observable<BannerCurso> {
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
    return this.http.post(environment.apiUpdateBannerCurso, data, {
      headers: headers,
    });
  }

  deleteCategory(id: number) {
    return this.http.delete(this.urlDelete + '/' + id);
  }
}
