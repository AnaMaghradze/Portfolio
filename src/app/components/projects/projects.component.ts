import { Component, OnInit } from '@angular/core';
import { listAnimation } from 'src/app/shared/animations/listAnimation';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [listAnimation],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'My First Project',
      description: `The project is designed with pure HTML, CSS and SCSS.`,
      toolsAndLanguages: ['HTML5', 'CSS', 'SCSS'],
      src: 'https://github.com/AnaMaghradze/personal-project-html-and-css',
      images: [
        'project-1-img-1.jpg',
        'project-1-img-2.jpg',
        'project-1-img-3.jpg',
        'project-1-img-4.jpg',
        'project-1-img-5.jpg',
        'project-1-img-6.jpg',
        'project-1-img-7.jpg',
        'project-1-img-8.jpg',
        'project-1-img-9.jpg',
      ],
    },
    {
      name: 'Chat Application',
      description: 'Coming Soon...',
      toolsAndLanguages: [
        'Angular',
        'TypeScript',
        'NodeJS',
        'WebSockets',
        'HTML5',
        'SCSS',
      ],
      src: '',
      images: [],
    },
  ];
}
