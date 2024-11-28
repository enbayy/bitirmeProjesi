'use client'

import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase';
import React, { useState } from 'react';

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async (e) => {
        e.preventDefault();
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                setEmail("");
                setPassword("");
                console.log("evet");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async (e) => {
        e.preventDefault();
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            if (user) {
                setEmail("");
                setPassword("");
                window.location.href = '/';
                console.log("Giriş başarılı");
            }
        } catch (error) {
            console.log(error.message);
        }
    };

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
                        value={email}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='flex justify-center items-center gap-x-5'>
                    <button
                        onClick={register}
                        type="submit"
                        className='w-24 py-1 bg-green-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >
                        Kayıt Ol
                    </button>
                    <button
                        onClick={login}
                        type="submit"
                        className='w-24 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400'
                    >
                        Giriş Yap
                    </button>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;