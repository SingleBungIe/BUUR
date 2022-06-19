package com.bigdata.buur.review.service;

import com.bigdata.buur.review.dto.ReviewDto;
import com.bigdata.buur.review.dto.ReviewResDto;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.List;

@Service
public interface ReviewService {

    public List<ReviewResDto> findReviews(Long beerId, LocalDateTime cursor) throws IOException;
    public void addReview(ReviewDto reviewDto);
    public void removeReview(Long reviewId);

}
