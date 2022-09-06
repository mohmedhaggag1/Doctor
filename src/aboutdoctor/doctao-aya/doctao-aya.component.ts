import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-doctao-aya',
  templateUrl: './doctao-aya.component.html',
  styleUrls: ['./doctao-aya.component.css']
})
export class DoctaoAyaComponent implements OnInit {

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
