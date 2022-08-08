package org.npci.rtorestapi.config.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Police_Officer")
public class PoliceOfficer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="personel_id")
	private long personelId;
	
	@Column(name="first_name")
	private String firstName;
	
	@Column(name="last_name")
	private String lastName;
	
	@Column(name="password")
	private String password;

	public PoliceOfficer() {
		
	}

	public PoliceOfficer(long personelId, String firstName, String lastName, String password) {
		super();
		this.personelId = personelId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.password = password;
	}

	public long getPersonalId() {
		return personelId;
	}

	public void setPersonalId(long personelId) {
		this.personelId = personelId;
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

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	@Override
	public String toString() {
		return "PoliceOfficer [personalId=" + personelId + ", firstName=" + firstName + ", lastName=" + lastName
				+ ", password=" + password + "]";
	}
}
