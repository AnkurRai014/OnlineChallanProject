import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-payments-page',
  templateUrl: './payments-page.component.html',
  styleUrls: ['./payments-page.component.css']
})
export class PaymentsPageComponent implements OnInit {

  challan: Challan = new Challan((0 as unknown as bigint), new Date(), "", (0 as unknown as bigint), "", (0 as unknown as bigint), "", "", 0, new Date(), new Date(), true, false, true, "");

  todayDate : Date;

  constructor(private service: ChallanServiceService,
    private route: Router,
    private activatedRoute: ActivatedRoute,
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

  pay(){
    if (confirm("Do you want to pay and proceed")) {
      this.challan.challanClosed = true;
      this.challan.paidDate = new Date();
      this.service.updateChallan(this.challan).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("owner/pendingchallan")
      });
      
    }
  }

  logout(){
    this.route.navigateByUrl("vehicleownerlogin");
  }

  back(){
    this.route.navigateByUrl("owner/pendingchallan")
  }

}
