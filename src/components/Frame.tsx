import React from 'react'
import frame1 from '@/assets/frame/frame1.png'
import frame2 from '@/assets/frame/frame2.png'
import frame3 from '@/assets/frame/frame3.png'
import frame4 from '@/assets/frame/frame4.png'

const Frame = () => {
  return (
    <div className=" max-w-7xl py-4 text-base px-5  font-normal   flex gap-16 md:justify-between mx-auto">
    <div className="flex  items-center gap-4"><img src={frame1} alt="" /><h2>UK licenced medication</h2></div>

    <div className="flex items-center gap-4"><img src={frame2} alt="" /><h2>Free, discreet delivery</h2></div>

    <div className="flex items-center gap-4"><img src={frame3} alt="" /><h2>Cancel any time</h2></div>


    <div className="flex items-center gap-4"><img src={frame4} alt="" /><h2>Ongoing clinician support</h2></div>
</div>       
  )
}

export default Frame