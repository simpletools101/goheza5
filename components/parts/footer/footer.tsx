export default function Footer() {
    return (
        <div className="py-12 border-t border-white/10 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-[#ff5757]">
                            Goheza
                        </h3>
                        <p className="text-gray-400">
                            Redefining what's possible with influence.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4 text-neutral-300">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    About
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold mb-4 text-neutral-300">Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                    Privacy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <div className="text-gray-400 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} Goheza. All rights reserved.
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Terms
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
