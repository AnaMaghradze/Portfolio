import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialogConfig,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Project } from 'src/app/shared/interfaces/project.interface';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss'],
})
export class ProjectDetailsComponent {
  name: string;
  description: string[];
  images: string[] | undefined;
  src: string | undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) project: Project) {
      this.name = project.name;
      this.description = project.description;
      this.images = project.images;
      this.src = project.src;
  }
}
