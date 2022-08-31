import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialycard',
  templateUrl: './specialycard.component.html',
  styleUrls: ['./specialycard.component.css']
})
export class SpecialycardComponent implements OnInit {

  @Input()header='';
  @Input()description='';
  @Input()buttonLink='';
  @Input()imageSrc='';
  
  constructor() { }

  ngOnInit(): void {
  }

}
