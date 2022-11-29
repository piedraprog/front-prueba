import { Component, OnInit, Input } from '@angular/core';
import { consultant } from 'src/app/interfaces/consultant';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() data: consultant[];

  dataReady: boolean = false;


  constructor() { }

  ngOnInit(): void {
    
  }

  ngAfterContentInit() {
    
    this.showData();

  }

  showData() {

    if(this.data === undefined || this.data.length === 0) return this.dataReady = true;
   
    return this.dataReady = false;
  } 
}
