export class Skills {
    id: number;
    habilidad: string;
    valor: number;
    img: string;

    constructor(habilidad: string, valor: number, img: string){
        this.habilidad = habilidad;
        this.valor = valor;
        this.img = img;
    }
}
