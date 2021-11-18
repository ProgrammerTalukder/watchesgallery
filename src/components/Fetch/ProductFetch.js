import { useEffect, useState } from 'react';

const ProductFetch = () => {
    const [Products, setProducts] = useState([]);
    useEffect(() => {
      fetch(`https://eerie-ghost-66570.herokuapp.com/watches`)
          .then(res => res.json())
          .then(data => {
              setProducts(data);
  
          });
  }, []);
    return (
        Products
    );
};

export default ProductFetch;