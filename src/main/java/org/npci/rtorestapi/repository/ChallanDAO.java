package org.npci.rtorestapi.repository;

import java.util.List;

import org.npci.rtorestapi.config.entity.Challan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@RepositoryRestResource(path = "challan")
@CrossOrigin("http://localhost:4200/")
public interface ChallanDAO extends JpaRepository<Challan, Long>{

	List<Challan> findByPolicePersonelIdAndChallanClosedAndChallanDisputed(@RequestParam("policePersonalId") long policePersonalId, @RequestParam("challanClosed") boolean challanClosed, @RequestParam("challanDisputed") boolean challanDisputed);
	List<Challan> findByVehiclePlateNumberAndChallanClosedAndChallanDisputed(@RequestParam("vehiclePlateNumber") String vehiclePlateNumber, @RequestParam("challanClosed") boolean challanClosed, @RequestParam("challanDisputed") boolean challanDisputed);
	List<Challan> findByVehiclePlateNumberAndChallanClosed(@RequestParam("vehiclePlateNumber") String vehiclePlateNumber, @RequestParam("challanClosed") boolean challanClosed);
	List<Challan> findByPolicePersonelIdAndChallanClosed(@RequestParam("policePersonalId") long policePersonalId, @RequestParam("challanClosed") boolean challanClosed);
}
