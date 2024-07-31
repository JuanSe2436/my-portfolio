import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1',
      image: 'ruta/a/imagen1.jpg',
      link: 'http://linkproyecto1.com'
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      image: 'ruta/a/imagen2.jpg',
      link: 'http://linkproyecto2.com'
    },
    // Agrega más proyectos aquí
  ];
}
