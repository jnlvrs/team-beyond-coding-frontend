import { Component, OnInit } from '@angular/core';

import { faSearch } from '@fortawesome/free-solid-svg-icons';




@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  faSearch = faSearch;
  navList = [
    {
      name: 'Home',
      link: 'http://localhost:4200/',
    },
    {
      name: 'Login',
      link: 'http://localhost:4200/login',
    },
    {
      name: 'Sign Up',
      link: 'http://localhost:4200/signup',
    },
    {
      name: 'Events',
      link: 'http://www.google.com',
    },
    {
      name: 'Learn More',
      link: 'http://www.google.com',
    },
    {
      name: 'Gallery',
      link: 'http://www.google.com',
    },
  ];

  

  constructor() {}

  ngOnInit(): void {}

  menuToggle() { 
    const toggle = document.getElementById('toggle');
    const linkSearch = document.getElementById('link-search');
    const header = document.getElementById('header');

    toggle.classList.toggle('active');
    linkSearch.classList.toggle('active');
  }
}
