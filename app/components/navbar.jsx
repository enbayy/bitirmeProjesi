'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';
import { auth } from "../Firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { showSuccessToast } from "@/app/utils/notifications";
import { ToastContainer } from 'react-toastify';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            showSuccessToast("Çıkış yapıldı!");
            setTimeout(() => {
                window.location.href = '/pages/loginPage';
            }, 2000);
        } catch (error) {
            console.error("Çıkış hatası:", error.message);
        }
    };

    return (
        <div className="w-full h-14 sticky top-0 bg-[#CBB7A3] shadow-md border-b border-[#f5e4d4] rounded-b-xl">
            <ToastContainer />
            <nav className="container mx-auto px-4 h-full flex justify-center items-center">
                <button
                    className="md:hidden text-black"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                <ul className="hidden md:flex gap-x-28 text-black items-center">
                    <li>
                        <Link href="/">Anasayfa</Link>
                    </li>
                    <li>
                        <Link href="/pages/productPage">Ürünler</Link>
                    </li>
                    <li>
                        <Link href="/pages/artistsPage">Sanatçılar</Link>
                    </li>
                    <li>
                        <Link href="/">
                            <img
                                src="/logo.jpg"
                                alt="Logo"
                                className="h-20 object-contain"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/libraryPage">Kütüphane</Link>
                    </li>
                    <li>
                        <Link href="/pages/contactPage">İletişim</Link>
                    </li>
                    {isLoggedIn ? (
                        <li>
                            <button onClick={logout}>Çıkış Yap</button>
                        </li>
                    ) : (
                        <li>
                            <Link href="/pages/loginPage">Giriş Yap</Link>
                        </li>
                    )}
                </ul>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-[#ddc69d] text-black">
                    <ul className="flex flex-col items-center py-4">
                        <li>
                            <Link href="/">Anasayfa</Link>
                        </li>
                        <li>
                            <Link href="/pages/productPage">Ürünler</Link>
                        </li>
                        <li>
                            <Link href="/pages/contactPage">İletişim</Link>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <button onClick={logout}>Çıkış Yap</button>
                            </li>
                        ) : (
                            <li>
                                <Link href="/pages/loginPage">Giriş Yap</Link>
                            </li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;