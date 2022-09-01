import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNavbar() {
    if (window.innerWidth <(992)){
    let x = document.getElementById('collapsed');
    x?.click();
    }
  }
}
