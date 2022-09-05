import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-familyplanning',
  templateUrl: './familyplanning.component.html',
  styleUrls: ['./familyplanning.component.css']
})
export class FamilyplanningComponent implements OnInit {
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
