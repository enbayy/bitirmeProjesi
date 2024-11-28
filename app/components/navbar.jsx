'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';
import { BiLogoTux } from "react-icons/bi";
import { auth } from "../Firebase";
import { signOut } from "firebase/auth";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const logout = async () => {
        try {
            await signOut(auth);
            window.location.href = 'pages/loginPage';
            console.log("çıkış yapıldı")
        } catch {
            console.log(error.message)
        }
    }

    return (
        <div className="w-full h-14 bg-neutral-900 sticky top-0">
            <nav className="container mx-auto px-4 h-full flex justify-center items-center">
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                <ul className="hidden md:flex gap-x-28 text-white">
                    <li>
                        <Link href="/">
                            Anasayfa
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/productPage">
                            Ürünler
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/artistsPage">
                            Sanatçılar
                        </Link>
                    </li>
                    <li>
                        <BiLogoTux className="size-6" />
                    </li>
                    {/* <li>
                        <Link href="/pages/aboutPage">
                            About
                        </Link>
                    </li> */}
                    <li>
                        <Link href="/pages/libraryPage">
                            Kütüphane
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/contactPage">
                            İletişim
                        </Link>
                    </li>
                    <li>
                        <Link href="/pages/loginPage">
                            Giriş Yap
                        </Link>
                    </li>
                    <li>
                        <button onClick={logout}>
                            Çıkış Yap
                        </button>
                    </li>
                </ul>
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-neutral-900 text-white">
                    <ul className="flex flex-col items-center py-4">
                        <li>
                            <Link href="/">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/aboutPage">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/servicesPage">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/pages/contactPage">
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;