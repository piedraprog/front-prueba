import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  

  constructor(
    private sidebarService: NbSidebarService
  ) {}

  ngOnInit() {
        
  }

  toggle() {
    this.sidebarService.toggle()
  }
}
