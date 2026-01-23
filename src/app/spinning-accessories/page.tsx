import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCatalog from "@/components/ProductCatalog";
import { products } from "@/data/products";

export const metadata = {
    title: "Spinning Accessories | CARDWELL",
    description: "High-quality spinning accessories for Carding, Comber, Speed Frame, and Ring Frame machinery.",
};

export default function SpinningAccessoriesPage() {
    const spinningIds = [
        "apron-doffing-device",
        "carding-solutions",
        "comber-accessories",
        "simplex-frame-parts",
        "ring-frame-components"
    ];

    const accessories = products
        .filter(p => spinningIds.includes(p.id))
        .map(p => ({
            slug: p.id,
            name: p.name,
            category: p.category,
            image: p.image,
            desc: p.description,
            video: p.video
        }));

    return (
        <main className="min-h-screen font-sans bg-gray-50">
            <Header />
            <ProductCatalog
                initialProducts={accessories}
                title="SPINNING ACCESSORIES"
                subtitle="Precision engineered components for textile spinning."
            />
            <Footer />
        </main>
    );
}
