import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [MatButton],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
