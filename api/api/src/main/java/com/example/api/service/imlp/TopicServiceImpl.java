package com.example.api.service.imlp;

import lombok.AllArgsConstructor;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import com.example.api.entity.Topic; // Import the Topic entity
import com.example.api.service.TopicService; // Import the TopicService
import com.example.api.repository.TopicRepository; // Import the TopicRepository
import java.util.Optional;

@Service    
@AllArgsConstructor
public class TopicServiceImpl implements TopicService { // Rename the class

    private TopicRepository topicRepository; // Rename the repository

    @Override
    public Topic createTopic(Topic topic) {
        return topicRepository.save(topic);
    }

    @Override
    public Topic getTopicById(Long topicId) {
        Optional<Topic> optionalTopic = topicRepository.findById(topicId);
        return optionalTopic.orElse(null);
    }

    @Override
    public Page<Topic> getAllTopics(Pageable pageable) {
        return topicRepository.findAll(pageable);
    }

    @Override
    public Topic updateTopic(Topic topic) {
        Topic existingTopic = topicRepository.findById(topic.getId()).orElse(null);
        if (existingTopic != null) {
            existingTopic.setName(topic.getName());
            existingTopic.setSlug(topic.getSlug());
            existingTopic.setParentId(topic.getParentId());
            existingTopic.setMetakey(topic.getMetakey());
            existingTopic.setMetadesc(topic.getMetadesc());
            existingTopic.setCreatedAt(topic.getCreatedAt());
            existingTopic.setUpdatedAt(topic.getUpdatedAt());
            existingTopic.setCreatedBy(topic.getCreatedBy());
            existingTopic.setUpdatedBy(topic.getUpdatedBy());
            existingTopic.setStatus(topic.getStatus());

            Topic updatedTopic = topicRepository.save(existingTopic);
            return updatedTopic;
        }
        return null;
    }

    @Override
    public void deleteTopic(Long topicId) {
        topicRepository.deleteById(topicId);
    }
}
