import React from "react";

const Gallery = ({images})=>{
    console.log(process.env.REACT_APP_API_KEY)
    return(
        <div className="gallery">
            {
                images.map(image =>(
                   <img 
                        className="image"
                        src={image.urls.small} 
                        alt={image.alt_description}
                   />
                ))
            }
        </div>
        
    )
}

export default Gallery;