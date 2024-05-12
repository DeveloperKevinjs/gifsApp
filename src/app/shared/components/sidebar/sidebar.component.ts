import { GifsService } from './../../../gifs/services/gifs.service';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}
  @ViewChild('bottonSearch')
  public tagBottonInput!: ElementRef<HTMLInputElement>;

  public tagHistory(): string[] {
    return this.gifsService.tagHistory;
  }
  public sendOptionListCard(newTag: string): void {
    this.gifsService.searchTag(newTag);
  }
}
