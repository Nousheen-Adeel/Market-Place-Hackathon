import { client } from "@/sanity/lib/client";
import { Product } from "../../../../types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface ProductPageProps {
    params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
    return client.fetch(
        groq`*[_type == "product" && slug.current == $slug][0] {
            _id,
            productName,
            _type,
            image,
            price,
            description,
        }`,
        { slug }
    );
}
export default async function ProductPage({ params }: ProductPageProps) {
    const product = await getProduct(params.slug);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <div className="max-w-4x1 mx-auto px-5">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div className="flex flex-col gap-8">
                    <p className="text-4xl text-center font-bold">Product Detail Page</p>
            
          {product.image && (
            <Image
            src={urlFor(product.image).url()}
            alt={product.productName}
            width={300}
            height={300} className="aspect-square rounded-lg shadow-md" />
          )}
        
            
                <h1 className="text-2xl font-bold">{product.productName}</h1>
                <p className="text-lg text-black">{product.price}</p>
                <p className="text-gray-500">{product.description}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add to Cart</button>
                  
            </div>

            </div>
        </div>
    );
}