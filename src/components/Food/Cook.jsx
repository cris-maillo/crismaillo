import '../../App.css';
import Title from '../Title';
import Food from './Food';


function Cook() {

    const foods = [
        {
            type: 'Fed',
            location: 'Dorys Margate',
            description: "I&aposm not a big fan of corn but it was great in this dish. Loved the brown butter too, never would have thought it&aposd work on ceviche.",
            date: "19/02/2023"
        },
        {
            type: 'Fed',
            location: 'Dorys Margate',
            description: "I&aposm not a big fan of corn but it was great in this dish. Loved the brown butter too, never would have thought it&aposd work on ceviche.",
            date: "19/02/2023"
        }
    ]

    return (
        <div>
            <Title title="to feed and to be fed" />
            <div className="cookContainer">
                <p>what I am cooking and/or eating, hosted on are.na, served through their open-source API</p>
                {foods.map((food, index) => (
                    <Food key={index} data={food} />
                ))}
            </div>
        </div>
    );
}

export default Cook;