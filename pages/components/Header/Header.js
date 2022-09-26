import React from 'react'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

function Header() {
    return (
        <div className='flex flex-col w-full '>
            <div className='flex flex-row h-[60px] w-full bg-sky-800 text-white justify-between align-center items-center p-2 font-bold text-xl'>
                <div className='ml-5'>Logo</div>
                <div className='mr-5'>Sign In</div>
            </div>
            <div>
                <KeyboardDoubleArrowLeftIcon/>
            </div>
        </div>
    )
}

export default Header