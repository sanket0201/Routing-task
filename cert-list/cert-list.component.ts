import { Component, Input, OnInit } from '@angular/core';
import { Detailsmodel } from '../details.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-cert-list',
  templateUrl: './cert-list.component.html',
  styleUrl: './cert-list.component.css'
})
export class CertListComponent {

  // @Input() certList!:Detailsmodel
  // @Input() id!:number

  constructor(private route:ActivatedRoute) {
    
  }

  // ngOnInit(): void {
  //   this.id=+this.route.snapshot.params['id'];
  //   this.route.params.subscribe((params:Params)=>{
  //     this.id=params['id'];
  //   })
  // }

}
