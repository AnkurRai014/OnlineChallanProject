import { Time } from "@angular/common";

export class Challan {
  [x: string]: any;

  constructor(
	public challanId : bigint,
    public challanDate : Date,
    public challanTime : string,
		public pincode : bigint,
		public imageProof : string,
		public policePersonelId : bigint,
		public vehiclePlateNumber : string,
		public violations : string,
		public totalFine : number,
		public dueDate : Date,
		public paidDate: Date,
		public dueDateValid : boolean,
		public challanClosed : boolean,
		public challanDisputed : boolean,
		public disputeMessage : string

  ){}
}
