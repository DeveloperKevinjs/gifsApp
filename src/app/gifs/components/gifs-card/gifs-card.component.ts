import { Component, Input } from '@angular/core';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-card',
  templateUrl: './gifs-card.component.html',
  styleUrl: './gifs-card.component.css',
})
export class GifsCardComponent {
  @Input()
  public gif!: Gifs;

  // public urlImage: string = 'gif.images.downsized_medium.url';
  // public titleImage: string = 'gif.title';
}
