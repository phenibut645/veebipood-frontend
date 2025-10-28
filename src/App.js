import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7108/api/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));

    axios.get("https://localhost:7108/api/photos")
      .then(res => setPhotos(res.data.slice(0, 10)))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {products.map(p => (
        <div key={p.id}>
          <h2>{p.name}</h2>
          <p>Price: {p.price}</p>
          <img src={p.imageUrl} alt={p.name} width={100} />
        </div>
      ))}

      <h1>Photos</h1>
      {photos.map(photo => (
        <div key={photo.id}>
          <h2>{photo.title}</h2>
          <img src={photo.url} alt={photo.title} width={100} />
        </div>
      ))}
    </div>
  );
}

export default App;
