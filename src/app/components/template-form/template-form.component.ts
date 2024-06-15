import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  // lista: any = [];
  // user: any = {};

  // onSubmit(form: any) {
  //   this.user = {
  //     name: form.value.name,
  //     email: form.value.email,
  //   };
  //   this.lista.push(this.user);
  //   form.reset();
  //   console.log(this.lista);

  // }
  lista: any = [];
  onSubmit(form: any) {
    if (form.valid) {
      //console.log("atv")
      const user: any = {
        name: form.value.name,
        email: form.value.email,
      };
      this.lista.push(user);
      form.reset();
      console.log(this.lista);
    }
    else{
      console.log("Formulário Inválido")
    }
  }
}
