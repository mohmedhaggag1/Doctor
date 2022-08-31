import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip3',
  templateUrl: './tip3.component.html',
  styleUrls: ['./tip3.component.css']
})
export class Tip3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

}
