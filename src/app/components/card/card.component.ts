import { Component, EventEmitter, Input, Output } from '@angular/core';


type user = {
   name:string;
   rollno :number;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent {


  @Input({required:true}) Users:user[]=[]

  @Output() addUser$ = new EventEmitter<Object>();
  @Output() deleteUser$ = new EventEmitter<number>();

  onAdd(name:string,rollno:string):void {
     this.addUser$.emit({name,rollno});
  }

  onDelete(roll:number):void {
    this.deleteUser$.emit(roll);
  }
}
