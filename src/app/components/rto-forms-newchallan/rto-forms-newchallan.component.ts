import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Challan } from 'src/app/common/challan';
import { Policeofficer } from 'src/app/common/policeofficer';

@Component({
  selector: 'app-rto-forms-newchallan',
  templateUrl: './rto-forms-newchallan.component.html',
  styleUrls: ['./rto-forms-newchallan.component.css']
})
export class RtoFormsNewchallanComponent implements OnInit {

  officer : Policeofficer = this.service.policeOfficer;

  challan : Challan = new Challan((0 as unknown as bigint), new Date(), "", (0 as unknown as bigint),"",(this.officer.personalId),"","",0,new Date(), new Date(),true,false,false,"");
  constructor(private service : ChallanServiceService,
              private route : Router,
              private activeRoute : ActivatedRoute
              ) { }

    editable : boolean = false;
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(() => {this.getChallanById()});
    console.log(this.officer);
  }

  onSubmit(): void{
    console.log(this.challan)
    this.service.saveChallan(this.challan).subscribe(() =>{
      this.route.navigateByUrl("rto/homepage")
    })
   }

   getChallanById(){
    const chalId = +this.activeRoute.snapshot.paramMap.get("id");
    if(chalId > 0){

    }
   }

   logout(){
    this.route.navigateByUrl("/rtologin")

   }
   back(){
    this.route.navigateByUrl("rto/homepage")

   }

}
