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
        id: 'thumbnailImage1',
        pElement: 'Tiradito de ají amarillo plata y alcaparras'
    },
    {
        href: 'img/wetransfer-5c02d2/foto2.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage2',
        pElement: 'Cebiche de pescado y pulpo con yuyo'
        
    },
    {
        href: 'img/wetransfer-5c02d2/foto3.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage3',
        pElement: 'Leche al rocoto con langostinos y pulpo'
    },
    {
        href: 'img/wetransfer-5c02d2/foto4.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage4',
        pElement: 'Chaufón mixto'
    },
    {
        href: 'img/wetransfer-5c02d2/foto5.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage5',
        pElement: 'Causa de pescado'
    },
    {
        href: 'img/wetransfer-5c02d2/foto6.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage6',
        pElement: 'Pulpo a la llama'
    },
    {
        href: 'img/wetransfer-5c02d2/foto7.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage7',
        pElement: 'Tataki de atún'
    },
    {
        href: 'img/wetransfer-5c02d2/foto8.jpg',
        dataLightbox: 'groupz',
        class: 'img-responsive', 
        id: 'thumbnailImage8',
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
        reply: "De lunes a domingo de 10am a 4pm.",
        href: "#collapseThree", 
        divId: "collapseThree",
        divClass: "panel-collapse collapse"
    },
    {
        question: " Hacen catering, delivery y hay para llevar? Hay atención en terraza?",
        reply: "Si todo eso hay, llámenos al 993490515.",
        href: "#collapseFour", 
        divId: "collapseFour",
        divClass: "panel-collapse collapse"
    }
];

//console.log(accordionData);

