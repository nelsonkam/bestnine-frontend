import React from 'react';

const TileColumn = ({images, numberOfColumns, position}) => (
  <div className="tile">
    {images.filter((_, i) => (i - position) % numberOfColumns === 0).map((image, i) => (
        <div className="p-2" key={i} >
          <img src={image}  alt=""/>
        </div>
      ))}
  </div>
)

export default TileColumn;