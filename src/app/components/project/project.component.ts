import { Component, Input } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
} from '@angular/material/dialog';
import { Project } from 'src/app/shared/interfaces/project.interface';
import { ProjectDetailsComponent } from '../project-details/project-details.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
})
export class ProjectComponent {
  @Input() project!: Project;

  constructor(public dialog: MatDialog) {}

  openDialog(project: Project) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.panelClass = 'project-details-dialog';
    dialogConfig.data = {
      name: project.name,
      description: project.description,
      toolsAndLanguages: project.toolsAndLanguages,
      images: project.images,
      src: project.src,
    };
    this.dialog.open(ProjectDetailsComponent, dialogConfig);
  }
}
