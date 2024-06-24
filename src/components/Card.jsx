import React, { useState, useEffect } from 'react';

function Card() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);
  

  return (
    <div className="flex flex-col items-center">
      <h1 className='text-white text-4xl italic flex justify-center h-16 items-center'>Products</h1>
      <div className="flex flex-wrap justify-center">
        {products.map(product => (
          <div className='group-hover:stroke-white flex flex-col items-center justify-center' key={product.id} style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
            <img src={product.image}  className="object-contain h-48 w-full" />
            <h2 className='text-white  text-center'>{product.title}</h2>
            <strong><p className='text-white  text-center'>${product.price}</p></strong> 

          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
