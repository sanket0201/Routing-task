import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificatePageComponent } from './certificate-page/certificate-page.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  // {path:'',redirectTo:'/certificate',pathMatch:'full'},
  {path:'',component:CertificatesComponent},
  {path:'cert-form',component:CertificatePageComponent},
  
  {path:'cert-form/:id',component:CertificatePageComponent},
  {path:'**',component:PageNotFoundComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
