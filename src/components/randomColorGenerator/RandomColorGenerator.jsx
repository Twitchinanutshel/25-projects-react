import React, { useEffect, useState } from 'react'

const RandomColorGenerator = () => {
  const [typeOfColor, setTypeOfColor] = useState('HEX');
  const [color, setColor] = useState('#000000');

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length)
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`(${r}, ${g}, ${b})`)
  }

  useEffect(() => {
    if (typeOfColor === 'RGB'){
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }   
  }, [typeOfColor])

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: color,
      }}
      className='flex flex-col justify-center items-center pb-72'
    >
      <div className='bg-zinc-200 rounded-md font-medium'>
        <button className={`hover:bg-zinc-100 p-3 rounded-md ${typeOfColor === 'HEX' ? 'text-green-600' : 'text-black'}`} onClick={() => setTypeOfColor('HEX')}>Create HEX Color</button>
        <button className={`hover:bg-zinc-100 p-3 rounded-md ${typeOfColor === 'RGB' ? 'text-green-600' : 'text-black'}`} onClick={() => setTypeOfColor('RGB')}>Create RGB Color</button>
        <button className='hover:bg-zinc-100 p-3 rounded-md' onClick={typeOfColor === 'HEX' ? handleCreateRandomHexColor : handleCreateRandomRgbColor}>Generate Random Color</button>
      </div>
      <div className='flex justify-center items-center bg-zinc-200 p-3 rounded-md mt-2'>
        <h1>{typeOfColor}:</h1>
        <h1>{color}</h1>
      </div>
    </div>
  )
}

export default RandomColorGenerator
