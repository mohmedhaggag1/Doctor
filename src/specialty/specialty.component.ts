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
      description : 'الدكتورة آية لديها  خبرة كبيرة في متابعة التبويض ولها خبرة بوسائل منع الحمل وتنظيم الأسرة وتركيب اللولب النحاسي والهرموني و علاج الإلتهابات المهبلية الحادة والمزمنة',
      buttonLink : '/specialties/ولادة-بدون-آلام' ,
      imageSrc : 'assets/img/2.jpg'
    },
    {
      header : 'متابعة الحمل العادي والخطر' , 
      description : 'الدكتورة آية لديها  خبرة كبيرة في متابعة التبويض ولها خبرة بوسائل منع الحمل وتنظيم الأسرة وتركيب اللولب النحاسي والهرموني و علاج الإلتهابات المهبلية الحادة والمزمنة' , 
      buttonLink : '/specialties/متابعة-الحمل' ,
      imageSrc : 'assets/img/1.jpg'
    },
    {
      header : 'تنظيم الأسرة' , 
      description : 'الدكتورة آية لديها  خبرة كبيرة في متابعة التبويض ولها خبرة بوسائل منع الحمل وتنظيم الأسرة وتركيب اللولب النحاسي والهرموني و علاج الإلتهابات المهبلية الحادة والمزمنة' , 
      buttonLink : '/specialties/تنظيم-الأسرة' ,
      imageSrc : 'assets/img/5.jpg'
    },
    {
      header : 'وسائل منع الحمل' , 
      description : 'الدكتورة آية لديها  خبرة كبيرة في متابعة التبويض ولها خبرة بوسائل منع الحمل وتنظيم الأسرة وتركيب اللولب النحاسي والهرموني و علاج الإلتهابات المهبلية الحادة والمزمنة' , 
      buttonLink : '/specialties/وسائل-منع-الحمل' ,
      imageSrc : 'assets/img/3.jpg'
    },
    {
      header : 'علاج تأخر الإنجاب' , 
      description : 'الدكتورة آية لديها  خبرة كبيرة في متابعة التبويض ولها خبرة بوسائل منع الحمل وتنظيم الأسرة وتركيب اللولب النحاسي والهرموني و علاج الإلتهابات المهبلية الحادة والمزمنة' , 
      buttonLink : '/specialties/تأخر-اللإنجاب' ,
      imageSrc : 'assets/img/6.jpg'
    },
    {
      header : 'علاج الإجهاض المتكرر' , 
      description : 'الدكتورة آية لديها  خبرة كبيرة في متابعة التبويض ولها خبرة بوسائل منع الحمل وتنظيم الأسرة وتركيب اللولب النحاسي والهرموني و علاج الإلتهابات المهبلية الحادة والمزمنة' , 
      buttonLink : '/specialties/الإجهــــاض' ,
      imageSrc : 'assets/img/4.jpg'
    }
  ]
}
