"use strict";

//navigation bar 
let navBarNames = ["Nosotros", "Lo que hacemos", "Fotos", "Preguntas", "Contáctenos"];

//href names for navigation bar
let navBarHrefNames = ["nosotros", "loquehacemos", "fotos", "preguntas", "contactenos"];

//array of objects for the photo gallery

let photoGallery = [
    { 
        href: 'img/wetransfer-5c02d2/foto9.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage',
        pElement: 'Tiradito de ají amarillo plata y alcaparras'
    },
    {
        href: 'img/wetransfer-5c02d2/foto2.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage',
        pElement: 'Cebiche de pescado y pulpo con yuyo'
        
    },
    {
        href: 'img/wetransfer-5c02d2/foto3.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage',
        pElement: 'Leche al rocoto con langostinos y pulpo'
    },
    {
        href: 'img/wetransfer-5c02d2/foto4.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage',
        pElement: 'Chaufón mixto'
    },
    {
        href: 'img/wetransfer-5c02d2/foto5.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage',
        pElement: 'Causa de pescado'
    },
    {
        href: 'img/wetransfer-5c02d2/foto6.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage',
        pElement: 'Pulpo a la llama'
    },
    {
        href: 'img/wetransfer-5c02d2/foto7.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage',
        pElement: 'Tataki de atún'
    },
    {
        href: 'img/wetransfer-5c02d2/foto8.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage',
        pElement: 'Ciabatta con chicharrón de pescado'
    }
];

//console.log(photoGallery);


let accordionData = [
    {
        question: " Aceptan tarjetas de crédito?",
        reply: "Si.",
        href: "#collapseOne", 
        divId: "collapseOne",
        divClass: "panel-collapse collapse in"
    },
    {
        question: " Requiero reserva?",
        reply: "No requiere reservas.",
        href: "#collapseTwo", 
        divId: "collapseTwo",
        divClass: "panel-collapse collapse"
    }, 
    {
        question: " Días y hora de apertura?",
        reply: "De lunes a sábado de 9am a 4pm.",
        href: "#collapseThree", 
        divId: "collapseThree",
        divClass: "panel-collapse collapse"
    },
    {
        question: " Hacen catering?",
        reply: "Si hacemos catering, llámanos al 993490515.",
        href: "#collapseFour", 
        divId: "collapseFour",
        divClass: "panel-collapse collapse"
    }
];

//console.log(accordionData);

