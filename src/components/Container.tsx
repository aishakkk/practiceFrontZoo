import React from 'react'

type Props = {
    children: React.ReactNode
}

const Container = ({children}: Props) => {
  return (
    <div className="relative isolate pt-10  pb-10 bg-green-600 ">
                    {children}
           </div>
  )
}

export default Container