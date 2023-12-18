package com.example.api.service.imlp;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.example.api.entity.Contact;
import com.example.api.service.ContactService;
import com.example.api.repository.ContactRepository; // Đảm bảo sửa đổi repository nếu cần

import java.util.Optional;

@Service
@AllArgsConstructor
public class ContactServiceImpl implements ContactService {

    private ContactRepository contactRepository; // Đảm bảo sửa đổi repository nếu cần

    @Override
    public Contact createContact(Contact contact) {
        return contactRepository.save(contact);
    }

    @Override
    public Contact getContactById(Long contactId) {
        Optional<Contact> optionalContact = contactRepository.findById(contactId);
        return optionalContact.orElse(null);
    }

    @Override
    public Page<Contact> getAllContacts(Pageable pageable) {
        return contactRepository.findAll(pageable);
    }

    @Override
    public Contact updateContact(Contact contact) {
        Contact existingContact = contactRepository.findById(contact.getId()).orElse(null);

        if (existingContact != null) {
            existingContact.setUserId(contact.getUserId());
            existingContact.setName(contact.getName());
            existingContact.setEmail(contact.getEmail());
            existingContact.setPhone(contact.getPhone());
            existingContact.setTitle(contact.getTitle());
            existingContact.setContent(contact.getContent());
            existingContact.setReplayId(contact.getReplayId());
            existingContact.setCreatedAt(contact.getCreatedAt());
            existingContact.setUpdatedAt(contact.getUpdatedAt());
            existingContact.setCreatedBy(contact.getCreatedBy());
            existingContact.setUpdatedBy(contact.getUpdatedBy());
            existingContact.setStatus(contact.getStatus());

            Contact updatedContact = contactRepository.save(existingContact);
            return updatedContact;
        } else {
            // Handle the case where the contact with the given ID is not found.
            return null;
        }
    }

    @Override
    public void deleteContact(Long contactId) {
        contactRepository.deleteById(contactId);
    }
}

