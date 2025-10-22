export class Menu {
  private menuButton: HTMLElement | null;
  private mobileMenu: HTMLElement | null;
  private hamburgerIcon: HTMLElement | null;
  private isOpen: boolean = false;
  private isAnimating: boolean = false;

  constructor() {
    this.menuButton = document.getElementById('mobile-menu-btn');
    this.mobileMenu = document.getElementById('mobile-menu');
    this.hamburgerIcon = document.getElementById('hamburger-icon');
    this.init();
  }

  private init(): void {
    if (!this.menuButton || !this.mobileMenu) return;

    this.menuButton.addEventListener('click', (e) => this.toggle(e));
    
    this.mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => this.close());
    });

    document.addEventListener('click', (e) => {
      if (this.isOpen && 
          !this.mobileMenu?.contains(e.target as Node) && 
          !this.menuButton?.contains(e.target as Node)) {
        this.close();
      }
    });
  }

  private toggle(e: Event): void {
    e.stopPropagation();
    if (this.isAnimating) return;

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  private open(): void {
    if (!this.mobileMenu || this.isAnimating) return;

    this.isAnimating = true;
    this.isOpen = true;
    this.mobileMenu.classList.remove('hidden');
    
    this.animateHamburgerToX();
    
    void this.mobileMenu.offsetHeight;
    
    requestAnimationFrame(() => {
      this.mobileMenu?.classList.remove('max-h-0', 'opacity-0');
      this.mobileMenu?.classList.add('max-h-96', 'opacity-100');
      this.animateMenuItems(true);
    });

    setTimeout(() => {
      this.isAnimating = false;
    }, 300);
  }

  private close(): void {
    if (!this.mobileMenu || this.isAnimating) return;

    this.isAnimating = true;
    this.isOpen = false;
    this.animateHamburgerToMenu();
    this.animateMenuItems(false);
    this.mobileMenu.classList.add('max-h-0', 'opacity-0');
    this.mobileMenu.classList.remove('max-h-96', 'opacity-100');

    setTimeout(() => {
      this.mobileMenu?.classList.add('hidden');
      this.isAnimating = false;
    }, 300);
  }

  private animateHamburgerToX(): void {
    if (!this.hamburgerIcon) return;

    const lines = this.hamburgerIcon.querySelectorAll('line');
    if (lines.length !== 3) return;

    lines[0].setAttribute('x1', '4');
    lines[0].setAttribute('y1', '4');
    lines[0].setAttribute('x2', '20');
    lines[0].setAttribute('y2', '20');
    lines[0].style.transition = 'all 0.3s ease-in-out';

    lines[1].style.opacity = '0';
    lines[1].style.transition = 'opacity 0.2s ease-in-out';

    lines[2].setAttribute('x1', '4');
    lines[2].setAttribute('y1', '20');
    lines[2].setAttribute('x2', '20');
    lines[2].setAttribute('y2', '4');
    lines[2].style.transition = 'all 0.3s ease-in-out';
  }

  private animateHamburgerToMenu(): void {
    if (!this.hamburgerIcon) return;

    const lines = this.hamburgerIcon.querySelectorAll('line');
    if (lines.length !== 3) return;

    lines[0].setAttribute('x1', '4');
    lines[0].setAttribute('y1', '6');
    lines[0].setAttribute('x2', '20');
    lines[0].setAttribute('y2', '6');

    lines[1].style.opacity = '1';

    lines[2].setAttribute('x1', '4');
    lines[2].setAttribute('y1', '18');
    lines[2].setAttribute('x2', '20');
    lines[2].setAttribute('y2', '18');
  }

  private animateMenuItems(isOpening: boolean): void {
    if (!this.mobileMenu) return;

    const links = this.mobileMenu.querySelectorAll('a');
    
    links.forEach((link, index) => {
      const htmlLink = link as HTMLElement;
      
      if (isOpening) {
        htmlLink.style.opacity = '0';
        htmlLink.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
          htmlLink.style.transition = 'all 0.3s ease-out';
          htmlLink.style.opacity = '1';
          htmlLink.style.transform = 'translateX(0)';
        }, 50 + (index * 50));
      } else {
        htmlLink.style.transition = 'all 0.2s ease-in';
        htmlLink.style.opacity = '0';
        htmlLink.style.transform = 'translateX(-20px)';
      }
    });
  }

  public destroy(): void {
    this.menuButton?.removeEventListener('click', (e) => this.toggle(e));
  }
}

if (typeof window !== 'undefined') {
  let menuInstance: Menu | null = null;

  function initMenu() {
    if (menuInstance) {
      menuInstance.destroy();
    }
    menuInstance = new Menu();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenu);
  } else {
    initMenu();
  }

  document.addEventListener('astro:page-load', initMenu);
}
