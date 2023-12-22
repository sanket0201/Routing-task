import { Injectable } from '@angular/core';
import {  Detailsmodel } from './details.model';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  // deCert!:Detailsmodel;
  details:Detailsmodel[]=[];

  addCertificate(mydata:Detailsmodel){
    this.details.push(mydata);
    console.log(mydata);
console.log(this.details);

  }

  getCert(){
    return this.details.slice();
  }

//   getDataByName(dname:string):Detailsmodel{
// return this.getCert().find(data=> data.name==dname) ?? new Detailsmodel();
//   }

  deleteCertificate(){
    this.details.pop();
  }

  // getCertificate(id: number) {
  //   const certi = this.details.find(
  //     (s) => {
  //       return s.id === id;
  //     }
  //   );
  //   return certi;
  // }

  getcertbyId(index: number){
    return this.details[index];
  }

}
