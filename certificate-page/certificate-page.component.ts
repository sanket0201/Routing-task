import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DetailsService } from '../details.service';
import { NgForm } from '@angular/forms';
import { Detailsmodel } from '../details.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-certificate-page',
  templateUrl: './certificate-page.component.html',
  styleUrl: './certificate-page.component.css'
})
export class CertificatePageComponent implements OnInit {
  
// @ViewChild('cname') certName:any=ElementRef;
// @ViewChild('cplan') certPlan:any=ElementRef;
// @ViewChild('cdesc') certDesc:any=ElementRef;

// @ViewChild('form') allForm:any=ElementRef;

// cer:Detailsmodel[]=[];

dataList:any={
  name:'',
  description:'',
  classification:''
}

imgUrl='assets/Image/grad.jpg';
constructor(private myService:DetailsService,
  private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      let id: number =+params['id'];
      
      let certList=this.myService.getcertbyId(id);
      this.dataList=certList ? certList:{};
      // this.data=certList;
      
      console.log('id', id)

      // this.myService.addCertificate(certList);
      // this.certList=this.myService.getcertbyId(this.id);
    })
  }

// onSubmit(){
// const cn=this.certName.nativeElement.value;
// const cp=this.certPlan.nativeElement.value;
// const cd=this.certDesc.nativeElement.value;

// // const data={cn,cp,cd};
// // console.log(data);

// const data = new Detailsmodel(cn,cp,cd);
// this.myService.addCertificate(data);
// this.router.navigate(['/'])
// }

onSubmit(){
// console.log("Form :" + form.value);
// const cn=form.value.name;
// const cp=form.value.classification;
// const cd=form.value.description;
// const data =new Detailsmodel(cn,cp,cd)

console.log('Form : ' + this.dataList);

// const {cn,cp,cd}=this.dataList;
// const data=new Detailsmodel(cn,cp,cd);
this.myService.addCertificate(this.dataList);

this.router.navigate(['/']);
}

onBack(){
  this.router.navigate(['/']);
}
}
