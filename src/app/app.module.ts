import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { HomeComponent } from './component/home/home.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { AddproduitComponent } from './component/addproduit/addproduit.component';
import { ListproduitComponent } from './component/listproduit/listproduit.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UpdateproduitComponent } from './component/updateproduit/updateproduit.component';
import { RecherchePipe } from './pipe/recherche.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    AddproduitComponent,
    ListproduitComponent,
    UpdateproduitComponent,
    RecherchePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
