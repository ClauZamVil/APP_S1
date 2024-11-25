import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DogService {
  private apiUrl = 'https://dog.ceo/api';

  constructor(private http: HttpClient) {}

  getRandomDogImage(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/breeds/image/random`); // Llama a la API para obtener una imagen aleatoria
  }
}