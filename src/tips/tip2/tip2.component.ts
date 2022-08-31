import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip2',
  templateUrl: './tip2.component.html',
  styleUrls: ['./tip2.component.css']
})
export class Tip2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

}
