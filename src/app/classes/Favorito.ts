import { DateTime } from "ionic-angular/umd";

export class Favorito {
    public valor: boolean;
    public icon: string;
    constructor(pValor: boolean, pIcon: string="ios-star-outline") 
    {       
        //favoritoChange: 
        this.valor = pValor;
        this.icon = pIcon;

        
    }

}