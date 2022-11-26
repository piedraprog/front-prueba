import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebarnav',
  templateUrl: './sidebarnav.component.html',
  styleUrls: ['./sidebarnav.component.scss']
})
export class SidebarnavComponent implements OnInit {


  items: any[] = [
    {
      title: 'Agence',
      expanded: true,
      children: [
        {
          title: 'Home',
          link: 'home'
        }
      ],
    },
    {
      title: 'Proyectos',
      children: [
        {
          title: 'Undefined',
        }
      ],
    },
    {
      title: 'Administrativo',
      children: [
        {
          title: 'Undefined',
        }
      ],
    },
    {
      title: 'Comercial',
      children: [
        {
          title: 'Desempeño Comercial',
          link: '/comercial'
        },
      ],
    },
    {
      title: 'Financiero',
      children: [
        {
          title: 'Undefined',
        },
      ],
    },
    {
      title: 'Usuario',
      children: [
        {
          title: 'Cerrar Sesion',
        },
      ],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
