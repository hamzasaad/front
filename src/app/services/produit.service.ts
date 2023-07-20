import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }
   getProduit() {
    return this.http.get(`${environment.baseUrl}/users/produit/get`);
  }
  deleteProduit(id: any) {
    return this.http.delete(`${environment.baseUrl}/users/produit/delete/${id}`)
  }
  addProduit(produit: any) {
    return this.http.post(`${environment.baseUrl}/users/produit/save`, produit)
  }
  getOneProduit(id: any) {
    return this.http.get(`${environment.baseUrl}/users/produit/getone/${id}`)
  }
  updateProduits(produit: any, id: any) {
    return this.http.put(`${environment.baseUrl}/users/produit/update/${id}`, produit)
  }
  updateImage(client:any,id:any){
    return this.http.put(`${environment.baseUrl}/users/produit/image/${id}`,client)
  }
}
