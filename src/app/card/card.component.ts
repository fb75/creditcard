import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardNumber: string;
  @Input() name: string;
  @Input() expiration: string;
  @Input() securityCode: string;
  @Input() icon: any;
  
  flipped = false;

  constructor() { }

  ngOnInit(): void {
    
  }

  onClickFlip() {
    if(this.flipped == false) {
      document.querySelector('.creditcard').classList.add('flipped')
      this.flipped = !this.flipped;
    } else {
      document.querySelector('.creditcard').classList.remove('flipped')
      this.flipped = !this.flipped;
    }
  }
}
