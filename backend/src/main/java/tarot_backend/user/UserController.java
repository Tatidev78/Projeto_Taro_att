package tarot_backend.user;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "*")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 🔥 CADASTRO (AGORA COM DEBUG)
    @PostMapping("/register")
    public User register(@RequestBody User user) {

        // 🔍 DEBUG: verifica se o frontend chegou aqui
        System.out.println("🔥 CHEGOU USER: " + user.getEmail());

        return userRepository.save(user);
    }

    // 🔥 LOGIN
    @PostMapping("/login")
    public Map<String, Object> login(@RequestBody User user) {

        User foundUser = userRepository.findByEmail(user.getEmail());

        Map<String, Object> response = new HashMap<>();

        if (foundUser != null &&
                foundUser.getPassword().equals(user.getPassword())) {

            response.put("success", true);
            response.put("name", foundUser.getName());
            response.put("email", foundUser.getEmail());

            return response;
        }

        response.put("success", false);
        response.put("message", "Email ou senha inválidos");

        return response;
    }
}