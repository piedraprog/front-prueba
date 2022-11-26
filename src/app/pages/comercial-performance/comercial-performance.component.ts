import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-comercial-performance',
  templateUrl: './comercial-performance.component.html',
  styleUrls: ['./comercial-performance.component.scss']
})
export class ComercialPerformanceComponent implements OnInit {
  formControl = new FormControl(new Date());
  ngModelDate = new Date();
  
  data : any[] = [
    {number:1},
    {number:1},
    {number:1},
    {number:1},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
