import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  tooltip_position: TooltipPosition = 'after';

  constructor() { }

  ngOnInit(): void {
  }

}
