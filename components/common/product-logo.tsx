import Image from "next/image";
import Link from "next/link";
import productImage from "@/assets/goheza_logo.png";

export default function ProductLogo() {
  return (
    <Link href="/" className="flex items-center space-x-4">
      <div className="w-24 sm:w-28 md:w-32 lg:w-36 relative aspect-square">
        <Image
          src={productImage}
          alt="Goheza"
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100px, (max-width: 1200px) 120px, 150px"
        />
      </div>
    </Link>
  );
}
