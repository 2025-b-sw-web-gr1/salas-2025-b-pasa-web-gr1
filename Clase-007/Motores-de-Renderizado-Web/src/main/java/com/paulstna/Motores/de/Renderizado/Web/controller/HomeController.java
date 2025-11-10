package com.paulstna.Motores.de.Renderizado.Web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {

    @GetMapping({"/", "/index"})
    public String index(Model model) {
        model.addAttribute("title", "SKT T1 y T1 - Campeonatos Mundiales de League of Legends");
        model.addAttribute("yearsSKT", new int[]{2013, 2015, 2016});
        model.addAttribute("yearsT1", new int[]{2023, 2024, 2025});
        return "index";
    }
}
