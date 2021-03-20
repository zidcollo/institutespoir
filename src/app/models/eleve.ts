/*
        "id": 1,
        "nom": "Omar",
        "prenom": "mahjoub",
        "sexe":"m",
        "date_nais":"05/05/2011",
        "lieu_nais":"BRON",
        "email":"omar@yahoo.fr",
        "adresse":"5 rue paul pic 69500 bron",
        "nom_pere":"ali mahjoub",
        "nom_mere":"amira mahjoub",
        "tel":number
        "parent_separe":false,
        "base_arabe":true,
        "inscri_avant_ecole":false,
        "paiement":true
*/

export interface Eleve {
    
    id?:number;
    nom:string;
    prenom:string;
    sexe:string;
    date_nais:string;
    lieu_nais:string;
    email:string;
    adresse:string;
    nom_pere:string;
    nom_mere:string;
    tel:string;
    parent_separe:string;
    base_arabe:string;
    ancien_eleve:string;
    paiement:boolean;

}
