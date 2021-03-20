/**
 *    {
      "id": 1,
      "nom": "Omar",
      "prenom": "mahjoub",
      "sexe": "m",
      "date_nais": "05/05/2011",
      "lieu_nais": "vaulx en velin",
      "email": "omar@yahoo.fr",
      "adresse": "5 rue paul pic 69500 bron",
      "nom_pere": "ali mahjoub",
      "nom_mere": "amira mahjoub",
      "tel": "0694685712",
      "parent_separe": "non",
      "base_arabe": "oui",
      "ancien_eleve": "non",
      "paiement": true
    }
 */
export interface Enfant {

    id?:number;
    nom:string;
    prenom:string;
    sexe:string;
    date_nais:string;
    lieu_nais:string;
    base_arabe:string;
    ancien_eleve:string;
    num_class:string;
    decharge:string;
    photographie:string;
    entrer_seul:string;
    
}
