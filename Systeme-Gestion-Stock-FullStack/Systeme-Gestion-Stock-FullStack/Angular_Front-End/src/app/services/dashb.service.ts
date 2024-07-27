import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models/produit';

@Injectable({
  providedIn: 'root'
})
export class DashbService {
  private apiUrl = 'http://localhost:8080/api/bon-entrees'; 

  constructor(private http: HttpClient) { }

  getDashb(): Observable<Dashb[]> {
    return this.http.get<Dashb[]>(this.apiUrl);
  }
}
export interface Dashb {
    id: number;
    quantite: number;
    prix: number;
    produit: Produit;
    bon_entree_id: number;
}

