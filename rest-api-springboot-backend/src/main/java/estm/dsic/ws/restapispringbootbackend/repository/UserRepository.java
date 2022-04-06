package estm.dsic.ws.restapispringbootbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import estm.dsic.ws.restapispringbootbackend.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User getUserByEmailAndPassword(String email, String password);
}