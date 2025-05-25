import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  activeSlide: number = -1;

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('section');
    const offset = window.innerHeight / 2;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();

      // Verifica se a seção está no centro da tela
      if (rect.top <= offset && rect.bottom >= offset) {
        if (this.activeSlide !== index) {
          this.animateSection(section);
          this.activeSlide = index;
        }
      } else {
        this.removeAnimations(section);
      }
    });
  }

  private animateSection(section: Element) {
    const animatables = section.querySelectorAll('[class*="animate-"]');
    animatables.forEach((el) => {
      // Remove qualquer animação existente
      el.classList.remove(
        'animate-fade-in',
        'animate-fade-up',
        'animate-slide-in-left',
        'animate-zoom-in',
        'animate-flip-in',
        'animate-scale-in',
        'animate-rise-in',
        'animate-pulse-in'
      );

      // Adiciona de volta a animação (reinicia)
      void el.clientHeight; // force reflow
      const animation = this.pickAnimation();
      this.renderer.addClass(el, animation);
    });
  }

  private removeAnimations(section: Element) {
    const animatables = section.querySelectorAll('[class*="animate-"]');
    animatables.forEach((el) => {
      el.classList.remove(
        'animate-fade-in',
        'animate-fade-up',
        'animate-slide-in-left',
        'animate-zoom-in',
        'animate-flip-in',
        'animate-scale-in',
        'animate-rise-in',
        'animate-pulse-in'
      );
    });
  }

  private pickAnimation(): string {
    const animations = [
      'animate-fade-in',
      'animate-fade-up',
      'animate-slide-in-left',
      'animate-zoom-in',
      'animate-flip-in',
      'animate-scale-in',
      'animate-rise-in',
      'animate-pulse-in',
    ];
    const randomIndex = Math.floor(Math.random() * animations.length);
    return animations[randomIndex];
  }
}
