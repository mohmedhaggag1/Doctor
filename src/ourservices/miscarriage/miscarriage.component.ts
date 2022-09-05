import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-miscarriage',
  templateUrl: './miscarriage.component.html',
  styleUrls: ['./miscarriage.component.css']
})
export class MiscarriageComponent implements OnInit {
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
