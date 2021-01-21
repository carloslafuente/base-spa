import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AngularMaterialModule } from './angular-material.module';

@NgModule({
  declarations: [UserComponent, DynamicFormComponent, NavbarComponent],
  imports: [CommonModule, UserRoutingModule, AngularMaterialModule],
})
export class UserModule {}
