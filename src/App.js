import React,{useState} from "react";
import SearchBar from "./Component/SearchBar";
import Gallery from "./Component/Gallery";
import './style.css';

const App = ()=>{
    const [images,setImages] = useState([]);


    return(
        <>
            <SearchBar setImages={setImages}/>
            <Gallery images={images}/>
        </>
    );
}

export default App;