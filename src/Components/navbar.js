import React from 'react'

const Navbar = () => {
    return (
        <>
            <header>
                <nav className='flex justify-around bg-red-300 items-center ' >
                    <div className='text-4xl  ' >Logo</div>
                        <ul className='flex justify-evenly gap-10 ' >
                            <li>Home</li>
                            <li>About</li>
                            <li>pass</li>
                            <li>fail</li>
                        </ul>
                    
                </nav>

            </header>
        </>
    )
}

export default Navbar;
