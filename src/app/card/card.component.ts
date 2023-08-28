import { Component } from '@angular/core';

@Component({
  selector: 'app-card', //bu selectoru kullanarak başka bir yerden bunu çağırabilirsin, istenilen her yerden birden çok kez ulaşılabilir
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  posts = 
  [
    {
     title:"Dağ Bisikleti",
     imageUrl:"assets/biking.jpeg", 
     username:"cbdag", 
     content:"Çok hızlı sürdüm"
    },
    {
      title:"Tırmanış",
      imageUrl:"assets/mountain.jpeg", 
      username:"cbuludag", 
      content:"Bugün iyi tırmandım"
    }, {
      title:"Doğa Yürüyüşü",
      imageUrl:"assets/tree.jpeg", 
      username:"cbdoga", 
      content:"Hadi biraz Maçka Parkında turluyalım"
     }
  ]

}
