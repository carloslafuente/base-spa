import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.setTitle('Home');
  }
}
