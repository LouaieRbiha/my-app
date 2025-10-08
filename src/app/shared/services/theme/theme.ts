import { inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private renderer: Renderer2;
  private isDark = false;
  readonly #rendererFactory = inject(RendererFactory2);

  constructor() {
    this.renderer = this.#rendererFactory.createRenderer(null, null);
  }

  toggleTheme(): void {
    this.isDark = !this.isDark;
    const body = document.body;
    if (this.isDark) {
      this.renderer.addClass(body, 'dark-theme');
      this.renderer.removeClass(body, 'light-theme');
    } else {
      this.renderer.addClass(body, 'light-theme');
      this.renderer.removeClass(body, 'dark-theme');
    }
  }
}
