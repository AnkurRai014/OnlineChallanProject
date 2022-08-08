import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-disputed-challans',
  templateUrl: './disputed-challans.component.html',
  styleUrls: ['./disputed-challans.component.css']
})
export class DisputedChallansComponent implements OnInit {

  challans : Challan[] = [];
  challan: Challan = new Challan((0 as unknown as bigint), new Date(), "", (0 as unknown as bigint), "", (0 as unknown as bigint), "", "", 0, new Date(), new Date(), true, false, true, "");
  editable : boolean = false;
  constructor(private service:ChallanServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.getDisputedChallan()
  }
  logout(){
    this.route.navigateByUrl("/rtologin")

   }
   back(){
    this.route.navigateByUrl("rto/homepage")

   }

  getDisputedChallan(){
    this.service.getChallanByPoliceAndDisputedAndPaid(this.service.policeOfficer.personalId,true,false).subscribe(data=>{
      console.log(data);
      this.challans = data;
    })
  }

  getChallanById() {
    const challanId = +this.activatedRoute.snapshot.paramMap.get("challanId");
    if (challanId > 0) {
      this.editable = true;
      this.service.getChallanById((challanId as unknown as bigint)).subscribe(data => { this.challan = data });
    }
  }

  actionPage(challanId:bigint){
    this.route.navigateByUrl("rto/disputedchallan/action/"+challanId);
  }

}
