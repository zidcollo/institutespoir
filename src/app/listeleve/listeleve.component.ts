import { Component, OnInit,Input } from '@angular/core';
import { ServiceeleveService } from '../services/serviceeleve.service';
import {Eleve} from '../models/eleve';
import { ActivatedRoute, Router } from '@angular/router';
import { Enregistrement } from '../models/enregistrement';
import { Enfant } from '../models/enfant';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-listeleve',
  templateUrl: './listeleve.component.html',
  styleUrls: ['./listeleve.component.css']
})
export class ListeleveComponent implements OnInit {
  
  rechercheText = '';
  eleves: Eleve[]=[];
  resulteleves : Eleve[]=[];
  
  enreg: Enregistrement[]=[];
  resultEnreg:Enregistrement[]=[];
  enfants:Enfant[]=[];
  dataChange: BehaviorSubject<Enfant[]> = new BehaviorSubject<Enfant[]>([]);
  eleve1: Eleve={
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
  };
  
  constructor(private eleveService:ServiceeleveService,private router:Router) { }
 
  ngOnInit(): void {
    this.getEnregs();
    this.getEnfantsByIdPere(0);
       // console.log("this.enreg.keys() : "+this.enreg[this.enreg.indexOf('enfants')]);
//this.eleve2=this.eleves;
  }

  getEnregs(){
    this.eleveService.findAll().subscribe(enreg =>{
     this.resultEnreg= this.enreg =enreg ;

      //    let res=this.enreg[2];
      //    this.enfants=res['enfants'];
      //    console.log("enreg :"+this.enfants);

      for (let i = 0; i < enreg.length; i++) {
        let res=this.enreg[i] ;
       // this.enfants.push( <Enfant>(res['enfants']) );
        this.enfants=res['enfants'];
        this.dataChange.next(this.enfants);

        
      }
      //this.getEnfantsByIdPere(2);

    })
  }

getEnfantsByIdPere(id:number){
 //this.enfants=this.enreg.keys();
 
 console.log("enreg :"+this.enfants);


}

  deleteEleve(id:any){
    this.eleveService.delete(id).subscribe( () => {
      this.eleves = this.eleves.filter(eleve => eleve.id != id )
    })
  }

    /** methode modifier paiement */
    updatePaiement(eleve:any){
      this.eleveService.paiement(eleve.id,eleve.paiement)
             .subscribe(() => { eleve.paiement = !eleve.paiement
        })
  }
  
  /** edit update info eleve */ 
  editEleve(enreg:any){
    window.localStorage.removeItem("editEleveId");
    window.localStorage.setItem("editEleveId", enreg.id.toString());
      this.router.navigate(['detaileleve']);
      //this.router.navigate(['recapitulative']);
      console.log("id : "+enreg.id);
  }

 /** getEleve(id:any){
    this.eleveService.getOneEleve(id).subscribe( () => {
      this.eleve2 = this.eleve2.filter(eleve => eleve.id != id )
    })
    console.log(" result : "+this.eleve2);
  } */

  rechercheEleve(){
    console.log(" rech : "+this.rechercheText);
    
    this.resulteleves=this.eleves.filter((eleve) => eleve.nom.toLowerCase().includes(this.rechercheText.toLowerCase()));
  }

}
