import {Link} from "react-router-dom";

function BirdHouses({birdHouse}) {
    return (
        <div id="container">
            <img className ="birdhouses-images" src={birdHouse.image} alt={birdHouse.name}></img>
            <Link to={`/bird_houses/${birdHouse.id}`}>
            <div id="name">{birdHouse.name}</div>
            </Link>
            <div id="price">${birdHouse.price}</div>
            <div id="description">{birdHouse.description}</div>
        </div>
    )

}

export default BirdHouses;