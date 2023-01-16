import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  user = {
    name: 'Moreira',
    firstName : 'Kylian',
    photo: 'https://randomuser.me/api/portraits/lego/2.jpg',
    age : 28,
    quote: '',
  };

  sayAge(age: number) {
    alert(age)
  }

}
