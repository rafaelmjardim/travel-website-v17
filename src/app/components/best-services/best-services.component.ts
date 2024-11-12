import { NgFor, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-best-services',
  standalone: true,
  imports: [NgStyle, NgFor],
  templateUrl: './best-services.component.html',
  styleUrl: './best-services.component.scss'
})
export class BestServicesComponent {

  serviceList = [
    {
      img: './assets/SatelliteIcon.png',
      title: 'Calculated Weather',
      txt: "Built Wicket longeradmire do barton vanity itself do in it"
    },
    {
      img: './assets/FlightIcon.png',
      title: 'Best Flights',
      txt: "Engrossed listening. Park gate sell they west hard for the."
    },
    {
      img: './assets/VocalIcon.png',
      title: 'Local Events',
      txt: 'Barton vanity itself do in it. Preferd to men it engrossed listening.'
    },
    {
      img: './assets/CustomizationIcon.png',
      title: 'Calculated',
      txt: 'We deliver outsourced aviation services for military customers'
    }
  ] 
}
