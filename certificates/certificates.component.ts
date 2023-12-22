import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Detailsmodel } from '../details.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent implements OnInit {

  // certList!:Detailsmodel
  // id!:number

  imgUrl='assets/Image/grad.jpg';

  info:Detailsmodel[]=[];
  constructor(private myService:DetailsService,
    private router:Router,
    private route:ActivatedRoute) {
// route.params.subscribe((params)=>{
//   if (params.name) {
//     this.info=myService.getCert()
//   }
// })
    }

  ngOnInit(): void {
      this.getInfodata();
      // window.location.reload();
      // this.id=+this.route.snapshot.params['id'];
      // this.route.params.subscribe((params:Params)=>{
      //   this.id=+params['id'];
      //   this.certList=this.myService.getcertbyId(this.id);
      // })
  }
  getInfodata(){
    this.info = this.myService.getCert();
    console.log(this.info);
    
  }

  // getCertInfo(){
  //   return this.info;
  // }

  newCert(){
    this.router.navigate(['/cert-form']);
  }

  // allDelete(){
  //   this.info.pop();
  //   this.myService.deleteCertificate();
  // }

  onDelete(item:any){
    // this.info.pop();
    // this.myService.deleteCertificate();
    this.info.splice(item,1);
  }

  edit(id: number){
    console.log("Values :" + id);
    // this.myService.deCert=ecert;
    this.router.navigate(['/cert-form',id],{relativeTo:this.route});
    // this.getCertInfo();
    
  }

  // ngOnDestroy(): void {
  //     this.allDelete();
  // }

}
