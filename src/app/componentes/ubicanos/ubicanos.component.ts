import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ubicanos',
  templateUrl: './ubicanos.component.html',
  styleUrls: ['./ubicanos.component.css']
})
export class UbicanosComponent {
  responseMessage: string = '';
  nombre: string = '';
  apellido: string = '';

  onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      this.nombre = contactForm.value.nombre;
      this.apellido = contactForm.value.apellido;

      this.responseMessage = 'Su mensaje ha sido enviado correctamente.';

      console.log(`Hola ${this.nombre} ${this.apellido}, ${this.responseMessage}`);
    } else {
      this.responseMessage = 'Por favor, complete todos los campos requeridos.';
    }
  }
}
