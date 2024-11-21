import React, { useEffect, useState } from 'react';
import api from '../api'; // Cliente Axios configurado
import { Link } from 'react-router-dom';

function Tester() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get('/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de categorias</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name} - {product.description} - {product.price}</li>
        ))}
      </ul>
      <Link to={"/inyector"}>crear producto nuevo</Link>
    </div>
  );
}

export default Tester;
