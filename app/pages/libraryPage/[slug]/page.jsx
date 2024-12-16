import { notFound } from "next/navigation";

const pageContent = {
    "seramik-sanati-tarihi": {
        title: "Seramik Sanatı Tarihi",
        content: "Seramik sanatı, insanlık tarihinin en eski sanat formlarından biridir.",
        image: "/seramiksantar.png",
    },
    "malzeme-ve-teknikler": {
        title: "Malzeme ve Teknikler",
        content: "Seramik yapımında kullanılan malzemeler ve teknikler hakkında bilgi edinin.",
        image: "/malzvetek.png",
    },
    "sanatcilardan-ilham": {
        title: "Sanatçılardan İlham",
        content: "Platformumuzdaki sanatçıların hayat hikayelerini ve eserlerini inceleyin.",
        image: "/Sanatcilardanilham.png",
    },
};

export default function DynamicLibraryPage({ params }) {
    const { slug } = params;
    const content = pageContent[slug];

    if (!content) {
        notFound();
    }

    return (
        <div className="p-10 font-sans text-[#4B2E2E]">
            <h1 className="text-4xl text-center">{content.title}</h1>
            <p className="text-lg leading-relaxed text-center">{content.content}</p>
            <div className="text-center mt-5">
                <img
                    src={content.image}
                    alt={content.title}
                    className="max-w-full rounded-lg"
                />
            </div>
        </div>
    );
}

export function generateStaticParams() {
    return Object.keys(pageContent).map((slug) => ({ slug }));
}