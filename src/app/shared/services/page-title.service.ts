import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  public constructor(private titleService: Title) {}

  public setTitle(newTitle: string) {
    this.titleService.setTitle(`${environment.appName} | ${newTitle}`);
  }
}
