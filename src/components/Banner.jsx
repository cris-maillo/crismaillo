/* eslint-disable */
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './../App.css';

function Banner() {
    const animationContainerRef = useRef(null);
    
    useEffect(() => {
        const bannerString = animationContainerRef.current;
        const textWidth = bannerString.offsetWidth;
        
        function animateBanner() {
            const duration = textWidth / 50;
            const endX = -textWidth;
            
            gsap.to(bannerString, {
                duration: duration,
                x: endX,
                repeat: -1,
                ease: "none",
            });
        }
        animateBanner();
    }, []);

  return (
    <div className="bannercontainer">
        <div className="animationContainer" ref={animationContainerRef}>
            <h6 className="bannerscript">que la suerte no influya // don’t litter // let your loved ones know they are loved // if it’s not alright, it’s not the end // become your own god // if you never create anything, all you will ever be is a consumer // there is ecstasy in paying attention // luck isn't random // simplicity, honesty, and service // limit everything to the essential but do not remove the poetry // there are no useless efforts // I do, because I can. I do, because I care. // empathy is wisdom // no need to add chaos to chaos // assume all communications are tapped // que la suerte no influya // don’t litter // let your loved ones know they are loved // if it’s not alright, it’s not the end // become your own god // if you never create anything, all you will ever be is a consumer // there is ecstasy in paying attention // luck isn't random // simplicity, honesty, and service // limit everything to the essential but do not remove the poetry // there are no useless efforts // I do, because I can. I do, because I care. // empathy is wisdom // no need to add chaos to chaos // assume all communications are tapped // que la suerte no influya // don’t litter // let your loved ones know they are loved // if it’s not alright, it’s not the end // become your own god // if you never create anything, all you will ever be is a consumer // there is ecstasy in paying attention // luck isn't random // simplicity, honesty, and service // limit everything to the essential but do not remove the poetry // there are no useless efforts // I do, because I can. I do, because I care. // empathy is wisdom // no need to add chaos to chaos // assume all communications are tapped // </h6>
        </div>
    </div>
    );
}

export default Banner;