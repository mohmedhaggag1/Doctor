import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-elayedchildbearing',
  templateUrl: './elayedchildbearing.component.html',
  styleUrls: ['./elayedchildbearing.component.css']
})
export class ElayedchildbearingComponent implements OnInit {
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
