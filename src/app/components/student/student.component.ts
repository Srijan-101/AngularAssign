import { Component } from '@angular/core';


type user = {
  name:string;
  rollno :number;
}

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})

export class StudentComponent {
  Users:user[] = [
    {
      name : "Srijan",
      rollno : 18129
    },
    {
      name : "Ram",
      rollno : 18218
    }
  ]


   onAdd(Data:user):void {
       let newUser:user = {
           name : Data.name,
           rollno:Data.rollno
       }
       this.Users.push(newUser);
  }

  onDelete(roll:number):void {
      this.Users = 
         this.Users.filter(user => user.rollno !== roll)
  }
}
