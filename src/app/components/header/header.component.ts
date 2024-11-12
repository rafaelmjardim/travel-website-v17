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
      url: '/services'
    },
    {
      name: 'Destinations',
      url: '/destinations'
    },
    {
      name: 'Bookings',
      url: '/bookings'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Login',
      url: '/login'
    },
    {
      name: 'Sign Up',
      url: '/signup',
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
