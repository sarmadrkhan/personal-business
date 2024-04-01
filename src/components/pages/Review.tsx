import React from 'react';
import styles from './Review.module.css';

const reviews = [
  {
    id: 1,
    author: 'Jane Doe',
    text: 'This clinic exceeded my expectations!',
    rating: 5
  },
  {
    id: 2,
    author: 'John Smith',
    text: 'Good medicine, but took longer than expected to cure.',
    rating: 4
  },
  {
    id: 3,
    author: 'Emily Johnson',
    text: 'Too far from my home.',
    rating: 2
  }
];

const Review = () => {
  return (
    <div className={styles.reviewContainer}>
      {reviews.map((review) => (
        <div key={review.id} className={styles.reviewCard}>
          <h3 className={styles.author}>{review.author}</h3>
          <p className={styles.text}>{review.text}</p>
          <p className={styles.rating}>Rating: {review.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Review;
