package com.ibrahim.media.services;


import com.ibrahim.media.dto.MediaRequestDTO;
import com.ibrahim.media.models.Media;
import com.ibrahim.media.repository.MediaRepository;
import com.ibrahim.media.utility.ImageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.Optional;

@Service
public class MediaService {

    @Autowired
    private MediaRepository mediaRepository;


    public List<Media> findAll() {
        return mediaRepository.findAll();
    }

    public Media saveMedia(Media media) {
        return mediaRepository.save(media);
    }






}