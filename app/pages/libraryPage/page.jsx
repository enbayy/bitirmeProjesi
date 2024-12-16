"use client";

import React from "react";
import { useRouter } from "next/navigation";

const libraryContent = [
    {
        id: 1,
        title: "Seramik Sanatı Tarihi",
        excerpt: "Seramik sanatının kökenlerini ve tarihsel gelişimini keşfedin.",
        slug: "seramik-sanati-tarihi",
        image: "/seramiksantar.png",
    },
    {
        id: 2,
        title: "Malzeme ve Teknikler",
        excerpt: "Seramik yapımında kullanılan malzemeler ve teknikler hakkında bilgi edinin.",
        slug: "malzeme-ve-teknikler",
        image: "/malzvetek.png",
    },
    {
        id: 3,
        title: "Sanatçılardan İlham",
        excerpt: "Platformumuzdaki sanatçıların hikayelerini ve eserlerini inceleyin.",
        slug: "sanatcilardan-ilham",
        image: "/Sanatcilardanilham.png",
    },
];

const LibraryPage = () => {
    const router = useRouter();

    const handleNavigation = (slug) => {
        router.push(`/pages/libraryPage/${slug}`);
    };

    return (
        <div className="p-10 font-sans text-[#4B2E2E]">
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold">Kütüphane</h1>
                <p className="text-xl mt-2 text-[#6B4A3C]">
                    Seramik sanatını keşfetmek ve daha fazla bilgi edinmek için aşağıdaki içeriklere göz atın.
                </p>
            </div>

            <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {libraryContent.map((item) => (
                    <div
                        key={item.id}
                        className="bg-[#F4EDE4] rounded-lg overflow-hidden shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg flex flex-col"
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-52 object-cover border-b border-[#D6C6B5]"
                        />
                        <div className="p-5 flex flex-col flex-1">
                            <h2 className="text-xl font-bold mb-2 text-[#4B2E2E]">{item.title}</h2>
                            <p className="text-base text-[#5A3E3E] mb-4">{item.excerpt}</p>
                            <button
                                onClick={() => handleNavigation(item.slug)}
                                className="w-full flex justify-center items-center py-2 px-4 bg-[#4B2E2E] text-white rounded-lg font-bold transition-colors duration-300 hover:bg-[#6B4A3C] mt-auto"
                            >
                                Daha Fazla Oku →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibraryPage;