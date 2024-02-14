'use client'

import React, { useState } from 'react'
import Button from './Button'

const Counter = () => {

    // Initialize count state with a starting value of 0
    const [count, setCount] = useState(0)

    return (
        <div className='bg-black h-screen w-screen flex justify-center items-center gap-10'>
            {/* Increase button: triggers setCount to increment count by 1 */}
            <Button onClick={() => setCount(count + 1)}>+</Button>

            {/* Display current count value */}
            <div>{count}</div>

            {/* Decrease button: conditionally decrements count, ensuring it doesn't go below 0 */}
            <Button onClick={() => setCount(count && count - 1)}>-</Button>
        </div>
    )
}

export default Counter