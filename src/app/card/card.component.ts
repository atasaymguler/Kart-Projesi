import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card', //bu selectoru kullanarak başka bir yerden bunu çağırabilirsin, istenilen her yerden birden çok kez ulaşılabilir
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() baslik:string = "";
  @Input() resimYolu:string = "";
  @Input() kullaniciAdi:string = "";
  @Input() yorum:string = "";
  

}
