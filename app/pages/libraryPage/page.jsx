"use client";

import React from "react";

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
    return (
        <div style={{ padding: "40px", fontFamily: "Arial, sans-serif", color: "#4B2E2E" }}>

            <div style={{ textAlign: "center", marginBottom: "40px" }}>
                <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Kütüphane</h1>
                <p style={{ fontSize: "20px", marginTop: "10px", color: "#6B4A3C" }}>
                    Seramik sanatını keşfetmek ve daha fazla bilgi edinmek için aşağıdaki içeriklere göz atın.
                </p>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "20px",
                }}
            >
                {libraryContent.map((item) => (
                    <div
                        key={item.id}
                        style={{
                            backgroundColor: "#F4EDE4",
                            borderRadius: "12px",
                            overflow: "hidden",
                            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                            transition: "transform 0.3s ease, box-shadow 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.05)";
                            e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                            e.currentTarget.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            style={{
                                width: "100%",
                                height: "200px",
                                objectFit: "cover",
                                borderBottom: "1px solid #D6C6B5",
                            }}
                        />
                        <div style={{ padding: "20px" }}>
                            <h2
                                style={{
                                    fontSize: "22px",
                                    fontWeight: "bold",
                                    marginBottom: "10px",
                                    color: "#4B2E2E",
                                }}
                            >
                                {item.title}
                            </h2>
                            <p style={{ fontSize: "16px", color: "#5A3E3E", marginBottom: "15px" }}>
                                {item.excerpt}
                            </p>
                            <a
                                href={`/library/${item.slug}`}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    padding: "10px 15px",
                                    backgroundColor: "#4B2E2E",
                                    color: "#FFFFFF",
                                    borderRadius: "8px",
                                    textDecoration: "none",
                                    fontWeight: "bold",
                                    transition: "background-color 0.3s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#6B4A3C")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4B2E2E")}
                            >
                                Daha Fazla Oku →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LibraryPage;