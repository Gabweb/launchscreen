import { Component, Output, ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthProviders } from '@shared/services/auth';


@Component({
  selector: 'app-login-buttons',
  templateUrl: './login-buttons.component.html',
  styleUrls: ['./login-buttons.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginButtonsComponent {
  @Output() $clicked = new Subject<AuthProviders>();

  constructor() {
    this.$clicked = new Subject();
  }

  onGitHubClick(): void {
    this.emitClick(AuthProviders.GitHub);
  }

  private emitClick(provider: AuthProviders): void {
    this.$clicked.next(provider);
  }
}
