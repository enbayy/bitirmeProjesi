import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black w-full h-32 flex justify-center items-center'>
            <div className='flex flex-col gap-y-3 text-white'>
                <div className='flex gap-x-5 justify-center'>
                    <FaGithub className='-ml-3 size-6' />
                    Github
                </div>
                <div className='flex gap-x-5 justify-center'>
                    <FaLinkedin className='size-6' />
                    LinkedIn
                </div>
                <p>Copy Right 2024 © Rumeysa Aydın tarafından tüm hakları saklıdır.</p>
            </div>

        </div>
    )
}

export default Footer