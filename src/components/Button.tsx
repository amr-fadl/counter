import React, { ReactNode } from 'react'

const Button = ({ children, onClick }: { children: ReactNode, onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
    return (
        <button onClick={onClick} type='button' className="focus:outline-none text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-purple-600 hover:bg-purple-700 focus:ring-purple-900">
            {children}
        </button>
    )
}

export default Button