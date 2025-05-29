import React,{useState} from 'react'

const Home4 = () => {

  const [title,setTitle]= useState('');
  return (
    <div>
      <input
      className='p-2 rounded-2xl mt-2'
      type='text'
      placeholder='Enter text here'
      value={title}
      onChange={(e)=> setTitle(e.target.value)}

      />

      <button>
        Create
      </button>
    </div>
  )
}

export default Home4
