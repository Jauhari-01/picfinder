import React from "react";

const Gallery = ({images})=>{
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