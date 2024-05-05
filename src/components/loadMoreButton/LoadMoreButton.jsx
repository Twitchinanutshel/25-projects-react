import React, { useEffect, useState } from 'react'
import { useFetcher } from 'react-router-dom';

const LoadMoreButton = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
      };

    } catch (e) {
      console.log(e)
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProducts();
  }, [count])

  useEffect(() => {
    if(products && products.length === 100) setDisableButton(true);
  }, [products])

  if (loading) {
    return <div className='text-white flex justify-center mt-60'>Loading products...</div>
  }

  return (
    <div className='flex flex-col gap-4 text-center text-white mt-20 mx-4'>
      <div className='grid grid-cols-4 gap-3'>
        {
          products && products.length
            ? products.map((item) => (
              <div className='p-4 border-2 border-solid border-black bg-zinc-800 flex flex-col gap-3' key={item.id}>
                <img
                  src={item.thumbnail}
                  alt={item.thumbnail}
                  className='width-96 h-60' 
                />
                <p>{item.title}</p>
              </div>))
            : null
        }
      </div>
      <div className='mb-4'>
        <button disabled={disableButton} className={`text-xl font-medium ${disableButton ? 'hidden' : null}`} onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  )
}

export default LoadMoreButton
