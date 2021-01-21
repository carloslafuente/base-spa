import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { NavigationItem } from '../../models/navigationItem.model';
import { navigationitems } from '../../mocks/navigationItem.mock';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  navigationItems: NavigationItem[];
  title: string;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.navigationItems = navigationitems;
    this.title = environment.appName;
  }

  ngOnInit(): void {}
}
