import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleOwnerLoginComponent } from './components/vehicle-owner-login/vehicle-owner-login.component';
import { RtoLoginComponent } from './components/rto-login/rto-login.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { VehicleOwnerHomePageComponent } from './components/vehicle-owner-home-page/vehicle-owner-home-page.component';
import { RtoFormsNewchallanComponent } from './components/rto-forms-newchallan/rto-forms-newchallan.component';
import { PendingChallansComponent } from './components/pending-challans/pending-challans.component';
import { PaidChallansComponent } from './components/paid-challans/paid-challans.component';
import { RtoHomePageComponent } from './components/rto-home-page/rto-home-page.component';
import { RtoReportComponent } from './components/rto-report/rto-report.component';
import { DisputedChallansComponent } from './components/disputed-challans/disputed-challans.component';
import { ClosedChallansComponent } from './components/closed-challans/closed-challans.component';
import { UpdateChallanFormComponent } from './components/update-challan-form/update-challan-form.component';
import { DisputedChallansActionsComponent } from './components/disputed-challans-actions/disputed-challans-actions.component';
import { PaymentsPageComponent } from './components/payments-page/payments-page.component';

const route : Routes = [
  {path : '',component : WelcomePageComponent},
  {path : 'rtologin', component : RtoLoginComponent },
  {path : 'vehicleownerlogin', component : VehicleOwnerLoginComponent},
  {path : 'owner/homepage', component:VehicleOwnerHomePageComponent},
  {path : 'rto/addchallan', component:RtoFormsNewchallanComponent},
  {path : 'owner/pendingchallan', component:PendingChallansComponent},
  {path : 'owner/paidchallan', component:PaidChallansComponent},
  {path : 'rto/homepage', component:RtoHomePageComponent},
  {path : 'rto/reports', component:RtoReportComponent},
  {path : 'rto/disputedchallan', component:DisputedChallansComponent},
  {path : 'rto/closedchallan', component:ClosedChallansComponent},
  {path : 'owner/pendingchallan/dispute/:challanId', component:UpdateChallanFormComponent},
  {path : 'rto/disputedchallan/action/:challanId', component:DisputedChallansActionsComponent},
  {path : 'owner/pendingchallan/payment/:challanId', component:PaymentsPageComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    VehicleOwnerLoginComponent,
    RtoLoginComponent,
    WelcomePageComponent,
    VehicleOwnerHomePageComponent,
    RtoFormsNewchallanComponent,
    PendingChallansComponent,
    PaidChallansComponent,
    RtoHomePageComponent,
    RtoReportComponent,
    DisputedChallansComponent,
    ClosedChallansComponent,
    UpdateChallanFormComponent,
    DisputedChallansActionsComponent,
    PaymentsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(route)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
