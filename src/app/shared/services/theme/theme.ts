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

    if (this.isDark) {
      this.applyDarkTheme();
    } else {
      this.applyLightTheme();
    }

    // Save preference
    localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
  }

  private applyDarkTheme(): void {
    const body = document.body;

    // Apply classes to body
    this.renderer.addClass(body, 'dark');
    this.renderer.removeClass(body, 'light');
  }

  private applyLightTheme(): void {
    const body = document.body;

    // Apply classes to body
    this.renderer.addClass(body, 'light');
    this.renderer.removeClass(body, 'dark');
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.isDark ? 'dark' : 'light';
  }

  isDarkTheme(): boolean {
    return this.isDark;
  }
}
