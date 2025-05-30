import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-contect',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contect.component.html',
  styleUrl: './contect.component.scss'
})
export class ContectComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log(this.formData);
  }
}
