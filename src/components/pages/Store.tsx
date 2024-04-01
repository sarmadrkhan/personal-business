import React from 'react';
import styles from './Store.module.css';
import shampoo from "../../assets/shampoo.png"
import tablets from "../../assets/tablets.png"
import syrup from "../../assets/syrup.png"

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '$19.99',
    imageUrl: shampoo
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$29.99',
    imageUrl: tablets
  },
  {
    id: 3,
    name: 'Product 3',
    price: '$39.99',
    imageUrl: syrup
  },
];

const Store = () => {
  return (
    <div className={styles.storeContainer}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <img src={product.imageUrl} alt={product.name} className={styles.productImage} />
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.productPrice}>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Store;
