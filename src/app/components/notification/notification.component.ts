import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { fadeAnimation } from 'src/app/shared/animations/fadeAnimation';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  animations: [fadeAnimation],
})
export class NotificationComponent implements OnInit {
  @Input() color: string | undefined = 'neutral';
  @Output() close = new EventEmitter();

  closeNotification() {
    this.close.emit();
    return true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.close.emit();
    }, 3000);
  }
}
