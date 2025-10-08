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
    const html = document.documentElement;

    // Apply classes to body
    this.renderer.addClass(body, 'dark-theme');
    this.renderer.removeClass(body, 'light-theme');

    // CRITICAL: Set color-scheme on html element for Angular Material
    this.renderer.setStyle(html, 'color-scheme', 'dark');
  }

  private applyLightTheme(): void {
    const body = document.body;
    const html = document.documentElement;

    // Apply classes to body
    this.renderer.addClass(body, 'light-theme');
    this.renderer.removeClass(body, 'dark-theme');

    // CRITICAL: Set color-scheme on html element for Angular Material
    this.renderer.setStyle(html, 'color-scheme', 'light');
  }

  getCurrentTheme(): 'light' | 'dark' {
    return this.isDark ? 'dark' : 'light';
  }

  isDarkTheme(): boolean {
    return this.isDark;
  }
}
