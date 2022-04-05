import React, { useState } from 'react'
import './App.css'
import Form from "./Form"
import DemoFetch from './DemoFetch';
import Card from "./Card";

function App() {
  const [cards, setCards] = useState([]);
  const [infos, setInfos] = useState([]);
  


  return(
    <div className="container my-5">
      <Form setCards={setCards}/>
      <div>
        {cards.map((card )=> (
              <DemoFetch setInfos={setInfos} title={card.title} key={card.title}/>
        ))} 
      </div>
      <div>
        {infos.map(( info ) => (
          <Card valeur = {info.data} key={info.data}/>
        ))}
      </div>
    </div>
  );
}

export default App
