import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.css']
})
export class ScrolltopComponent implements OnInit {

  constructor() { }
  ngOnInit(): void {

    let span = document.querySelector(".up");
    window.addEventListener('scroll' , ()=>{
      // console.log(scrollY)
      if(scrollY > 500){
        span?.classList.add("show");
      }
      else{
        span?.classList.remove("show");
      }
    })
  }
  
  scrollToUp(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    })
  }
}