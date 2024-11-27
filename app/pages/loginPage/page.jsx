'use client'

import React, { useState } from 'react'

const LoginPage = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className='h-[95vh] flex justify-center items-center'>
            <form className='bg-white p-8 rounded-xl shadow-lg w-80'>
                <h2 className='text-2xl text-black font-semibold text-center mb-6'>Giriş Yap</h2>
                <div className='flex flex-col mb-4'>
                    <label htmlFor="email" className='text-sm font-medium text-gray-700'>E-mail:</label>
                    <input
                        id="email"
                        className='border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black'
                        type="email"
                        placeholder='e-mail'
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className='flex flex-col mb-6'>
                    <label htmlFor="password" className='text-sm font-medium text-gray-700'>Şifre:</label>
                    <input
                        id="password"
                        className='border border-gray-300 rounded-lg p-3 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-400 text-black'
                        type="password"
                        placeholder='Şifre'
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-center items-center gap-x-5'>
                    <button
                        type="submit"
                        className='w-24 py-1 bg-green-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >
                        Kayıt Ol
                    </button>
                    <button
                        type="submit"
                        className='w-24 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >
                        Giriş Yap
                    </button>
                </div>
            </form>
        </div>
    )
}

export default LoginPage