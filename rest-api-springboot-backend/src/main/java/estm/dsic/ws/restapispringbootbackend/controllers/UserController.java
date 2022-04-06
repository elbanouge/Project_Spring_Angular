package estm.dsic.ws.restapispringbootbackend.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import estm.dsic.ws.restapispringbootbackend.entities.User;
import estm.dsic.ws.restapispringbootbackend.services.UserService;

@CrossOrigin(origins = "http://localhost:4200/")
@RestController
@RequestMapping("/api-rest")
class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("users/login")
    public ResponseEntity<User> loginUser(@RequestBody User user) throws Exception {
        String email = user.getEmail();
        String password = user.getPassword();

        User us = null;

        if (email != null && password != null) {
            us = this.userService.getUserByEmailAndPassword(email, password);
        } else if (us == null) {
            throw new Exception("Bad Login");
        }
        return new ResponseEntity<>(us, HttpStatus.OK);
    }

    @GetMapping("users/find/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") Long id) {
        User user = userService.findUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("users/add")
    public ResponseEntity<User> addUser(@RequestBody User user) {
        User newUser = userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
}