import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LandingPageRoutingModule } from './landing-page-routing.module';
import { BannerComponent } from './components/banner/banner.component';
import { BenefitsComponent } from './components/benefits/benefits.component';
import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../../angular-material.module';

@NgModule({
  declarations: [
    LandingPageComponent,
    BannerComponent,
    BenefitsComponent,
    DynamicFormComponent,
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
})
export class LandingPageModule {}
