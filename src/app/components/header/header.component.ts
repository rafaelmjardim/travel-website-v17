import { NgClass, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgClass, NgFor, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuList: any[] = [
    {
      name: 'Services',
      id: '#best-services'
    },
    {
      name: 'Destinations',
      id: '#destinations'
    },
    {
      name: 'Bookings',
      id: '#bookings'
    },
    {
      name: 'About',
      id: '#about'
    },
    {
      name: 'Login',
    },
    {
      name: 'Sign Up',
      class: 'sign_up_styles'
    },
    {
      name: 'EN',
    }
]

  constructor() { }

  ngOnInit() {
  }

}
