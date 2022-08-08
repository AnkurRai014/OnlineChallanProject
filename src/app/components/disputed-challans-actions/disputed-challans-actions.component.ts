import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-disputed-challans-actions',
  templateUrl: './disputed-challans-actions.component.html',
  styleUrls: ['./disputed-challans-actions.component.css']
})
export class DisputedChallansActionsComponent implements OnInit {

  challan: Challan = new Challan((0 as unknown as bigint), new Date(), "", (0 as unknown as bigint), "", (0 as unknown as bigint), "", "", 0, new Date(), new Date(), true, false, true, "");

  constructor(private service: ChallanServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  editable: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(() => { this.getChallanById() });
  }

  getChallanById() {
    const challanId = +this.activatedRoute.snapshot.paramMap.get("challanId");
    if (challanId > 0) {
      this.editable = true;
      this.service.getChallanById((challanId as unknown as bigint)).subscribe(data => { this.challan = data });
    }
  }
  logout(){
    this.route.navigateByUrl("/rtologin")

   }
   back(){
    this.route.navigateByUrl("rto/disputedchallan")

   }

  accept(){
    if (confirm("Do you want to close the challan")) {
      this.challan.challanClosed = true;
      console.log(this.challan)
      this.service.updateChallan(this.challan).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("rto/disputedchallan")
      });
    }
  }

  reject(){
    if (confirm("Do you want to reject the challan")) {
      this.challan.challanDisputed = false;
      console.log(this.challan)
      this.service.updateChallan(this.challan).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("rto/disputedchallan")
      });
    }
  }
}
