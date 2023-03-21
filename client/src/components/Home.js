import {useEffect, useState} from "react";
import BirdHouses from "./BirdHouses";


function Home() {
  const [birdHouses, setBirdHouses] = useState([]);

  useEffect(() => {
    fetch("/bird_houses")
    .then((r) => r.json())
    .then((birdHouses) => setBirdHouses(birdHouses))
  }, []);
  

  const displayBirdHouses = birdHouses.map((birdHouse) => {
    return <BirdHouses
                key={birdHouse.id}
                birdHouse={birdHouse}
            />

  })

return (
    <div id="display-birdhouses">
        {displayBirdHouses}
    </div>
);
}

export default Home;