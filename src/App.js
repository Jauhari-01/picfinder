import React,{useState} from "react";
import SearchBar from "./Component/SearchBar";
import Gallery from "./Component/Gallery";
import NavBar from "./Component/NavBar";
import './style.css';

const App = ()=>{
    const [images,setImages] = useState([]);


    return(
        <>
            <NavBar />
            <SearchBar setImages={setImages}/>
            <Gallery images={images}/>
        </>
    );
}

export default App;