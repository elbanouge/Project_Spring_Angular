package estm.dsic.ws.restapispringbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import estm.dsic.ws.restapispringbootbackend.entities.Contact;

@Repository
public interface ContactRepository extends JpaRepository<Contact, Long> {

}