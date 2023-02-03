import { HtmlParser } from '@angular/compiler';
import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';

// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private config = [
    // Main Panel
    {
      transform: { x: 250, y: 250, z: 250 },
      rotate: { x: 10, y: 10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },

    // Green Line Top
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Green lines right - 1
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Green lines right - 2
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Green lines bottom - left 1
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Green lines bottom - left 2
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Green lines bottom - right 1
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Green lines bottom - right 2
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Green lines right - 3
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Green lines right - 4
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Blue Oval Detail
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Small Panel - left top
    {
      transform: { x: -500, y: -500, z: -500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Small Panel - right back
    {
      transform: { x: -500, y: -500, z: -500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },

    // Dotted corner - bottom left
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },

    // Undefined
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 0, y: 0 }, blur: 5, color: '#00000040' },
    },
    // Line detail - top right
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Line detail - top left
    {
      transform: { x: 500, y: 500, z: 500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Small Panel - right front
    {
      transform: { x: -500, y: -500, z: -500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
    // Small Panel - left bottom
    {
      transform: { x: -500, y: -500, z: -500 },
      rotate: { x: -10, y: -10 },
      shadow: { pos: { x: 10, y: 10 }, blur: 5, color: '#00000040' },
    },
  ] as Array<ConfigModel>;

  @ViewChild('parallaxRef')
  parallaxRef!: ElementRef<HTMLDivElement>;
  @ViewChildren('ref')
  ref!: QueryList<ElementRef>;

  @HostListener('mousemove', ['$event'])
  public mousemove(event: MouseEvent): void {
    if (event) {
      const rect = this.parallaxRef.nativeElement.getBoundingClientRect();
      let a1 = rect.left;
      let a2 = rect.right;
      let b1 = -1;
      let b2 = 1;
      const x = this.mapRange(a1, a2, b1, b2, event.x);
      a1 = rect.top;
      a2 = rect.bottom;
      b1 = 1;
      b2 = -1;
      const y = this.mapRange(a1, a2, b1, b2, event.y);

      if (x <= 1 && x >= -1 && y <= 1 && y >= -1) {
        this.ref.forEach((element, index) => {
          this.applyStyles(this.config[index], element, { x, y, z: 1 });
        });
      }
    }
  }

  constructor() {}

  ngOnInit(): void {
    this.type();
  }

  type() {
    const target = document.querySelector('.typing-text');

    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: '#03c988',
    });

    writer
      .type('Web Development')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(15)

      .type('UI/UX Design')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(13)
      .type('Software Engineering')
      .rest(500)
      .clear()
      .start();
  }

  private mapRange(
    a1: number,
    a2: number,
    b1: number,
    b2: number,
    value: number
  ): number {
    return b1 + ((value - a1) * (b2 - b1)) / (a2 - a1);
  }

  private applyStyles(
    config: ConfigModel,
    el: ElementRef,
    pos: PosModel3D
  ): void {
    const element = el.nativeElement as HTMLElement;

    element.style.boxShadow = `${config.shadow.pos.x * -pos.x}px ${
      config.shadow.pos.y * pos.y
    }px ${config.shadow.blur}px ${config.shadow.color}`;

    element.style.transform = `translate3d(${config.transform.x * -pos.x}px, ${
      config.transform.y * pos.y
    }px, ${config.transform.z * pos.z}px) rotateX(${
      config.rotate.x * pos.y
    }deg) rotateY(${config.rotate.y * pos.x}deg)`;

    element.style.transition = 'none';
  }

  reset(): void {
    this.ref.forEach((element) => {
      this.clearStyle(element);
    });
  }

  private clearStyle(el: ElementRef): void {
    const element = el.nativeElement as HTMLElement;

    element.style.boxShadow = 'none';

    element.style.transform = 'none';

    element.style.transition = 'all 0.7s ease';
  }
}

interface ConfigModel {
  transform: PosModel3D;
  rotate: PosModel2D;
  shadow: {
    pos: PosModel2D;
    blur: number;
    color: string;
  };
}

interface PosModel2D {
  x: number;
  y: number;
}

interface PosModel3D extends PosModel2D {
  z: number;
}
