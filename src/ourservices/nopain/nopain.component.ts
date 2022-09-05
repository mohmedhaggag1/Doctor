import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-nopain',
  templateUrl: './nopain.component.html',
  styleUrls: ['./nopain.component.css']
})
export class NopainComponent implements OnInit {

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
