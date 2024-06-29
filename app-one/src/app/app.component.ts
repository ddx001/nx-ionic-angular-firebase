import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { TranslateService } from '@ngx-translate/core';
import { CommonService } from '@nx-ionic-angular-firebase/lib-common';

@Component({
  selector: 'app-one-root',
  templateUrl: 'app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    IonApp,
    IonRouterOutlet
  ]
})
export class AppComponent implements OnInit {

  private readonly translateService = inject(TranslateService);
  private readonly commonService = inject(CommonService);

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.translateService.get('app.name')
      .subscribe((appName: string) => this.commonService.setAppName(appName));
  }
}
