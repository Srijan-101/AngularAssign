import { CommonModule } from '@angular/common';
import { Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-sports',
  standalone: true,
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss'],
  imports: [CommonModule]
})
export class SportsComponent implements OnInit {

  sportCards = [];

  ngOnInit(): void {
      this.sportCards = [
          {
              id:crypto.getRandomValues,
              name: 'Football',
              price: 1500,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
              description: 'Football description'
          },
          {
              id:crypto.getRandomValues,
              name: 'Football Boot',
              price: 6000,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
              description: 'Football description'
          }
      ];
  }
}