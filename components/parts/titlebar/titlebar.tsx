import ProductLogo from "@/components/common/product-logo";
import { Button } from "@/components/ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

export default function TitlebarComponent() {
    return (
        <div className="bg-[#fafafa] flex justify-between items-center h-[75px] ">
            <div className="ml-12 mt-4">
                <ProductLogo/>
            </div>
            <div className="space-x-4 mr-6 text-md font-semibold relative ">
            </div>
        </div>
    )
}