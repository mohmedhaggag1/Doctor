import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-contraceptive',
  templateUrl: './contraceptive.component.html',
  styleUrls: ['./contraceptive.component.css']
})
export class ContraceptiveComponent implements OnInit {

  constructor(private location : Location) { }

  ngOnInit(): void {
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }

  back(): void {
    this.location.back()
  }
}
