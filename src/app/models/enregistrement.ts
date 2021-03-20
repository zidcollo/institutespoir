import { Adresse } from "./adresse";
import { Enfant } from "./enfant";
import { Mere } from "./mere";
import { Pere } from "./pere";

export interface Enregistrement {
    id:number;
    email:string;
    tel_fix:string;
    parents_separe:string;
    adresse:Adresse;
    pere:Pere;
    mere:Mere;
    enfants:Enfant[];
    acceptTerms:boolean;


}
