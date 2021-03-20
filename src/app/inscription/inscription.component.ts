import { Component, OnInit, Input ,Output,EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Eleve} from '../models/eleve';
import { Enregistrement } from '../models/enregistrement';
import { ServiceeleveService } from '../services/serviceeleve.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  nbr : number =0;
 
  tabEnf: any =[];

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
  

  enreg: Enregistrement[]=[];
  showNumClass:boolean=false;
  enregistrementForm!: FormGroup;
  submitted = false;

  

  constructor(private enregService:ServiceeleveService,private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.getEleves();
    /* Initiate the form structure */
    this.enregistrementForm = this.fb.group({
      
   // **  selling_points: this.fb.array([this.fb.group({point:''}) ]), **/
          id:0,
          email: ['', [Validators.required, Validators.email]],
          tel_fix: ['',[Validators.required, Validators.pattern("[0-9]{0-10}")]],
          parents_separe: ['', Validators.required],
          adresse: this.fb.group({ 
                rue:['', Validators.required],
                ville:['', Validators.required],
                code_postale:['', [Validators.required, Validators.pattern('[0-9]{5}')]]
               
          }),		
          pere: this.fb.group({
                nom_pere:['', Validators.required],
                prenom_pere:['', Validators.required],
                proffession_pere:['', Validators.required],
                tel_mobile_pere :['', [Validators.required, Validators.pattern("[0-9]{0-10}")]],
                cour_arabe_pere:'',
                cour_islam_pere:''
          }),
          mere: this.fb.group({
                nom_mere:['', Validators.required],
                prenom_mere:['', Validators.required],
                proffession_mere:['', Validators.required],
                tel_mobile_mere :['', [Validators.required, Validators.pattern("[0-9]{0-10}")]],
                cour_arabe_mere:'',
                cour_islam_mere:''
          }),
          enfants: this.fb.array([this.fb.group({ 
                id :0,
                nom:['', Validators.required],
                prenom:['', Validators.required],
                sexe:['', Validators.required],
                date_nais:['', Validators.required],
                lieu_nais:['', Validators.required],
                base_arabe:['', Validators.required],
                ancien_eleve:['', Validators.required],
                num_class:['', Validators.required],
                photographie:[false, Validators.requiredTrue],
                entrer_seul:[false, Validators.requiredTrue]
              })
            ]),
            acceptTerms:[false, Validators.requiredTrue]


    });
this.enfants.removeAt(0);
  }
  getEleves(){
    //this.eleveService.findAll().subscribe(eleves =>this.eleves =eleves)
  }
  persistEleve(){
    
    this.enregService.createUser(this.enregistrementForm.value)
    .subscribe( data => {
      //this.router.navigate(['recapitulative']);
      this.enreg=data as Array<Enregistrement>;
        //console.log("data : "+this.enreg[0]);
        alert("merci");
    });

      
  }

  // afaicher/cacher input numero de class
shoNumClass(){
  this.showNumClass=true;
}
hideNumClass(){
  this.showNumClass=false;
}

get enfants() {
  return this.enregistrementForm.get('enfants') as FormArray;
}
get enregistrementTable(){
  return this.enreg=<Enregistrement[]>this.enregistrementForm.getRawValue();
}  

addEnfant() {
  console.log("table : "+this.enregistrementTable);
  console.log(" length enfans avant: "+this.enfants.controls.length) ;

  this.enfants.push(this.fb.group({
                id :0,
                nom:'',
                prenom:'',
                sexe:'',
                date_nais:'',
                lieu_nais:'',
                base_arabe:'',
                ancien_eleve:'',
                num_class:'',
                decharge:'',
                photographie:'',
                entrer_seul:''})
                );

               console.log(" nbr enfans : "+this.enfants.controls.length) ;
               
              // this.deleteEnfant(this.enfants.controls.).
              
}

deleteEnfant(index: number) {
  this.enfants.removeAt(index);
}
onSubmit(){
  this.submitted = true;
  if (this.enregistrementForm.invalid) {
    return;
  }
 
  console.log(" nom pere :"+this.enregistrementForm.get("nom_pere")?.value);
  
}
onReset() {
  console.log(" reset avant");
  this.submitted = false;
  console.log(" reset 2");
  this.enregistrementForm.reset();
  console.log(" reset apre");
}
    // convenience getter for easy access to form fields
    get f() { 
      return this.enregistrementForm.controls; 
    }
}
