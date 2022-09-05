import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-pregnancy',
  templateUrl: './pregnancy.component.html',
  styleUrls: ['./pregnancy.component.css']
})
export class PregnancyComponent implements OnInit {

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
