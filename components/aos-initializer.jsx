"use client";

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
    // Opcional: Si tienes contenido que se carga dinámicamente y necesita un refresh de AOS
    // AOS.refresh();
  }, []);

  return null;
}