import React from 'react'

const Success = ({fileName}) => {

  return (
    <section className='wrapper-create'>
      <label className='success'>
        <h2>File: {fileName} uploaded successfully</h2>
      </label>
    </section>
  )
}

export default Success