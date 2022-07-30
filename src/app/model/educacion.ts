export class Educacion {
    id: number;
    nombreE: string;
    descripcionE: string;
    yearE: string;


    constructor(nombreE: string, descripcionE: string, yearE: string){
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.yearE = yearE;
    }
}
