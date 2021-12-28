import {Component} from '@angular/core';
import {listAnimation} from 'src/app/shared/animations/listAnimation';
import {Project} from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [listAnimation],
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      name: 'GitHub Users',
      description: [`A single page application for displaying and searching GitHub users using GitHub public API.`],
      toolsAndLanguages: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS',
        'SCSS',
        'RxJS',
      ],
      src: 'https://anamaghradze.github.io/github-users/users',
      images: [
        'gh-users-1.png',
        'gh-users-2.png',
      ],
    },
    {
      name: 'Task Manager',
      description: [
        `The Task Manager is a simple Angular project that consists of two main pages.
        On the authentication page, users can sign in or create a new account.
        Once registered, the users can sign in and navigate to the home page.`,
        `On the Task Manager home page, the users can create, update, or delete lists,
        add tasks to the list, mark them as done or todo, or remove them from the list.
        Users can also filter tasks according to their status (done, todo).`,
      ],
      toolsAndLanguages: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML5',
        'CSS',
        'SCSS',
        'RxJS',
      ],
      src: 'https://github.com/AnaMaghradze/task-manager',
      images: [
        'tm-signin.png',
        'tm-signup.png',
        'tm-home.png',
        'tm-home-dark.png',
        'tm-mobile.png'
      ],
    },
    {
      name: 'My First Project',
      description: [`The project is designed with pure HTML, CSS and SCSS.`],
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
  ];
}
