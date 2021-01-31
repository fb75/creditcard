import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// creo interfaccia per passarla all'observable
// interface Icon {
//   text: string;
// }

// // posso creare un observable tipizzandolo con interfaccia Car (oppure i genrics) e con
// // pluck estrapolo proprietà
// const observable = new Observable<Icon>((observer) => {
//   observer.next({
//     year: 2000,
//     color: 'red',
//     running: true,
//     make: {
//       name: 'VW',
//       dateCreated: 2001
//     }
//   });
// }).pipe(
//   pluck('make', 'name')
// );


export class PaymentIconService {

  constructor() { }

  iconLoad(icon: string) {
    // console.log(icon)
    return icon;
  }
}
