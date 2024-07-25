const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove("scroll-up");
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
		body.classList.remove("scroll-up");
		body.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains("scroll-down")
	) {
		body.classList.remove("scroll-down");
		body.classList.add("scroll-up");
	}
	lastScroll = currentScroll;
});



var menu = document.getElementById("menu");

nav = document.querySelector("nav"),

	modeToggle = document.querySelector(".theme"),
	menu = document.querySelector(".menu");
	close = document.querySelector(".openmenu");
	links = document.querySelector(".links");


	

	menu.onclick = function () {
		links.classList.toggle("active");
		menu.classList.toggle("openmenu");
	}


gsap.from(".heading h1",{
    opacity:0,
    y:600,
    duration:0.5
},"elem")

gsap.from(".description h3",{
    opacity:0,
    y:600,
    duration:0.5
},"elem")

gsap.from(".page2 button",{
    opacity:0,
    y:600,
    duration:0.5
},"elem")

document.addEventListener('DOMContentLoaded', () => {
    
    const productImages = {
        1: [
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/7a1cf2fc-158a-47b6-95e1-8d65c992f731/air-jordan-1-mid-se-shoes-jbRhW6.png',
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/2d83644c-9872-4ab3-9725-07f901582fb3/air-jordan-1-mid-se-shoes-jbRhW6.png',
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/f50afa48-60d9-44a7-bf1f-f63ada670aa8/air-jordan-1-mid-se-shoes-jbRhW6.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/27bcdd45-9911-492f-9ca5-4b291965fc45/air-jordan-1-mid-se-shoes-jbRhW6.png'
        ],
        2: [
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/862c7925-cd46-4ff3-a261-f82d1bf0f7d0/zoom-vomero-5-shoes-dNXJXp.png',
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e3d47fcf-c1f8-4bc6-8a9d-ac58a1b54ec1/zoom-vomero-5-shoes-dNXJXp.png',
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/43b45cbd-d9b4-4de3-b26c-5d4610cec8cd/zoom-vomero-5-shoes-dNXJXp.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/daea3ccf-faee-44c5-b99c-8d4bf4214f4f/zoom-vomero-5-shoes-dNXJXp.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3e8804b5-7151-44bd-b5f1-14f2fb622b1b/zoom-vomero-5-shoes-dNXJXp.png'
        ],
		3:[
            'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b889b034-dcc0-4885-9b72-524966c032cf/air-force-1-wild-shoes-FCjQ2C.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/4f0952a4-c84a-41b3-9792-454185e98658/air-force-1-wild-shoes-FCjQ2C.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/228ba561-7e88-40f3-b395-5a6b91fb8f31/air-force-1-wild-shoes-FCjQ2C.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e0fc0ac6-1b3d-4952-84ca-cc3dd94d42d9/air-force-1-wild-shoes-FCjQ2C.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8e252324-bbfa-4ba1-aef1-a4622349474f/air-force-1-wild-shoes-FCjQ2C.png',
			'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/74103352-374d-4d2a-8670-cbc6e7a9489e/air-force-1-wild-shoes-FCjQ2C.png'

		],
       4:[
           'https://secure-render.nike.com/is/image/nikeid/?layer=0&src=ir(nikeidrender/af1MidEssHO22_v1?obj=/s/shadow/shad&show=&color=000000&obj=/s/g16&color=f7f6ff&show=&obj=/s/g15&color=f09734&show=&obj=/s/g14&color=f7f6ff&show=&obj=/s/g13&color=2f2c2f&show=&obj=/s/g10&color=fdf8fa&show=&obj=/s/g12&color=f7f5ff&show=&obj=/s/g17&color=f5f4fe&show=&obj=/s/g11&color=e48f3d&show=&obj=/s/g1/leather&color=e79740&show=&obj=/s/g2/leather&color=fdf8fa&show=&obj=/s/g3/leather&color=fdf8fa&show=&obj=/s/g4/leather&color=e79740&show=&obj=/s/g5/canvas&color=212022&show=&obj=/s/g6/leather&color=fdf8fa&show=&obj=/s/g7/canvas&color=f29731&show=&obj=/s/g8/canvas&color=f29731&show=&obj=/s/g18/solid&color=fef9fa&show=&obj=/s/g23/logo&color=e48f3d&show=&obj=/s/g19&color=fef9fa&show=&obj=/s/g20&color=f0eeff&show=&obj=/s/g21/solid&color=eb9637&show=&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB)bgc=f5f5f5&fmt=jpeg&qlt=90&posN=0,-0.1&icc=AdobeRGB&wid=864',
		   'https://secure-render.nike.com/is/image/nikeid/?layer=0&src=ir(nikeidrender/af1MidEssHO22_v2?obj=/s/shadow/shad&show=&color=000000&obj=/s/g16&color=f7f6ff&show=&obj=/s/g15&color=f09734&show=&obj=/s/g14&color=f7f6ff&show=&obj=/s/g13&color=2f2c2f&show=&obj=/s/g10&color=fdf8fa&show=&obj=/s/g12&color=f7f5ff&show=&obj=/s/g17&color=f5f4fe&show=&obj=/s/g11&color=e48f3d&show=&obj=/s/g1/leather&color=e79740&show=&obj=/s/g2/leather&color=fdf8fa&show=&obj=/s/g3/leather&color=fdf8fa&show=&obj=/s/g4/leather&color=e79740&show=&obj=/s/g5/canvas&color=212022&show=&obj=/s/g6/leather&color=fdf8fa&show=&obj=/s/g7/canvas&color=f29731&show=&obj=/s/g8/canvas&color=f29731&show=&obj=/s/g18/solid&color=fef9fa&show=&obj=/s/g23/logo&color=e48f3d&show=&obj=/s/g19&color=fef9fa&show=&obj=/s/g20&color=f0eeff&show=&obj=/s/g21/solid&color=eb9637&show=&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB)bgc=f5f5f5&fmt=jpeg&qlt=90&posN=0,-0.1&icc=AdobeRGB&wid=864',
		   'https://secure-render.nike.com/is/image/nikeid/?layer=0&src=ir(nikeidrender/af1MidEssHO22_v3?obj=/s/shadow/shad&show=&color=000000&obj=/s/g16&color=f7f6ff&show=&obj=/s/g15&color=f09734&show=&obj=/s/g14&color=f7f6ff&show=&obj=/s/g13&color=2f2c2f&show=&obj=/s/g10&color=fdf8fa&show=&obj=/s/g12&color=f7f5ff&show=&obj=/s/g17&color=f5f4fe&show=&obj=/s/g11&color=e48f3d&show=&obj=/s/g1/leather&color=e79740&show=&obj=/s/g2/leather&color=fdf8fa&show=&obj=/s/g3/leather&color=fdf8fa&show=&obj=/s/g4/leather&color=e79740&show=&obj=/s/g5/canvas&color=212022&show=&obj=/s/g6/leather&color=fdf8fa&show=&obj=/s/g7/canvas&color=f29731&show=&obj=/s/g8/canvas&color=f29731&show=&obj=/s/g18/solid&color=fef9fa&show=&obj=/s/g23/logo&color=e48f3d&show=&obj=/s/g19&color=fef9fa&show=&obj=/s/g20&color=f0eeff&show=&obj=/s/g21/solid&color=eb9637&show=&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB)bgc=f5f5f5&fmt=jpeg&qlt=90&posN=0,-0.1&icc=AdobeRGB&wid=864',
		   'https://secure-render.nike.com/is/image/nikeid/?layer=0&src=ir(nikeidrender/af1MidEssHO22_v4?obj=/s/shadow/shad&show=&color=000000&obj=/s/g16&color=f7f6ff&show=&obj=/s/g15&color=f09734&show=&obj=/s/g14&color=f7f6ff&show=&obj=/s/g13&color=2f2c2f&show=&obj=/s/g10&color=fdf8fa&show=&obj=/s/g12&color=f7f5ff&show=&obj=/s/g17&color=f5f4fe&show=&obj=/s/g11&color=e48f3d&show=&obj=/s/g1/leather&color=e79740&show=&obj=/s/g2/leather&color=fdf8fa&show=&obj=/s/g3/leather&color=fdf8fa&show=&obj=/s/g4/leather&color=e79740&show=&obj=/s/g5/canvas&color=212022&show=&obj=/s/g6/leather&color=fdf8fa&show=&obj=/s/g7/canvas&color=f29731&show=&obj=/s/g8/canvas&color=f29731&show=&obj=/s/g18/solid&color=fef9fa&show=&obj=/s/g23/logo&color=e48f3d&show=&obj=/s/g19&color=fef9fa&show=&obj=/s/g20&color=f0eeff&show=&obj=/s/g21/solid&color=eb9637&show=&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB)bgc=f5f5f5&fmt=jpeg&qlt=90&posN=0,-0.1&icc=AdobeRGB&wid=864',
		  'https://secure-render.nike.com/is/image/nikeid/?layer=0&src=ir(nikeidrender/af1MidEssHO22_v6?obj=/s/shadow/shad&show=&color=000000&obj=/s/g16&color=f7f6ff&show=&obj=/s/g15&color=f09734&show=&obj=/s/g14&color=f7f6ff&show=&obj=/s/g13&color=2f2c2f&show=&obj=/s/g10&color=fdf8fa&show=&obj=/s/g12&color=f7f5ff&show=&obj=/s/g17&color=f5f4fe&show=&obj=/s/g11&color=e48f3d&show=&obj=/s/g1/leather&color=e79740&show=&obj=/s/g2/leather&color=fdf8fa&show=&obj=/s/g3/leather&color=fdf8fa&show=&obj=/s/g4/leather&color=e79740&show=&obj=/s/g5/canvas&color=212022&show=&obj=/s/g6/leather&color=fdf8fa&show=&obj=/s/g7/canvas&color=f29731&show=&obj=/s/g8/canvas&color=f29731&show=&obj=/s/g18/solid&color=fef9fa&show=&obj=/s/g23/logo&color=e48f3d&show=&obj=/s/g19&color=fef9fa&show=&obj=/s/g20&color=f0eeff&show=&obj=/s/g21/solid&color=eb9637&show=&obj=/s&req=object&fmt=png-alpha&icc=AdobeRGB)bgc=f5f5f5&fmt=jpeg&qlt=90&posN=0,-0.1&icc=AdobeRGB&wid=864'
	   ]
    };

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
        const productId = product.getAttribute('data-product-id');
        const images = productImages[productId];
        let currentImageIndex = 0;

        const productImage = product.querySelector('.product-image');
        const arrowLeft = product.querySelector('.arrow-left');
        const arrowRight = product.querySelector('.arrow-right');

        arrowLeft.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
            productImage.src = images[currentImageIndex];
        });

        arrowRight.addEventListener('click', () => {
            currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
            productImage.src = images[currentImageIndex];
        });

        productImage.src = images[currentImageIndex]; 
    });
});

const container = document.querySelector('.container');
    const overlay = document.querySelector('.overlay');
    const dragger = document.querySelector('.dragger');

    function updateDraggerPosition() {
        const rect = container.getBoundingClientRect();
        const initialWidth = rect.width / 2;
        overlay.style.clipPath = `polygon(0 0, ${initialWidth}px 0, ${initialWidth}px 100%, 0 100%)`;
        dragger.style.left = `${initialWidth}px`;
    }

    window.addEventListener('resize', updateDraggerPosition);
    window.addEventListener('load', updateDraggerPosition);

    dragger.addEventListener('mousedown', startDragging);

    function startDragging(e) {
        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDragging);
    }

    function drag(e) {
        const rect = container.getBoundingClientRect();
        let offsetX = e.clientX - rect.left;
        if (offsetX < 0) offsetX = 0;
        if (offsetX > rect.width) offsetX = rect.width;
        overlay.style.clipPath = `polygon(0 0, ${offsetX}px 0, ${offsetX}px 100%, 0 100%)`;
        dragger.style.left = `${offsetX}px`;
    }

    function stopDragging() {
        document.removeEventListener('mousemove', drag);
        document.removeEventListener('mouseup', stopDragging);
    }
      
    var swiper = new Swiper('.swiper-container', {
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
        // Add other Swiper options as needed
      });  


      let nextDom=document.getElementById('next');
      let prevDom=document.getElementById('prev');
      let carouselDom=document.querySelector('.corousel');
      let listItemDom=document.querySelector('.corousel .list');
      let thumbnailDom=document.querySelector('.corousel .thumbnail')
      
      nextDom.onclick=function(){
          showSlider('next');
      }
      prevDom.onclick=function(){
          showSlider('prev')
      }
      let timeRunning=3000;
      let timeAutoNext=3000;
      let runTimeOut;
      runAutoRun=setTimeout(()=>{
          nextDom.click();
      },timeAutoNext);
      
      
      function showSlider(type){
          let itemSlider=document.querySelectorAll('.corousel .list .page1');
          let itemThumbnail=document.querySelectorAll('.corousel .thumbnail .item')
          if(type === 'next'){
              listItemDom.appendChild(itemSlider[0]);
              thumbnailDom.appendChild(itemThumbnail[0]);
              carouselDom.classList.add('next')
          }else{
              let positionLastItem=itemSlider.length-1;
              listItemDom.prepend(itemSlider[positionLastItem]);
              thumbnailDom.prepend(itemThumbnail[positionLastItem]);
              carouselDom.classList.add('prev')
          }
          clearTimeout(runTimeOut);
          runTimeOut=setTimeout(() => {
              carouselDom.classList.remove('next');
              carouselDom.classList.remove('prev')
          }, timeRunning);
      
          clearTimeout(runAutoRun);
         
      }