import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
})
export class OffersComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.setTitle('Offers Page');
  }
}
