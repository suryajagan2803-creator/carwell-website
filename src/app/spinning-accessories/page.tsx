import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";

export const metadata = {
    title: "Spinning Accessories | CARDWELL",
    description: "High-quality spinning accessories for Carding, Comber, Speed Frame, and Ring Frame machinery.",
};

const spinningAccessories = [
    { slug: "apron-doffing-device", name: "Apron-Doffing Device", category: "Spinning Accessory", image: "/img/apron-doffing.png", desc: "Automated doffing for increased efficiency." },
    { slug: "carding-solutions", name: "Carding Solutions", category: "Carding", image: "/img/draw-frame.png", desc: "Precision parts for carding machines." },
    { slug: "comber-accessories", name: "Comber Accessories", category: "Comber", image: "/img/comber.png", desc: "Enhancing the quality of combed cotton." },
    { slug: "simplex-frame-parts", name: "Simplex Frame Parts", category: "Speed Frame", image: "/img/speed-frame.png", desc: "Robust components for speed frames." },
    { slug: "ring-frame-components", name: "Ring Frame Components", category: "Ring Frame", image: "/img/apron-doffing.png", desc: "Essential parts for ring spinning." },
];

export default function SpinningAccessoriesPage() {
    return (
        <main className="min-h-screen font-sans bg-gray-50">
            <Header />
            <ProductCatalog
                initialProducts={spinningAccessories}
                title="SPINNING ACCESSORIES"
                subtitle="Precision engineered components for textile spinning."
            />
            <Footer />
        </main>
    );
}
