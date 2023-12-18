import { Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

const areaPadding = 300;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  score = signal(0);

  @ViewChild('point') point!: ElementRef<HTMLDivElement>;
  @ViewChild('arena') arena!: ElementRef<HTMLDivElement>;

  pointClicked() {
    this.score.update((score) => score + 1);

    const width = this.arena.nativeElement.clientWidth;
    const height = this.arena.nativeElement.clientWidth;

    const newPos = {
      x: Math.random() * (width - 2 * areaPadding) + +areaPadding + 'px',
      y: Math.random() * (height - 2 * areaPadding) + +areaPadding + 'px',
    };

    this.point.nativeElement.style.left = newPos.x;
    this.point.nativeElement.style.top = newPos.y;
  }
}
