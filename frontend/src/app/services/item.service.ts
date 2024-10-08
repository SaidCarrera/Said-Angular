import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiUrl = 'http://localhost:3000/api/items'; // URL del backend

  constructor(private http: HttpClient) { }

  // Obtener todos los items
  getItems(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Crear un nuevo item
  createItem(item: any): Observable<any> {
    return this.http.post(this.apiUrl, item);
  }

  // Actualizar un item
  updateItem(id: string, item: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, item);
  }

  // Eliminar un item
  deleteItem(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

