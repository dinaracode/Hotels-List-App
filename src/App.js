import './App.css';
import { useState } from 'react';
import { data } from './data';

function App() {
  const [hotels, setHotels] = useState(data);
  const [showText, setShowText] = useState(false);

  const removeHotel = (id) => {
    let newHotels = hotels.filter(hotel => hotel.id !== id)
    setHotels(newHotels);
  }
  const showTextClick = (thing)=>{
    thing.showMore = !thing.showMore
    setShowText(!showText);
  }

  return (
    <div>
      <div className='container'>
      <h1> NYC TOP {hotels.length} HOTELS</h1>
      </div>
      {hotels.map((thing =>{
      const {id, hotelName, description, image, source, showMore} = thing;
      return(<div key={id}>
        <div className='container'>
          <h2>{id} - {hotelName}</h2>
        </div>

        <div className='container'>
          <p>{showMore ? description: description.substring(0, 230) + "..."}
          <button onClick={() => showTextClick(thing)}>{showMore ? 'Show less' : 'Show  more'}</button>
          </p>
        </div>

        <div className='container'>
          <img src ={image}  width="500px" alt="hotel"/>
        </div>

        <div className='container'>
          <p>{source}</p>
        </div>

        <div className='container'>
          <button onClick={()=> removeHotel(id)} className="btn">Remove</button>

        </div>
      </div>

      )}))}
      <div className='container'>
      <button onClick={()=>setHotels([])} className="btn">Delete All</button>
      </div>

    </div>
  );
}

export default App;
