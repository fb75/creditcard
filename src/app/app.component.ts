import { Component } from '@angular/core';
// import { PaymentIconService } from './payment-icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {}

  icon: any;

  onIcon(relativeicon: any) {
   this.icon = relativeicon;
   console.log(this.icon)
  }
}
