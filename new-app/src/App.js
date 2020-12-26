import React, {useState} from 'react';
import './App.css';

export default function App(){
  const [showImage, setShowImage] = useState(false);
  const  toggle =()=>{
    setShowImage(!showImage)
    console.log(showImage)
  }
  return(
    <button onClick={toggle}>
    </button>

  )
}
