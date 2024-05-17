import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  token:string='';

  constructor() { }

  ngOnInit(): void {
    this.token = ''+localStorage.getItem('token');

  }

}
