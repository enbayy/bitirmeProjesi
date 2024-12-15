"use client";

import React, { useState } from "react";

const artists = [
    {
        id: 1,
        name: "Alev Ebüzziya Siesbye",
        bio: "Seramik sanatçısı.",
        details:
            "Seramik sanatçısı olarak tanınan Ebüzziya, Danimarka Kraliyet Porselen Fabrikaları ve Rosenthal AG için tasarımlar yapmıştır. Eserleri İngiltere ve Danimarka gibi birçok ülkenin kraliyet koleksiyonlarında yer almaktadır. 2021’de Cumhurbaşkanlığı Kültür ve Sanat Büyük Ödülü’ne layık görülmüştür.",
        image: "/alev.jpg",
    },
    {
        id: 2,
        name: "Jale Yılmabaşar",
        bio: "Seramik ve resim sanatçısı.",
        details:
            "İstanbul Devlet Güzel Sanatlar Akademisi’nden mezun olmuş ve Almanya’da eğitim almıştır. 1968’de İtalya’da Uluslararası Seramik Yarışması’nda altın madalya kazanmış ve 1998’de “Devlet Sanatçısı” unvanını almıştır.",
        image: "/jale_yilmabasar.jpg",
    },
    {
        id: 3,
        name: "Burçak Bingöl",
        bio: "Görsel sanatçı.",
        details:
            "1976’da Görele’de doğdu. Görsel sanatçı olan Bingöl, Hacettepe Üniversitesi’nde seramik alanında doktora yapmıştır. Eserlerinde kültürel miras ve kimlik temalarını işleyen sanatçı, seramik, çizim, video ve fotoğraf gibi çeşitli medyumlarda çalışmaktadır.",
        image: "/burcak_bingol.jpg",
    },
    {
        id: 4,
        name: "Atilla Cengiz Kılıç",
        bio: "Seramik sanatçısı ve akademisyen.",
        details:
            "1964 yılında doğdu. Özellikle indirgen ortamlarda seramik pişirimiyle özel ilgilenmektedir. 1992 yılında Rotary Kulübü 2. Altın Testi Seramik yarışmasında birincilik; 1992 yılında düzenlenen E.K.V. Duvar tabağı seramik yarışmasında “İlk Beş Eser” ödülü; 2002 yılında 6. Cairo International Bienale for Ceramics (Bienal Ödülü)nün sahibidir.",
        image: "/atilla_cengiz_kilic.jpg",
    },
    {
        id: 5,
        name: "Ayşegül Türedi Özen",
        bio: "Seramik sanatçısı ve eğitmen.",
        details:
            "1960, Eskişehir doğumlu. Şehrin Ateşi Seramik Galerisi’nin danışmanlığını yapmaktadır. Özen’in çalışmaları, seramik sanatını günlük yaşamın estetiğiyle birleştirir. Eserlerinde doğadan ve Anadolu kültüründen esinlenmiştir.",
        image: "/aysegul_turedi_ozen.jpg",
    },
    {
        id: 6,
        name: "Hakkı İzzet",
        bio: "Seramik ve heykel.",
        details:
            "1948, Burs doğumlu. Modern sanat ve geleneksel seramik arasında bir köprü oluşturur. Anadolu kültüründen ilham alarak minimalist ve soyut eserler üretmiştir. Türk seramik sanatına yaptığı katkılarla tanınır.",
        image: "/hakkı_izzet.jpg",
    },
    {
        id: 7,
        name: "Hamiye Çolakoğlu",
        bio: "Seramik sanatçısı.",
        details:
            "1925, İstanbul doğumlu. Geleneksel Türk halk motiflerini eserlerine yansıtan Çolakoğlu, 1998 yılında Devlet Sanatçısı unvanını almıştır. Duvar panoları ve büyük ölçekli seramik eserleriyle bilinir. Anadolu uygarlıklarından esinlenerek özgün bir tarz geliştirmiştir.",
        image: "/hamiye_colakoglu.jpg",
    },
    {
        id: 8,
        name: "Salim Yaşar",
        bio: "Çömlek ustası.",
        details:
            "1942, Bilecik. Babasından öğrendiği çömlekçilik sanatını ileriye taşıyan Salim Yaşar, geleneksel tekniklerle özgün eserler üretir. Almanya ve Vietnam’da da bu sanatı tanıtmış ve yeni nesillere aktarmıştır.",
        image: "/salim_yasar.jpg",
    },
    {
        id: 9,
        name: "Aygün Dinçer Kırca",
        bio: "Seramik sanatçısı ve akademisyen.",
        details:
            "1975, İzmir. Seramikte sınırları zorlayan Kırca, malzeme ve teknik denemeleriyle dikkat çeker. Aynı zamanda Mimar Sinan Güzel Sanatlar Üniversitesi’nde eğitimci olarak çalışmaktadır.",
        image: "/aygun_dincer.jpg",
    },
    {
        id: 10,
        name: "Sadi Diren",
        bio: "Seramik sanatçısı.",
        details:
            "1932, İstanbul. Seramik sanatının Türkiye’deki öncülerindendir. İstanbul Devlet Güzel Sanatlar Akademisi’nde öğrenim gördü. Eserlerinde geleneksel Türk motiflerini modern yorumlarla birleştirerek özgün bir tarz oluşturmuştur. Yurt içi ve yurt dışında birçok sergi açmış ve ödüller kazanmıştır.",
        image: "/sadi_diren.jpg",
    },
    {
        id: 11,
        name: "Nurdan Arslan",
        bio: "Seramik sanatçısı ve akademisyen.",
        details:
            "1970, Ankara. Kent hafızası ve mekânsal anımsamalar üzerine çalışan bir sanatçıdır. Seramik panolarında kişisel ve toplumsal hikâyeleri işlemektedir.",
        image: "/nurdan_arslan.jpg",
    },
    {
        id: 12,
        name: "Alev Demirkesen",
        bio: "Türk süsleme sanatları, seramik dekorasyonu, minyatür ve tezhip.",
        details:
            "1964, İstanbul. Mimar Sinan Güzel Sanatlar Üniversitesi’nde Geleneksel Türk Sanatları eğitimi alan Demirkesen, Neşe Aybey ve Tahsin Aykutalp gibi ustalardan ders almıştır. 2003 yılından itibaren Sakarya Üniversitesi Geleneksel Türk Sanatları Bölümü’nde öğretim üyeliği yapmaktadır. Yurt içi ve yurt dışında birçok kişisel ve karma sergiye katılmıştır.",
        image: "/alev_demirkesen.jpg",
    },
];

const ArtistsPage = () => {
    const [selectedArtist, setSelectedArtist] = useState(null);

    const openModal = (artist) => {
        setSelectedArtist(artist);
    };

    const closeModal = () => {
        setSelectedArtist(null);
    };

    return (
        <div className="min-h-screen py-10 px-5">
            <h1 className="text-3xl font-bold text-center mb-10 text-[#4B2E2E]">
                Sanatçılar
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {artists.map((artist) => (
                    <div
                        key={artist.id}
                        onClick={() => openModal(artist)}
                        className="bg-[#F4EDE4] shadow-lg rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow duration-300"
                    >
                        <img
                            src={artist.image}
                            alt={artist.name}
                            className="w-full h-64 object-cover"
                        />
                        <div className="p-6">
                            <h2 className="text-2xl font-semibold text-[#4B2E2E]">
                                {artist.name}
                            </h2>
                            <p className="text-[#4B2E2E] mt-4">{artist.bio}</p>
                        </div>
                    </div>
                ))}
            </div>

            {selectedArtist && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-[#F4EDE4] rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
                        <button
                            onClick={closeModal}
                            className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                        >
                            ✖
                        </button>
                        <img
                            src={selectedArtist.image}
                            alt={selectedArtist.name}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <h2 className="text-3xl font-bold text-[#4B2E2E]">
                            {selectedArtist.name}
                        </h2>
                        <p className="text-[#4B2E2E] mt-4 whitespace-pre-line">
                            {selectedArtist.details}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArtistsPage;