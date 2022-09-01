import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specialty',
  templateUrl: './specialty.component.html',
  styleUrls: ['./specialty.component.css']
})
export class SpecialtyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = [
    {
      header : 'الولاده بدون ألم' , 
      description : 'تزيد خبرة الدكتورة آيــة (إستشارية أمراض النساء و التوليد)عن ثلاثون عاماً في علاج مختلف أمراض النساء و التوليد.',
      buttonLink : '/home' ,
      imageSrc : 'assets/img/2.jpg'
    },
    {
      header : 'متابعة الحمل العادي والخطر' , 
      description : 'تزيد خبرة الدكتورة آيــة (إستشارية أمراض النساء و التوليد)عن ثلاثون عاماً في علاج مختلف أمراض النساء و التوليد.' , 
      buttonLink : '' ,
      imageSrc : 'assets/img/1.jpg'
    },
    {
      header : 'تنظيم الأسرة' , 
      description : 'تزيد خبرة الدكتورة آيــة (إستشارية أمراض النساء و التوليد)عن ثلاثون عاماً في علاج مختلف أمراض النساء و التوليد.' , 
      buttonLink : '' ,
      imageSrc : 'assets/img/5.jpg'
    },
    {
      header : 'الفحص المبكر للأورام' , 
      description : 'تزيد خبرة الدكتورة آيــة (إستشارية أمراض النساء و التوليد)عن ثلاثون عاماً في علاج مختلف أمراض النساء و التوليد.' , 
      buttonLink : '' ,
      imageSrc : 'assets/img/3.jpg'
    },
    {
      header : 'الحقن المجهري' , 
      description : 'تزيد خبرة الدكتورة آيــة (إستشارية أمراض النساء و التوليد)عن ثلاثون عاماً في علاج مختلف أمراض النساء و التوليد.' , 
      buttonLink : '' ,
      imageSrc : 'assets/img/6.jpg'
    },
    {
      header : 'علاج العقم' , 
      description : 'تزيد خبرة الدكتورة آيــة (إستشارية أمراض النساء و التوليد)عن ثلاثون عاماً في علاج مختلف أمراض النساء و التوليد.' , 
      buttonLink : '' ,
      imageSrc : 'assets/img/4.jpg'
    },
  
    
  ]
}
