package org.npci.rtorestapi.repository;

import org.npci.rtorestapi.config.entity.VehicleOwner;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@RepositoryRestResource(path = "vehicleowner")
@CrossOrigin("http://localhost:4200/")
public interface VehicleOwnerDAO extends JpaRepository<VehicleOwner, String>{

	VehicleOwner findByVehiclePlateNumberAndPassword(@RequestParam("vehiclePlateNumber") String vehiclePlateNumber, @RequestParam("password") String password);
}
