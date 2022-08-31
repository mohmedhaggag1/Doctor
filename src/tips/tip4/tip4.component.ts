import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip4',
  templateUrl: './tip4.component.html',
  styleUrls: ['./tip4.component.css']
})
export class Tip4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

}
