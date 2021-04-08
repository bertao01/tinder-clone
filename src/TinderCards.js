import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'

const TinderCards = () => {
    
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url:'https://veja.abril.com.br/wp-content/uploads/2021/01/GettyImages-1229893385.jpg.jpg',
        },
        {
            name: 'Jeff Bezos',
            url:'https://jpimg.com.br/uploads/2017/07/jeff-bezos-amazon1-1024x683.jpg',
        },
    ])

    const swiped = ( direction, nameToDelete ) => {
        console.log("removing: " + nameToDelete )
    }

    const outOfFrame = ( name ) => {
        console.log( name + "left the screen !" )
    }

    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up","down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen = { () => outOfFrame(person.name)}
                    >
                    <div
                        style={{ backgroundImage: `url(${person.url}` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    )
}

export default TinderCards
