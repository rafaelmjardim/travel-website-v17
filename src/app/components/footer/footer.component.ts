import { Component, OnInit } from '@angular/core';

type FooterItem = {
  title: string,
  itemList: FooterItemLink[]
}

type FooterItemLink = {
  txt: string
}

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  footerList: FooterItem[] = [
    {
      title: 'Company',

      itemList: [
        {
          txt: 'About'
        },
        {
          txt: 'Careers'
        },
        {
          txt: 'mobile'
        }
      ]
    
    },
    {
      title: 'Contact',

      itemList: [
        {
          txt: 'Help/FAQ'
        },
        {
          txt: 'Press'
        },
        {
          txt: 'Affilates'
        }
      ]
    
    },
    {
      title: 'More',

      itemList: [
        {
          txt: 'Airlinefees'
        },
        {
          txt: 'Airline'
        },
        {
          txt: 'Low fare tips'
        }
      ]
    
    },
  ]

}
