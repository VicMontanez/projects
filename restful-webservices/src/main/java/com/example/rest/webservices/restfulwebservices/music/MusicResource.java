package com.example.rest.webservices.restfulwebservices.music;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MusicResource {
	
	@Autowired
	private MusicHardcodedService musicService;
	
	@GetMapping("users/{username}/music")
	public List<Music> getAllMusic(@PathVariable String username){
		return musicService.findAll();
	}
}