import { Component } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gifs } from '../../interfaces/gifs.interface';

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  constructor(private gifsService: GifsService) {}
  public gifs(): Gifs[] {
    return this.gifsService.getGifsList;
  }
}
