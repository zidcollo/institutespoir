import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enregistrement } from '../models/enregistrement';
import { ServiceeleveService } from '../services/serviceeleve.service';

@Component({
  selector: 'app-recapitulative',
  templateUrl: './recapitulative.component.html',
  styleUrls: ['./recapitulative.component.css']
})
export class RecapitulativeComponent implements OnInit {

  constructor(private eleveService:ServiceeleveService,private router:Router) { }
  enreg: Enregistrement[]=[];
  resultEnreg:Enregistrement[]=[];
  ngOnInit(): void {
    this.getEnregs();
  }
  getEnregs(){
    this.eleveService.findAll().subscribe(enreg =>{
     this.resultEnreg= this.enreg =enreg ;

      //    let res=this.enreg[2];
      //    this.enfants=res['enfants'];
      //    console.log("enreg :"+this.enfants);

      //this.getEnfantsByIdPere(2);

    })
  }
}
