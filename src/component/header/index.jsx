import React from 'react'


const HeaderComp = () => {
    return (
        <header className='w-full bg-red-300 px-20 py-3 items-center'>
            <nav className='flex justify-between items-center'>
                <h1 className='text-xl font-serif font-bold'>Logo</h1>
                <ul className="flex gap-x-10">
                    <li><a href="">Home</a></li>
                    <li><a href="">Demo</a></li>
                    <li><a href="">Authenticate</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComp

