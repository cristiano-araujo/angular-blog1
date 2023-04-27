import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  photoCover:string="https://scontent.ffor30-1.fna.fbcdn.net/v/t39.30808-6/324895928_707943417619074_2132939391092169460_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeG6GT1tqxM0lVQYDzQu0HJ3oiUjkaFCGSiiJSORoUIZKIiksOFkki6ECyFtN8TjWoKfzqVchCucxweVhH1wPY4L&_nc_ohc=vblyZqLe9OsAX-hjgKz&_nc_ht=scontent.ffor30-1.fna&oh=00_AfABpaQfUPtJs3yU9a185gIVUjy_OBBWwG-rtIkj3D4xdA&oe=644E62D8"
  cardTitle:string="Culto de Celebração aos Domingos!"
  cardDescription:string="loren inoin"


  constructor() {}

  ngOnInit(): void {
    
  }
}
