import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip5',
  templateUrl: './tip5.component.html',
  styleUrls: ['./tip5.component.css']
})
export class Tip5Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

}
