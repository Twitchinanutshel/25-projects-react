import React, { useState } from 'react'
import accordionData from './accordionData';

const Accordion = () => {
  const [selected, setSelected] = useState(false);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getId) {
    setSelected(getId === selected ? null : getId)
  }

  function handleMultiSelection(getId) {
    let cpyMultiple = [...multiple];
    const findIndexOfId = cpyMultiple.indexOf(getId);

    if(findIndexOfId === -1) cpyMultiple.push(getId)
    else cpyMultiple.splice(findIndexOfId, 1)

    setMultiple(cpyMultiple)
  }

  return (
    <div className='text-white text-xl flex flex-col h-screen w-screen items-center mt-40'>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} className={`${enableMultiSelection ? 'text-green-400' : 'text-red-400'} p-5 mb-2 rounded-lg font-semibold bg-zinc-800`}>Enable Multi Selection</button>
      <div className='w-96'>
        {
          accordionData && accordionData.length > 0 ? (
            accordionData.map(accordionDataItem => (
              <div key={accordionDataItem.id} className='bg-zinc-800 mb-2'>
                <div
                  onClick={enableMultiSelection
                    ? () => handleMultiSelection(accordionDataItem.id)
                    : () => handleSingleSelection(accordionDataItem.id)
                  }
                  className='flex justify-between items-center cursor-pointer py-4 px-4'
                >
                  <h1>{accordionDataItem.question}</h1>
                  <span>+</span>
                </div>
                {
                  enableMultiSelection ?
                  multiple.indexOf(accordionDataItem.id) !== -1 &&
                  <div className='py-4 px-4'>{accordionDataItem.answer}</div> :
                  selected === accordionDataItem.id && <div className='pb-4 px-4'>{accordionDataItem.answer}</div>
                }
              </div>
            )
            ))
            : (
              <div>No Data Found</div>
            )}
      </div>
    </div>
  )
}

export default Accordion
