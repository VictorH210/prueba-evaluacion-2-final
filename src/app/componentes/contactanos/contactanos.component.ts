import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {
  responseMessage: string = '';
  nombre: string = '';
  apellido: string = '';

  onSubmit(contactForm: NgForm): void {
    if (contactForm.valid) {
      this.nombre = contactForm.value.nombre;
      this.apellido = contactForm.value.apellido;

      this.responseMessage = `Hola ${this.nombre} ${this.apellido}, su mensaje ha sido enviado correctamente.`;

      console.log(this.responseMessage);
    } else {
      this.responseMessage = 'Por favor, complete todos los campos requeridos.';
    }
  }
}
