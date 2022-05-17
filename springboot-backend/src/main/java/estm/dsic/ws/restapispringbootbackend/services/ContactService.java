package estm.dsic.ws.restapispringbootbackend.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import estm.dsic.ws.restapispringbootbackend.entities.Contact;
import estm.dsic.ws.restapispringbootbackend.exception.UserNotFoundException;
import estm.dsic.ws.restapispringbootbackend.repository.ContactRepository;

@Service
@Transactional
public class ContactService {
    private ContactRepository contactRepository;

    @Autowired
    public ContactService(ContactRepository contactRepository) {
        this.contactRepository = contactRepository;
    }

    public Contact addContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public List<Contact> findAllContacts() {
        return contactRepository.findAll();
    }

    public Contact updateContact(Contact contact) {
        return contactRepository.save(contact);
    }

    public Contact findContactById(Long id) {
        return contactRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException("Contact by id " + id + " was not found"));
    }

    public void deleteContact(Long id) {
        contactRepository.deleteById(id);
    }
}
