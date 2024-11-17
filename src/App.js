import React from 'react'; 
import AnnotationCanvas from './Canvas'; 
import './App.css'; 
import image from './media/images001.jpg'; 

const App = () => { 
  return ( 
    
    <div className="App"> 
      <h1>Image Annotation App</h1> 
      <AnnotationCanvas image={image} /> 
    </div> 
    ); 
  };

export default App;