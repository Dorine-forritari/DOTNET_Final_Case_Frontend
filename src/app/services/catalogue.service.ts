import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectResponse } from '../models/project.model';
import { environment } from './../../environments/environment';

const { apiUrl } = environment;

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  constructor(private http: HttpClient) {}

  public catalogue() {
    // Test URL
    return this.http.get<ProjectResponse[]>(apiUrl);
  }
}
