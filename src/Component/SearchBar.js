import React,{useState,useEffect} from "react";
import axios from "axios";

console.log(process.env.REACT_APP_ACCESS_KEY);

const SearchBar = ({setImages})=>{

    const [search,SetSearch] = useState("nature");
    
    useEffect(()=>{
        handleClick();
    },[])


    function handleClick(){
        // console.log(search);
        //fetching images
        search && (
            axios.get('https://api.unsplash.com/search/photos',{
            params:{
                "client_id" : `${process.env.REACT_APP_ACCESS_KEY}`,
                query : search
            }
            })
            .then(response => {
                setImages(response.data.results);
                SetSearch("");
            })
            .catch(err => console.log(err))
        )

        
    }
    return(
        <div className="searchContainer">
            <input value={search} type="text" placeholder="Search for Pic"
                onChange={(e)=>{SetSearch(e.target.value)}}
                className="searchBarInput"
            />
            <button onClick={handleClick} id="btn">Search</button>
        </div>
    );
}

export default SearchBar;