import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[]=[
    new Empleado("Juan","Perez","Presidente",4500),
    new Empleado("Manolo","Garcia","VicePresidente",4000),
    new Empleado("Ana","Martin","Directora",5500),
    new Empleado("Maria","Garcia","Administrativa",2500)
  ];

  cuadroNombre:String="";
  cuadroApellido:String="";
  cuadroCargo:String="";
  cuadroSalario:Number=0;

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario);
    this.empleados.push(miEmpleado);
    this.cuadroNombre="";
    this.cuadroApellido="";
    this.cuadroCargo="";
    this.cuadroSalario=0;
  }
}
