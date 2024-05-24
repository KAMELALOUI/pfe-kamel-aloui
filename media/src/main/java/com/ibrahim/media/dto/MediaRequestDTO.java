package com.ibrahim.media.dto;



import lombok.Data;

@Data
public class MediaRequestDTO {
    private String name;
    private String type;
    private Long siteId;
    private String imageData; // Base64-encoded image data
}

