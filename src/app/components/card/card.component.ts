import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gameCover:string ="gameCover"

  @Input()
  gamePrice:string = "gamePrice"
  @Input()
  gameConsoles:string = "gameConsoles"

  @Input()
  gameBundle:string = "gameBundle"

  ngOnInit(): void {
  }

}
