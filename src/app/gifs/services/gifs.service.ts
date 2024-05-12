import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Gifs, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  private _tagHistory: string[] = [];

  private gifsList: Gifs[] = [];
  private URL: string = 'http://api.giphy.com/v1/gifs/';
  private api_KEY: string = 'ziNHdW3FGEx6KX682eq6PYmWqOMYTAPv';

  constructor(private http: HttpClient) {
    this.LoadLocalStorage();
  }

  get tagHistory(): string[] {
    return [...this._tagHistory];
  }

  get getGifsList(): Gifs[] {
    return this.gifsList;
  }

  private LoadLocalStorage(): void {
    if (!localStorage.getItem('history')) return;
    this._tagHistory = JSON.parse(localStorage.getItem('history')!);
    this.searchTag(this._tagHistory[0]);
  }
  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagHistory));
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();
    if (this._tagHistory.includes(tag)) {
      this._tagHistory = this._tagHistory.filter((value) => value !== tag);
    }
    this._tagHistory.unshift(tag);
    this._tagHistory = this._tagHistory.splice(0, 10);
    this.saveLocalStorage();
  }

  public searchTag(tag: string): void {
    if (tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
      .set('api_key', this.api_KEY)
      .set('limit', '10')
      .set('q', tag);

    this.http
      .get<SearchResponse>(`${this.URL}search`, { params })
      .subscribe((data) => {
        this.gifsList = data.data;
        console.log({ lis: this.gifsList });
      });
  }
}
