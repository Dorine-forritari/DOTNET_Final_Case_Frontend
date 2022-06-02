import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProjectResponse } from '../models/project.model';

@Injectable({
  providedIn: 'root',
})
export class CatalogueService {
  constructor(private http: HttpClient) {}

  public catalogue() {
    // Test URL
    return this.http.get<ProjectResponse[]>(
      'https://mocki.io/v1/ae78f836-f3bf-48f3-a32e-e25ddf2d71e4'
    );
  }
}
