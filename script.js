const translations = {
    es: {
        inicio: "Inicio",
        sobremi: "Sobre mí",
        imagenes: "Imágenes",
        contacto: "Contacto",
        bienvenido: "Bienvenido a la Fotografía Deportiva de Motor",
        descripcion: "Capturando los momentos más emocionantes de las carreras de motociclismo y automovilismo.",
        biografia: "Soy un fotógrafo apasionado por la velocidad y las emociones que se viven en cada carrera.",
        seleccion: "Seleccione una categoría:",
        motociclismo: "Motociclismo",
        desc_motociclismo: "Fotos de alta calidad de las carreras de motociclismo más emocionantes.",
        automovilismo: "Automovilismo",
        desc_automovilismo: "Fotos de alta calidad de las carreras de automovilismo más emocionantes.",
        nombre: "Nombre",
        correo: "Correo Electrónico",
        mensaje: "Mensaje",
        enviar: "Enviar"
    },
    ca: {
        inicio: "Inici",
        sobremi: "Sobre mi",
        imagenes: "Imatges",
        contacto: "Contacte",
        bienvenido: "Benvingut a la Fotografia Esportiva de Motor",
        descripcion: "Capturant els moments més emocionants de les curses de motociclisme i automobilisme.",
        biografia: "Sóc un fotògraf apassionat per la velocitat i les emocions que es viuen en cada cursa.",
        seleccion: "Seleccioneu una categoria:",
        motociclismo: "Motociclisme",
        desc_motociclismo: "Fotos d'alta qualitat de les curses de motociclisme més emocionants.",
        automovilismo: "Automobilisme",
        desc_automovilismo: "Fotos d'alta qualitat de les curses d'automobilisme més emocionants.",
        nombre: "Nom",
        correo: "Correu Electrònic",
        mensaje: "Missatge",
        enviar: "Enviar"
    },
    en: {
        inicio: "Home",
        sobremi: "About Me",
        imagenes: "Images",
        contacto: "Contact",
        bienvenido: "Welcome to Motor Sports Photography",
        descripcion: "Capturing the most exciting moments of motorcycle and car racing.",
        biografia: "I am a photographer passionate about speed and the emotions that are lived in each race.",
        seleccion: "Select a category:",
        motociclismo: "Motorcycling",
        desc_motociclismo: "High-quality photos of the most exciting motorcycle races.",
        automovilismo: "Car Racing",
        desc_automovilismo: "High-quality photos of the most exciting car races.",
        nombre: "Name",
        correo: "Email",
        mensaje: "Message",
        enviar: "Send"
    }
};

function setLang(lang) {
    document.querySelectorAll("[data-lang]").forEach(element => {
        const key = element.getAttribute("data-lang");
        element.textContent = translations[lang][key];
    });
}
