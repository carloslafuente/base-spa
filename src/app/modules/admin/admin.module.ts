import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

@NgModule({
  declarations: [AdminComponent, NavbarComponent],
  imports: [CommonModule, AdminRoutingModule],
})
export class AdminModule {}
