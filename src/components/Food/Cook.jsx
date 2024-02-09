import { useState, useEffect } from 'react';
import '../../App.css';
import Title from '../Title';
import Food from './Food';
const accessToken = import.meta.env.VITE_ACCESS_TOKEN;


function Cook() {
    const [data, setData] = useState(null);

    const getNumberOfCards = () => {
        if (window.innerWidth > 1600) {
          return 7;
        } else if(window.innerWidth > 1400){
            return 6;
        }else if (window.innerWidth > 1200) {
            return 5;
        }else if (window.innerWidth > 1000) {
          return 4;
        } else if(window.innerWidth > 800) {
          return 3;
        }else{
            return 5;
        }
    };
    
    const [numberOfCards, setNumberOfCards] = useState(getNumberOfCards());

    async function fetchData() {
        const response = await fetch("https://api.are.na/v2/channels/to-feed-and-to-be-fed/contents?per=7&sort=position&direction=desc", {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + accessToken,
          }
        });
        const data = await response.json();
        return data.contents;
      }

    
    useEffect(() => {
        const handleResize = () => {
            setNumberOfCards(getNumberOfCards());
        };
    
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        // Assuming fetchData() is your function that fetches the data
        fetchData().then(fetchedData => {
          setData(fetchedData);
        }).catch(error => {
          console.error("Failed to fetch data:", error);
        });
    }, []);

    return (
        <div>
            <Title title="to feed and to be fed" />
            <div className='cookSubtitle'>
                <p>what I&apos;m cooking and/or eating, hosted on are.na, served through their open-source API.</p>
            </div>
            <div className="cookContainer">
            {data ? data.slice(0, numberOfCards).map((item, index) => (
                <Food key={index} data={item} />
            )) : <p>fetching...........</p>}
            </div>
        </div>
    );
}

export default Cook;