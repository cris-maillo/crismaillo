import { useState, useEffect } from 'react';
import '../../App.css';
import Title from '../Title';
import Food from './Food';


function Cook() {

    const getNumberOfCards = () => {
        if (window.innerWidth > 1200) {
          return 5; // For large screens, show 5 cards
        } else if (window.innerWidth > 920) {
          return 4; // For medium screens, show 3 cards
        } else if(window.innerWidth > 740) {
          return 3; // For small screens, show 1 card
        }else{
            return 5;
        }
      };
    
      const [numberOfCards, setNumberOfCards] = useState(getNumberOfCards());
    
      useEffect(() => {
        const handleResize = () => {
          setNumberOfCards(getNumberOfCards());
        };
        
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    const cards = [
        {
            type: 'Fed',
            location: 'Dorys Margate',
            description: "I'm not a big fan of corn but it was great in this dish. Loved the brown butter too, never would have thought it&aposd work on ceviche.",
            date: "19/02/2023"
        },
        {
            type: 'Fed',
            location: 'Dorys Margate',
            description: "I'm not a big fan of corn but it was great in this dish. Loved the brown butter too, never would have thought it&aposd work on ceviche.",
            date: "19/02/2023"
        },
        {
            type: 'Fed',
            location: 'Dorys Margate',
            description: "I'm not a big fan of corn but it was great in this dish. Loved the brown butter too, never would have thought it&aposd work on ceviche.",
            date: "19/02/2023"
        },
        {
            type: 'Fed',
            location: 'Dorys Margate',
            description: "I'm not a big fan of corn but it was great in this dish. Loved the brown butter too, never would have thought it&aposd work on ceviche.",
            date: "19/02/2023"
        },
        {
            type: 'Fed',
            location: 'Dorys Margate',
            description: "I'm not a big fan of corn but it was great in this dish. Loved the brown butter too, never would have thought it&aposd work on ceviche.",
            date: "19/02/2023"
        }
    ]

    return (
        <div>
            <Title title="to feed and to be fed" />
            <div className='cookSubtitle'>
                <p>what I&apos;m cooking and/or eating, hosted on are.na, served through their open-source API.</p>
            </div>
            <div className="cookContainer">
                {cards.slice(0, numberOfCards).map((card, index) => (
                    <Food key={index} data={card} />
                ))}
            </div>
        </div>
    );
}

export default Cook;