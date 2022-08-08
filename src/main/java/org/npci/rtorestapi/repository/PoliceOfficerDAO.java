package org.npci.rtorestapi.repository;

import org.npci.rtorestapi.config.entity.PoliceOfficer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestParam;

@RepositoryRestResource(path = "trafficofficer")
@CrossOrigin("http://localhost:4200/")
public interface PoliceOfficerDAO extends JpaRepository<PoliceOfficer, Long>{

	PoliceOfficer findByPersonelIdAndPassword(@RequestParam("personaelId") long personelId, @RequestParam("password") String password);
}
