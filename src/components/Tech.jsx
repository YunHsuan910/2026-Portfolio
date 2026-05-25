import React from 'react'

function Tech({techTitle,techList}) {
  return (
    <div className='tech'>
        <p className='textBold'>{techTitle}:</p>
        <p>{techList}</p>
    </div>
  )
}

export default Tech