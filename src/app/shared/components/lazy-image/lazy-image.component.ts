import { Component, Input } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrl: './lazy-image.component.css',
})
export class LazyImageComponent {
  @Input()
  public urlImage!: string;
  @Input()
  public titleImage: string = '';

  public hasLoaded: boolean = false;

  public onInit(): void {
    setTimeout(() => {
      this.hasLoaded = true;
    }, 1000);
  }
}
