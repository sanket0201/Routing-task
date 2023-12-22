import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CertificatePageComponent } from './certificate-page/certificate-page.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { FormsModule } from "@angular/forms";
import { DetailsService } from './details.service';
import { HeaderComponent } from './header/header.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CertListComponent } from './cert-list/cert-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CertificatePageComponent,
    CertificatesComponent,
    HeaderComponent,
    PageNotFoundComponent,
    CertListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
