import React from 'react'

const Model = ({children, onClose}) => {
  return (
    <div>
        <div className='backdrop' onClick={onClose}></div>
            <dialog className='modal' open>
                {children}
            </dialog>
       
    </div>
  )
}

export default Model;
