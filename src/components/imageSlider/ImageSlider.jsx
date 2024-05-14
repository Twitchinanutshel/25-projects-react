import React, { useEffect, useState } from 'react'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'

const ImageSlider = ({ url, limit }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  async function fetchImages(getUrl) {
    try {
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }

    } catch (e) {
      setErrorMsg(e.message)
    }
    setLoading(false)
  }

  function handlePrevious() {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  }
  function handleNext() {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)

  }

  useEffect(() => {
    if (url !== '') fetchImages(url)
  }, [url]);

  console.log(images)

  if (loading) {
    return <div className='text-white flex justify-center mt-60'>Loading Data...</div>
  }

  if (errorMsg !== null) {
    return <div className='text-white'>Error Occurred: {errorMsg}</div>
  }


  return (
    <div className='flex justify-center mt-36'>
      <div className='relative flex justify-center items-center' style={{ maxWidth: 500, maxHeight: 333 }}>
        <BsArrowLeftCircleFill onClick={handlePrevious} className='absolute left-4 w-12 h-12 text-white' />
        {
          images && images.length
            ? images.map((imageItem, index) => (
              <img key={imageItem.id}
                alt={imageItem.download_url}
                src={imageItem.download_url}
                className={currentSlide === index ? 'rounded-md shadow-lg w-full h-full' : 'hidden'}
              />
            ))
            : null
        }
        <BsArrowRightCircleFill onClick={handleNext} className='absolute right-4 w-12 h-12 text-white' />
        <span className='flex absolute bottom-4'>
          {
            images && images.length
              ? images.map((_, index) => (<button
                key={index}
                className={currentSlide === index ? 'bg-white h-3 w-3 m-1 rounded-full border-none outline-none cursor-pointer' : 'bg-gray-500 h-3 w-3 m-1 rounded-full border-none outline-none cursor-pointer'}
                onClick={() => setCurrentSlide(index)}
              >
              </button>))
              : null
          }
        </span>
      </div>
    </div>

  )
}

export default ImageSlider
