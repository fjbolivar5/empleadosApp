export class Empleado{

    nombre:String="";
    apellido:String="";
    cargo:String="";
    salario:Number=0;

    constructor(n:String,a:String,c:String,s:Number){
        this.nombre=n;
        this.apellido=a;
        this.cargo=c;
        this.salario=s;
    }
}