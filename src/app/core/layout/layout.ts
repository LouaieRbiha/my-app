import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Header } from '../../shared/components/header/header';
import { Theme } from '../../shared/services/theme/theme';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, Header],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Layout {
  readonly themeService = inject(Theme);

  toggleTheme() {
    this.themeService.toggleTheme();
  }
}
