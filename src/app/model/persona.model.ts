export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    titutopersona: string;
    sobrepersona: string;


    constructor(nombre: string, apellido: string, img: string, titutopersona: string, sobrepersona: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titutopersona = titutopersona;
        this.sobrepersona = sobrepersona;


    }
}