import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLayoutComponent } from './layouts/admin/admin-layout/admin-layout.component';
import { TopNavComponent } from './layouts/admin/top-nav/top-nav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { SideNavComponent } from './layouts/admin/side-nav/side-nav.component';
import {MatCardModule} from '@angular/material/card'
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotreadyComponent } from './notready/notready.component'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ConfirmationComponent } from './sgared/components/confirmation/confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    TopNavComponent,
    SideNavComponent,
    DashboardComponent,
    NotreadyComponent,
    ConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
