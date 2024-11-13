import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-destinations',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './destinations.component.html',
  styleUrl: './destinations.component.scss'
})
export class DestinationsComponent {

  cards: {title: string, price: string, date: string, img: string}[] = [
    {
      title: "RouterModule, Italy",
      price: "$5,32k",
      date: "10 Days Trip",
      img: "/assets/Rome.png"      
    },
    {
      title: "London, UK",
      price: "$4,2k",
      date: "12 Days Trip",
      img: "/assets/London.png"      
    },
    {
      title: "Full Europe",
      price: "$15k",
      date: "28 Days Trip",
      img: "/assets/Europe.png"      
    },
  ];

}
