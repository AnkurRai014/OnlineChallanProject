import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChallanServiceService } from 'src/app/challan-service.service';
import { Challan } from 'src/app/common/challan';

@Component({
  selector: 'app-update-challan-form',
  templateUrl: './update-challan-form.component.html',
  styleUrls: ['./update-challan-form.component.css']
})
export class UpdateChallanFormComponent implements OnInit {

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

  disputeSubmit(challandata: any) {
    if (this.editable) {
      this.challan.challanDisputed = true;
      this.challan.disputeMessage = challandata.disputeMessage;
      this.service.updateChallan(this.challan).subscribe(data => {
        console.log(data)
        this.route.navigateByUrl("owner/pendingchallan")
      });
      
    }
  }

  logout() {
    this.route.navigateByUrl("vehicleownerlogin")
  }

  back(){
    this.route.navigateByUrl("owner/pendingchallan")
  }
}
