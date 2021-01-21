import { Component, OnInit } from '@angular/core';
import { PageTitleService } from 'src/app/shared/services/page-title.service';
import formTemplate from '../../mocks/form-template.mock';
import { BasicField } from '../../models/basic-field.model';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
})
export class LandingPageComponent implements OnInit {
  data: BasicField[];
  constructor(private pageTitleService: PageTitleService) {
    this.data = formTemplate;
  }

  ngOnInit() {
    this.pageTitleService.setTitle('Home');
  }
}
