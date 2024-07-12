import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = () => {
  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.get('https://dummyjson.com/products');
      setProduct(res.data.products);
      
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
 
  const handleCart = async(id) => {
    const res = await axios.get(`https://dummyjson.com/products/${id}`);
    setCart([...cart, res.data]);
    console.log(cart)
    
  };

  return (
    <div>
      {product.map((item) => (
        <div key={item.id}style={{ border: '1px solid black', padding: '10px', marginBottom: '10px' }}>
          <img src={item.thumbnail} alt="" />
          <p>{item.title}</p>
          <p>{item.description}</p>
          <p>price: {item.price}</p>
          <p>rating: {item.rating}</p>
          <button onClick={()=>handleCart(item.id)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductPage;
