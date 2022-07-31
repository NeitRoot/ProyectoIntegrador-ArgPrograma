export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    titulodepersona: string;
    sobrepersona: string;


    constructor(nombre: string, apellido: string, img: string, titulodepersona: string, sobrepersona: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.titulodepersona = titulodepersona;
        this.sobrepersona = sobrepersona;


    }
}