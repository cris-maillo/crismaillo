import { useEffect } from 'react';
import './../App.css';

import bodrum from '../assets/images/film/IMG_0486.jpeg';
import bed from '../assets/images/film/bed.jpg';
import IMG4402 from '../assets/images/film/IMG_4402.jpeg';
import IMG_4405 from '../assets/images/film/IMG_4405.jpeg';
import IMG0439 from '../assets/images/film/img_0439.jpeg';
import IMG6552 from '../assets/images/film/IMG_6552.jpeg';
import IMG7396 from '../assets/images/film/IMG_7396.jpeg';
import IMG7417 from '../assets/images/film/IMG_7417.jpeg';
import Tippy from '@tippyjs/react';

const imageArray = [
  {
    id: 'dragImg8',
    src: bodrum,
    alt: 'Bodrum, 2023',
  },
  {
    id: 'dragImg4',
    src: bed,
    alt: 'Oviedo, 2024',
  },
  {
    id: 'dragImg3',
    src: IMG4402,
    alt: 'Oviedo, 2022',
  },
  {
    id: 'dragImg6',
    src: IMG_4405,
    alt: 'Waverly Station, Edinburgh, 2022',
  },
  {
    id: 'dragImg5',
    src: IMG0439,
    alt: 'Amsterdam, 2022 (bad scan that I am yet to fix)',
  },
  {
    id: 'dragImg2',
    src: IMG6552,
    alt: 'Courchevel, 2022',
  },
  {
    id: 'dragImg7',
    src: IMG7396,
    alt: 'Commercial St, London, 2022',
  },
  {
    id: 'dragImg',
    src: IMG7417,
    alt: 'Berlin, 2022',
  },
];

function Film() {
  function handleMouseDown(e) {
    if (e.target.classList.contains("draggable")) {
      dragElement(e.target);
    }
  }

  function handleResetGallery() {
    window.location.reload();
  }

  function dragElement(elmnt) {
    let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      document.getElementById("resetFilm").style.display = "inline";
      e = e || window.event;
      e.preventDefault();
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  useEffect(() => {
    imageArray.forEach((image) => {
      const elmnt = document.getElementById(image.id);
      if (elmnt) {
        dragElement(elmnt);
      }
    });
  }, []);

  return (
    <div>
      <div className="filmTitle">
        <p>
          a showcase of my life through the lens of an olympus om-2 that I&apos;m not very good at using,
          a leica minilux bought in Germany in the 90s, a yashica df-100 that I can&apos;t seem to repair,
          and an olympus infinity zoom 210 that has seen better days; a collection of cameras
          first-owned by both of my grandfathers<span id="resetFilm" onClick={handleResetGallery}> <u>reset gallery</u></span>.
        </p>
      </div>
      <div className="filmPictures" id="filmPictures" onMouseDown={handleMouseDown}>
        {imageArray.map((image) => (
          <Tippy className='tippy' content={image.alt} key={image.id}>
            <img key={image.id} id={image.id} className="draggable" alt={image.alt} src={image.src} />
          </Tippy>
        ))}
      </div>
    </div>
  );
}

export default Film;
