import React from 'react'

type Props = {
    text: string 
}

const Header = ({text}: Props) => {
  return (
    <div className='text-center m-auto font-semibold font-scada  text-5xl  max-w-7xl py-8'><h2 className=' text-center text-green-700'>{text}</h2></div>
  )
}

export default Header