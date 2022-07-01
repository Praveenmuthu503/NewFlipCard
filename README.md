# Usage
Creat a card with us

Install 

npm i @praveen_muthu503/newflipcard

<!-- ===> <NewFlipCard /> <==== -->
The component accepts the following props:
1.name : string
2.price : number
3.content : string
4.onClick : function
5.buttonText : string
6.changeColor : function
7.image : string

import "./App.css";

import {NewFlipCard} from "@praveen_muthu503/newflipcard"

function App() {

    const handleBuy =()=>{

    }
    const handleHeartToggle =()=>{

    }

  return (

    <div className="App">

     <NewFlipCard 
     buttonText={"Buy Now"}
     price={100} 
     image="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/380697/03/sv01/fnd/IND/fmt/png/Wild-Rider-Layers-Unisex-Sneakers" 
     name="PUMA" 
     content={"Welcome"} 
     onClick={handleBuy} 
     changeColor={handleHeartToggle} />

    </div>
  );
}

export default App;

# Codesandbox link

https://codesandbox.io/s/delicate-resonance-i71rl0?file=/src/App.js