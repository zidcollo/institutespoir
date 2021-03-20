import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Eleve} from '../models/eleve';
import { Enregistrement } from '../models/enregistrement';

@Injectable({
  providedIn: 'root'
})
export class ServiceeleveService {
url = "http://localhost:3000/enregistrement";

  constructor(private http:HttpClient) { }
  
  findAll(){
    return this.http.get<Enregistrement[]>(this.url);
  }
findEnfants(){
  //return this.http.get()
}
  delete(id: any){
    return this.http.delete(this.url+"/"+id);
  }

  persist(eleve:any){
    return this.http.post<Eleve>(this.url, eleve);
  }
// add enreg
  createUser(enreg: Enregistrement) {
    return this.http.post(this.url, enreg);
  }

  paiement(id:any, paiement:any){
    return this.http.patch(this.url+"/"+id,{paiement:!paiement})
  }

  getOneEleve(id:any){
    return this.http.get(this.url+"/"+id);
  }
  updateEleveOne(eleve:any){
    return this.http.put<Eleve>(this.url+"/"+eleve.id,eleve);
    //return this.httpClient.put<Conseiller>("http://localhost:8080/SpringWebService/conseiller/update", conseiller);
  

  }
}
