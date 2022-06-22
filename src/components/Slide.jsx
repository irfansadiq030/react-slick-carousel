import React from 'react'

const Slide = ({ item }) => {
    return (
        <>
            <div className='card'>
                <img  src={item.image} alt="" />
            </div>

        </>
    )
}

export default Slide