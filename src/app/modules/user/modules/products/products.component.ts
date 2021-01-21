import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/page-title.service';

@Component({
  selector: 'app-products',
  templateUrl: 'products.component.html',
})
export class ProductsComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.setTitle('Products Page');
  }
}
