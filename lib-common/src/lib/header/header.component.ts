import { Component, inject } from '@angular/core';
import { CommonService } from '../common.service';
import { IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'lib-common-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: true,
  imports: [
    IonToolbar,
    IonHeader,
    IonTitle
  ]
})
export class HeaderComponent {

  private readonly commonService = inject(CommonService);

  appName = this.commonService.appName;
}
