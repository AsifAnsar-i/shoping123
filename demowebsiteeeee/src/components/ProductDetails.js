import React from 'react';
import { useParams } from 'react-router-dom';

const products = [
   {
    id: 1,
    name: 'Product 1',
    price: 20.99,
    image: 'product1.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 2,
    name: 'Product 2',
    price: 15.49,
    image: 'product2.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 3,
    name: 'Product 3',
    price: 32.75,
    image: 'product3.jpg', // Add the image file name (place the image in the public folder)
  },
  // Add more product data
  {
    id: 4,
    name: 'Product 4',
    price: 10.99,
    image: 'product4.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 5,
    name: 'Product 5',
    price: 27.50,
    image: 'product5.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 6,
    name: 'Product 6',
    price: 24.99,
    image: 'product6.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 7,
    name: 'Product 7',
    price: 17.49,
    image: 'product7.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 8,
    name: 'Product 8',
    price: 30.75,
    image: 'product8.jpg', // Add the image file name (place the image in the public folder)
  },
  // Add more product data
  {
    id: 9,
    name: 'Product 9',
    price: 13.99,
    image: 'product9.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 10,
    name: 'Product 10',
    price: 24.50,
    image: 'product10.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 11,
    name: 'Product 11',
    price: 21.99,
    image: 'product11.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 12,
    name: 'Product 12',
    price: 11.49,
    image: 'product12.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 13,
    name: 'Product 13',
    price: 35.75,
    image: 'product13.jpg', // Add the image file name (place the image in the public folder)
  },
  // Add more product data
  {
    id: 14,
    name: 'Product 14',
    price: 11.99,
    image: 'product14.jpg', // Add the image file name (place the image in the public folder)
  },
  {
    id: 15,
    name: 'Product 15',
    price: 23.50,
    image: 'product15.jpg', // Add the image file name (place the image in the public folder)
  },

];

const getProductById = (id) => {
  return products.find((product) => product.id === id)
};


const ProductDetails = () => {
    const { productId } = useParams();
const product = getProductById(Number(productId));
  if (!product) {
    return <div className="notfound">Product not found</div>
  }
  return (
    <div className="product-details">
        <div className="product-1" key={product.id}>
          {product.image && (
            <img src={process.env.PUBLIC_URL + '/' + product.image} alt={product.name} />
          )}
         <h3>{product.name}</h3>
      <p>${product.price}</p>
        <p>{product.description}</p> 
         <button >Add to Cart</button>
        </div>
    </div>
  );
};

export default ProductDetails;