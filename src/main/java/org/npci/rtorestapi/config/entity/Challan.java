package org.npci.rtorestapi.config.entity;

import java.sql.Time;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Challan")
public class Challan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private long challanId;

	@Column(name = "challan_date")
	private Date challanDate;

	@Column(name = "challan_time")
	private String challanTime;

	@Column(name = "challan_location")
	private long pincode;

	@Column(name = "image_proof")
	private String imageProof;

	@Column(name = "police_personel_id")
	private long policePersonelId;

	@Column(name = "vehicle_plate_number")
	private String vehiclePlateNumber;

	@Column(name = "violations")
	private String violations;

	@Column(name = "total_fine")
	private int totalFine;

	@Column(name = "due_date")
	private Date dueDate;
	
	@Column(name = "paid_date")
	private Date paidDate;

	@Column(name = "is_due_date_valid")
	private boolean dueDateValid;

	@Column(name = "is_challan_closed")
	private boolean challanClosed;

	@Column(name = "is_challan_disputed")
	private boolean challanDisputed;

	@Column(name = "dispute_message")
	private String disputeMessage;

	public Challan() {

	}

	public Challan(long challanId, Date challanDate, String challanTime, long pincode, String imageProof,
			long policePersonelId, String vehiclePlateNumber, String violations, int totalFine, Date dueDate,
			Date paidDate, boolean dueDateValid, boolean challanClosed, boolean challanDisputed,
			String disputeMessage) {
		super();
		this.challanId = challanId;
		this.challanDate = challanDate;
		this.challanTime = challanTime;
		this.pincode = pincode;
		this.imageProof = imageProof;
		this.policePersonelId = policePersonelId;
		this.vehiclePlateNumber = vehiclePlateNumber;
		this.violations = violations;
		this.totalFine = totalFine;
		this.dueDate = dueDate;
		this.paidDate = paidDate;
		this.dueDateValid = dueDateValid;
		this.challanClosed = challanClosed;
		this.challanDisputed = challanDisputed;
		this.disputeMessage = disputeMessage;
	}

	public long getChallanId() {
		return challanId;
	}

	public void setChallanId(long challanId) {
		this.challanId = challanId;
	}

	public Date getChallanDate() {
		return challanDate;
	}

	public void setChallanDate(Date challanDate) {
		this.challanDate = challanDate;
	}

	public String getChallanTime() {
		return challanTime;
	}

	public void setChallanTime(String challanTime) {
		this.challanTime = challanTime;
	}

	public long getPincode() {
		return pincode;
	}

	public void setPincode(long pincode) {
		this.pincode = pincode;
	}

	public String getImageProof() {
		return imageProof;
	}

	public void setImageProof(String imageProof) {
		this.imageProof = imageProof;
	}

	public long getPolicePersonelId() {
		return policePersonelId;
	}

	public void setPolicePersonelId(long policePersonelId) {
		this.policePersonelId = policePersonelId;
	}

	public String getVehiclePlateNumber() {
		return vehiclePlateNumber;
	}

	public void setVehiclePlateNumber(String vehiclePlateNumber) {
		this.vehiclePlateNumber = vehiclePlateNumber;
	}

	public String getViolations() {
		return violations;
	}

	public void setViolations(String violations) {
		this.violations = violations;
	}

	public int getTotalFine() {
		return totalFine;
	}

	public void setTotalFine(int totalFine) {
		this.totalFine = totalFine;
	}

	public Date getDueDate() {
		return dueDate;
	}

	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}

	public Date getPaidDate() {
		return paidDate;
	}

	public void setPaidDate(Date paidDate) {
		this.paidDate = paidDate;
	}

	public boolean isDueDateValid() {
		return dueDateValid;
	}

	public void setDueDateValid(boolean dueDateValid) {
		this.dueDateValid = dueDateValid;
	}

	public boolean isChallanClosed() {
		return challanClosed;
	}

	public void setChallanClosed(boolean challanClosed) {
		this.challanClosed = challanClosed;
	}

	public boolean isChallanDisputed() {
		return challanDisputed;
	}

	public void setChallanDisputed(boolean challanDisputed) {
		this.challanDisputed = challanDisputed;
	}

	public String getDisputeMessage() {
		return disputeMessage;
	}

	public void setDisputeMessage(String disputeMessage) {
		this.disputeMessage = disputeMessage;
	}

	@Override
	public String toString() {
		return "Challan [challanId=" + challanId + ", challanDate=" + challanDate + ", challanTime=" + challanTime
				+ ", pincode=" + pincode + ", imageProof=" + imageProof + ", policePersonelId=" + policePersonelId
				+ ", vehiclePlateNumber=" + vehiclePlateNumber + ", violations=" + violations + ", totalFine="
				+ totalFine + ", dueDate=" + dueDate + ", paidDate=" + paidDate + ", dueDateValid=" + dueDateValid
				+ ", challanClosed=" + challanClosed + ", challanDisputed=" + challanDisputed + ", disputeMessage="
				+ disputeMessage + "]";
	}
	

}
