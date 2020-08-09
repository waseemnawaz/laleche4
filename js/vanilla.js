"use strict";

//span class icon bar 3 times

let span_icon_bar;
let navbar_toggle = document.querySelector('.navbar-toggle');

let icon_bar = function(){
	for(let i = 0; i < 3; i++){
		span_icon_bar = document.createElement('span');
		span_icon_bar.setAttribute('class', 'icon-bar');
		navbar_toggle.appendChild(span_icon_bar);
	}
};

let iconBar = icon_bar();





//the logo

let navbar_brand = document.querySelector('.navbar-brand');
let navbar_brandA = document.createElement('a');
let navbar_brandImg = document.createElement('img');

navbar_brandA.setAttribute('href', "#");
navbar_brandImg.setAttribute('src', "img/wetransfer-5c02d2/La-Leche-transparente1.png");
navbar_brandImg.setAttribute('class', "img-responsive");

navbar_brandA.appendChild(navbar_brandImg);
navbar_brand.appendChild(navbar_brandA);


// the navigation bar contents. 
const navbar_right = document.querySelector('.navbar-right');

let navbar_right_li;
let navbar_right_a;

let createTheNavbarLis = function(){
	for(let i = 0; i < navBarNames.length; i++){
		navbar_right_li = document.createElement('li');
		navbar_right_a = document.createElement('a');
		navbar_right_a.setAttribute('href', "#" + navBarHrefNames[i]);
		navbar_right_a.innerHTML = navBarNames[i];
		navbar_right_li.appendChild(navbar_right_a);
		//console.log(navbar_right_li);
		navbar_right.appendChild(navbar_right_li);
		//console.log(navbar_right);
	}
};

// call the function
let newNavBar = createTheNavbarLis();

//add the large pic dynamically

let bigpik = document.getElementById('bigpik');


let bigpikA = document.createElement('a');
bigpikA.setAttribute('href', "img/wetransfer-5c02d2/4J4A5214.jpg");
bigpikA.setAttribute('data-lightbox', "4J4A5214");


let bigpikImg = document.createElement('img');
bigpikImg.setAttribute('src', "img/wetransfer-5c02d2/4J4A5214.jpg");
bigpikImg.setAttribute('class', "img-responsive");

bigpikA.appendChild(bigpikImg);
bigpik.appendChild(bigpikA);
//console.log(bigpikA);

//text for the intro

let intro = document.querySelector('.intro');
let introP1 = document.createElement('p');
introP1.innerHTML = "Somos LA LECHE CEBICHERIA PERUANA, un restaurante casual de pescados y mariscos.";
let introP2 = document.createElement('p');
introP2.innerHTML = "Con la pesca del día e insumos de calidad ofrecemos una comida de mar variada.";
intro.appendChild(introP1);
intro.appendChild(introP2);
//console.log(intro);

//pic for the intro

let anygoodpic = document.querySelector('.anygoodpic');

let anygoodpicA = document.createElement('a');
anygoodpicA.setAttribute('href', "img/wetransfer-5c02d2/foto1.jpg");
anygoodpicA.setAttribute('data-lightbox', "foto1");

let anygoodpicImg = document.createElement('img');
anygoodpicImg.setAttribute('src', 'img/wetransfer-5c02d2/foto1.jpg');
anygoodpicImg.setAttribute('class', 'img-responsive');

anygoodpic.appendChild(anygoodpicA);
anygoodpicA.appendChild(anygoodpicImg);
//console.log(anygoodpic);

//loquehacermos text

let workintro = document.querySelector('.workintro');
let workintroH2 = document.createElement('h2');
workintroH2.innerHTML = 'Lo que hacemos';

let workintroP = document.createElement('p');
workintroP.innerHTML = 'Cocina de mar fresca, recomendamos probar nuestras leches de tigre, cebiches, causas y tiraditos, ensaladas, quinoa, arroces y panes marinos. Nuestras pizarras exhiben las novedades o los platos fuera de carta, te invitamos a descubrirlas!';

workintro.appendChild(workintroH2);
workintro.appendChild(workintroP);

//pic for loquehacemos

let slidez = document.querySelector('.slidez');

let slidezA = document.createElement('a');
slidezA.setAttribute('href', 'img/wetransfer-5c02d2/foto1.jpg');
slidezA.setAttribute('data-lightbox', '4J4A5195');

let slidezImg = document.createElement('img');
slidezImg.setAttribute('src', 'img/wetransfer-5c02d2/4J4A5195.jpg');
slidezImg.classList.add('img-responsive', 'slidezz');

slidez.appendChild(slidezA);
slidezA.appendChild(slidezImg);

//photo gallery
let photo_gallery = document.querySelector('.photo-gallery');
let colPhotoGallery; //the col
let thumbnaill; //the first div
let thumbnaillA; //a element inside div
let thumbnaillImg; //the img inside the a element
let caption; //the second div
let captionP; // the p element inside the caption

let outputThumbnails = function(){
	photoGallery.forEach(function(item){
		//the col
		colPhotoGallery = document.createElement('div');
		//colPhotoGallery.classList.add('col-xs-18', 'col-sm-6', 'col-md-3');
		colPhotoGallery.classList.add('col-md-4');
		//the div thumbnaill
		thumbnaill = document.createElement('div');
		thumbnaill.setAttribute('class', 'thumbnaill');
		//the a element
		thumbnaillA = document.createElement('a');
		thumbnaillA.setAttribute('href', item.href);
		thumbnaillA.setAttribute('data-lightbox', item.dataLightbox);
		//the img element
		thumbnaillImg = document.createElement('img');
		thumbnaillImg.setAttribute('src', item.href);
		thumbnaillImg.setAttribute('class', item.class);
		thumbnaillImg.setAttribute('id', item.id);

		//the caption
		caption = document.createElement('div');
		caption.setAttribute('class', 'caption');
		captionP = document.createElement('p');
		captionP.innerHTML = item.pElement;

		//appending
		photo_gallery.appendChild(colPhotoGallery);
		colPhotoGallery.appendChild(thumbnaill);
		colPhotoGallery.appendChild(caption);
		thumbnaill.appendChild(thumbnaillA);
		thumbnaillA.appendChild(thumbnaillImg);
		caption.append(captionP);
	});
};

outputThumbnails();


//let thePhotos = document.getElementById('fotos');
//console.log(thePhotos);


// make the accordion dynamic but still rely on the bootstrap js

let accordion = document.getElementById('accordion');
//console.log(accordion);


//define all the elements that you need
let panel_default;
let panel_heading;
let panel_title;
let panelAElement;
let spanGlyphicon;
let panelATextNode;
let divCollapse;
let panel_body;


let createAccordion = function(){
	accordionData.forEach(function(item){
		//the outer divs first for panel-default
		panel_default = document.createElement('div');
		panel_default.classList.add('panel', 'panel-default');
		
		panel_heading = document.createElement('div');
		panel_heading.setAttribute('class', 'panel-heading');

		panel_title = document.createElement('h4');
		panel_title.setAttribute('class', 'panel-title');

		//append the divs and h4
		accordion.appendChild(panel_default);
		panel_default.appendChild(panel_heading);
		panel_heading.appendChild(panel_title);

		//the a element
		panelAElement = document.createElement('a');
		panelAElement.setAttribute('data-toggle', 'collapse');
		panelAElement.setAttribute('data-parent', '#accordion');
		panelAElement.setAttribute('href', item.href);

		//span inside a
		spanGlyphicon = document.createElement('span');
		//spanGlyphicon.classList.add('glyphicon', 'glyphicon-plus');
		
		//create the text node
		panelATextNode = document.createTextNode(item.question);

		//a appends span
		panelAElement.appendChild(spanGlyphicon);

		//append a to h4
		panel_title.appendChild(panelAElement);

		//question inside the a element
		panelAElement.appendChild(panelATextNode);
		//panel heading is done here

		//the collapse div starts here
		divCollapse = document.createElement('div');
		divCollapse.setAttribute('id', item.divId);
		divCollapse.setAttribute('class', item.divClass);
		//console.log(divCollapse);
		
		//panel_body
		panel_body = document.createElement('div');
		panel_body.setAttribute('class', 'panel-body');
		panel_body.innerText = item.reply;

		//append the panel to the div
		divCollapse.appendChild(panel_body);
		panel_default.appendChild(divCollapse);
	});
};

createAccordion();
//console.log(accordion);

//the facebook section

let anything = document.querySelector('.anything');
let anythingP = '<p>Nos puede llamar o mandar un mensaje por Whatsapp al número siguente: 993490515. Nos puede también contactar a través de Facebook o de Instagram:</p>';
let anythingA = '<a href="https://www.facebook.com/LALECHECEBICHERIAPERUANA/?fref=ts" target="_blank"><img src="img/Attachments_2016614/iconfinder_Colored_Facebook.png" class="img-responsive social"></a>';
let anythingC = '<a href="https://www.instagram.com/la_leche_cebicheria_peruana/?hl=en" target="_blank"><img src="img/Attachments_2016614/iconfinder_1_Instagram.png" class="img-responsive social"></a>';


anything.innerHTML += anythingP;
anything.innerHTML += anythingA;
anything.innerHTML += anythingC;

//dosmapas section

let dosmapas = document.querySelector('.dosmapas');

let p1 = '<p>Tenemos dos locales:</p>';
let p2 = '<p>Calle los Tulipanes 150 - Segundo Piso, Santiago de Surco, Lima.</p>';
let p3 = '<p>Teléfono: 986 603 987</p>';
let iframe1 = '<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=CALLE%20LOS%20TULIPANES%20150%2C%20SANTIAGO%20DE%20SURCO%2C%20LIMA%20Tel%C3%A9fono&key=AIzaSyBUuaslfPXjsJ5UPl3XBecXcgl5AMgMnRw" allowfullscreen class="img responsive geo"></iframe>';
//console.log(iframe1);

let p4 = '<p>Calle Augusto Tamayo 188, San Isidro, Lima.</p>';
let p5 = '<p>Teléfono: 993 490 515</p>';
let iframe2 = '<iframe width="600" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=Calle%20Augusto%20Tamayo%20188%2C%20San%20Isidro%2C%20Lima&key=AIzaSyBrz6w7D8I5-jK3WrF8juNUqIXIlA3z-Ys" allowfullscreen class="img responsive geo"></iframe>';

dosmapas.innerHTML += p1;
//console.log(dosmapas.innerHTML);
dosmapas.innerHTML += p2;
dosmapas.innerHTML += p3;
dosmapas.innerHTML += iframe1; 
dosmapas.innerHTML += p4;
dosmapas.innerHTML += p5;
dosmapas.innerHTML += iframe2;
//console.log(dosmapas.innerHTML);



//copyright
//console.log('hello')
console.log(new Date().getFullYear());

let copyright = document.querySelector('.copyright');
copyright.innerHTML = '&copy; La Leche Cebichería Peruana ' + new Date().getFullYear();




console.log('hello')