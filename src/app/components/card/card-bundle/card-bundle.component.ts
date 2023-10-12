import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-bundle',
  templateUrl: './card-bundle.component.html',
  styleUrls: ['./card-bundle.component.css']
})
export class CardBundleComponent implements OnInit {

  @Input()
  gameBundle:string = ""

  ngOnInit(): void {
  }

}
