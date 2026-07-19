import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dragonHelmet from "../../assets/images/dragon-helmet.png";

function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const navItems = [
        "About",
        "Experience",
        "Project",
        "Contact",
    ];

    return (
        <motion.nav initial={{ y: 0, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: "easeOut" }} className="fixed top-0 left-0 z-50 flex w-full justify-center w-full items-center py-5">
            <div className={`flex items-center rounded-full border border-white/10 backdrop-blur-xl shadow-md transition-all duration-300
                ${ scrolled ? "bg-white/10 h-14 px-6": "bg-white/10 h-20 px-10"}`}>
                <div className="flex items-center gap-8 text-white font-lexend">
                    {navItems.slice(0, 2).map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="
                                relative
                                text-sm
                                uppercase
                                tracking-wider
                                transition
                                duration-300
                                hover:text-[#e5291b]

                                after:absolute
                                after:left-1/2
                                after:-bottom-1
                                after:h-[2px]
                                after:w-0
                                after:-translate-x-1/2
                                after:bg-[#e5291b]
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                            "
                        >
                            {item}
                        </a>
                    ))}

                    <motion.a
                        href="#home"
                        whileHover={{
                            scale: 1.15,
                            rotate: -12,
                        }}
                        whileTap={{
                            scale: 0.95,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                        }}
                    >
                        <img
                            src={dragonHelmet}
                            alt="Dragon Helmet"
                            className="h-12 w-auto"
                        />
                    </motion.a>

                    {navItems.slice(2).map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="
                                relative
                                text-sm
                                uppercase
                                tracking-wider
                                transition
                                duration-300
                                hover:text-[#e5291b]

                                after:absolute
                                after:left-1/2
                                after:-bottom-1
                                after:h-[2px]
                                after:w-0
                                after:-translate-x-1/2
                                after:bg-[#e5291b]
                                after:transition-all
                                after:duration-300
                                hover:after:w-full
                            "
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </div>
        </motion.nav>
    );
}

export default Navbar;