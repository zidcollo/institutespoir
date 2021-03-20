import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { ServiceeleveService } from '../services/serviceeleve.service';
import {Eleve} from '../models/eleve';
import { Enregistrement } from '../models/enregistrement';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detaileleve',
  templateUrl: './detaileleve.component.html',
  styleUrls: ['./detaileleve.component.css']
})
export class DetaileleveComponent implements OnInit {
  editForm!: FormGroup;
  enreg:Enregistrement[]=[];

  mnEleve : Eleve={
    
    nom:'',
    prenom:'',
    sexe:'',
    date_nais:'',
    lieu_nais:'',
    email:'',
    adresse:'',
    nom_pere:'',
    nom_mere:'',
    tel:'',
    parent_separe:'',
    base_arabe:'',
    ancien_eleve:'',
    paiement:false
  }
  constructor(private formBuilder: FormBuilder,private router:Router,private eleveService:ServiceeleveService) { }
  
 // eleve:Eleve[]=[];
  id: any;
  ngOnInit(): void {
    let eleveId = window.localStorage.getItem("editEleveId");
    console.log("id detail : "+eleveId);
    if(!eleveId) {
      alert("Invalid action.")
      this.router.navigate(['listeleve']);
      return;
    }
    this.getEleve(parseInt(eleveId));
    this.id=parseInt(eleveId);
    console.log(" nom :  "+this.mnEleve.nom);
    
  }
  
   getEleve(id:number){
this.eleveService.getOneEleve(id).subscribe(
  response =>this.handleSuccessfulResponse(response),
)
  }
  handleSuccessfulResponse(response:any)
  {
    this.mnEleve=response;
    
  }
  updateEleve(){

    this.eleveService.updateEleveOne(this.mnEleve)
          .subscribe( mnEleve => {
            this.id = mnEleve.id
           
          });
          this.router.navigate(['listeeleve']);
    }

    anuller(){
      this.router.navigate(['listeeleve']);
    }
  
}
