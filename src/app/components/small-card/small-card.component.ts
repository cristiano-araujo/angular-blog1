import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {
  @Input()
  photoCover:string = "https://scontent.ffor30-1.fna.fbcdn.net/v/t39.30808-6/343035740_586528246874877_288692564593028498_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=xDC1LN353kIAX-ZK8nv&_nc_ht=scontent.ffor30-1.fna&oh=00_AfBAiZFPk56Jn-Y1jGoe___ri3Ny-tsFyEy7J__naZ6Jdw&oe=6450214C"
  @Input()
  cardTitle:string = "Visão e Missão"


  constructor() {

  }
  ngOnInit(): void {
    
  }

}
