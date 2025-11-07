package com.example.racing.controller;

import com.example.racing.model.Contacto;
import com.example.racing.repository.ContactoRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class WebController {

    private final ContactoRepository contactoRepository;

    
    public WebController(ContactoRepository contactoRepository) {
        this.contactoRepository = contactoRepository;
    }


    @GetMapping("/")
    public String index() {
        return "index";
    }


    @GetMapping("/conocenos")
    public String conocenos() {
        return "conocenos";
    }

    @GetMapping("/historia")
    public String historia() {
        return "historia";
    }


    @GetMapping("/plantilla")
    public String plantilla() {
        return "plantilla";
    }


    @GetMapping("/contacto")
    public String contacto(Model model) {
        model.addAttribute("contacto", new Contacto());
        return "contacto";
    }


    @PostMapping("/contacto")
    public String guardarContacto(@RequestParam String nombre,@RequestParam String email,@RequestParam String mensaje) {

        Contacto c = new Contacto();
        c.setNombre(nombre);
        c.setEmail(email);
        c.setMensaje(mensaje);

        contactoRepository.save(c);


        return "redirect:/contacto?ok";
    }


    @GetMapping("/admin/contactos")
    public String listaContactos(Model model) {
        model.addAttribute("contactos", contactoRepository.findAll());
        return "lista-contactos";
    }
}
