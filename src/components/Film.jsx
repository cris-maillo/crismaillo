import React from 'react';
import './../index.css';


function Film() {
  return (
    <div>
      <div class="filmTitle">
        <h2>Film</h2> 
        <p>a showcase of my life through the lens of an olympus om-2 that I’m not very good at using, 
            a leica minilux bought in Germany in the 90s, a yashica df-100 that I can’t seem to repair, 
            and an olympus infinity zoom 210 that has seen better days; a collection of cameras 
            first-owned by both of my grandfathers<span id="resetFilm"> <u>reset gallery</u></span>.</p>
      </div>

      <div class="filmPictures" id="filmPictures">
        {/* <img id="dragImg8" class ="draggable tooltip" alt="BBQ at Home, London, 2022" src="imgs/film/img_0442.jpeg">
        <img id="dragImg4" class ="draggable tooltip"alt="New York, 2022 (bad scan)" src="imgs/film/IMG_1812.jpeg">
        <img id="dragImg3" class ="draggable tooltip" alt="Oviedo, 2022" src="imgs/film/IMG_4402.jpeg">
        <img id="dragImg6" class ="draggable tooltip" alt="Waverly Station, Edinburgh, 2022" src="imgs/film/81005B2D-8380-449F-902D-552C2B5D9BB8.jpeg">
        <img id="dragImg5" class ="draggable tooltip" alt="Amsterdam, 2022 (bad scan that I am yet to fix)" src="imgs/film/img_0439.jpeg">
        <img id="dragImg2" class ="draggable tooltip" alt="Courchevel, 2022" src="imgs/film/IMG_6552.jpeg">
        <img id="dragImg7" class ="draggable tooltip" alt="Commercial St, London, 2022" src="imgs/film/IMG_7396.jpeg">
        <img id="dragImg" class ="draggable tooltip" alt="Berlin, 2022" src="imgs/film/IMG_7417.jpeg"> */}
      </div>

      <footer class="disappearFooter">
      <h6><span class="hide"><a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noreferrer">leave a message</a> <span class="lines"></span> <a href="https://www.yourworldoftext.com/~crismaillo/" target="_blank" rel="noreferrer">@crismaillo</a> <span class="lines"></span><span class="lines"></span> // <span class="lines"></span></span><span class="lines"></span> <span  class="theme-name">dark mode</span> <span class="lines"></span></h6>
      </footer>
    </div>
  );
}

export default Film;