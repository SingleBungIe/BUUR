package com.bigdata.buur.user.repository;

import com.bigdata.buur.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUserId(String userId);
    boolean existsByUserId(String userId);
    boolean existsByNickname(String user_nickname);


}
