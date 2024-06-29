import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@nx-ionic-angular-firebase/lib-common';
import { IonContent } from '@ionic/angular/standalone';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-one-home',
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    HeaderComponent,
    IonContent,
    TranslateModule
  ]
})
export class HomePage {
}
