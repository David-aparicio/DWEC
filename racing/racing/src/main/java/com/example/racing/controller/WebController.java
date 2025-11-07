package com.example.racing.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

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
    public String contacto() {
        return "contacto";
    }
}
