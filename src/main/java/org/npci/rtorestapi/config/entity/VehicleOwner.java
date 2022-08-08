package org.npci.rtorestapi.config.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Vehicle_Owner")
public class VehicleOwner {

	@Id
	@Column(name="vehicle_plate_number")
	private String vehiclePlateNumber;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="address")
	private String address;
	
	@Column(name="phone_number")
	private long phoneNumber;
	
	@Column(name="password")
	private String password;	

	public VehicleOwner() {
		
	}

	public VehicleOwner(String vehiclePlateNumber, String firstName, String lastName, String address, long phoneNumber,
			String password) {
		super();
		this.vehiclePlateNumber = vehiclePlateNumber;
		this.firstName = firstName;
		this.lastName = lastName;
		this.address = address;
		this.phoneNumber = phoneNumber;
		this.password = password;
	}

	public String getVehiclePlateNumber() {
		return vehiclePlateNumber;
	}

	public void setVehiclePlateNumber(String vehiclePlateNumber) {
		this.vehiclePlateNumber = vehiclePlateNumber;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public long getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(long phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "VehicleOwner [vehiclePlateNumber=" + vehiclePlateNumber + ", firstName=" + firstName + ", lastName="
				+ lastName + ", address=" + address + ", phoneNumber=" + phoneNumber + ", password=" + password + "]";
	}
}
