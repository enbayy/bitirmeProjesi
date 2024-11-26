'use client';

import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="w-full h-14 bg-[#288786] sticky top-0">
            <nav className="container mx-auto px-4 h-full flex justify-center items-center">
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
                <ul className="hidden md:flex gap-x-6 text-white">
                    <li>
                        {/* Logo */}
                    </li>
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
            </nav>

            {isMenuOpen && (
                <div className="md:hidden bg-emerald-800 text-white">
                    <ul className="flex flex-col items-center py-4">
                        <li>
                            <Link href="/">
                                <p>Home</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <p>About</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services">
                                <p>Services</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contacts">
                                <p>Contacts</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;