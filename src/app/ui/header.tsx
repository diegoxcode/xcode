import Image from "next/image";
import logo from '../../../public/assets/svg/logo.svg';
import logoBlack from '../../../public/assets/svg/logoblack.svg';
import { Link as ScrollLink } from 'react-scroll';
import { useEffect, useState } from "react";

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    // Función para manejar el evento de scroll
    const handleScroll = () => {
        const scrollTop = window.scrollY;
        if (scrollTop > 80) { // Puedes ajustar este valor según tus necesidades
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        // Agregar listener al evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpiar el listener al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { to: 'home', label: 'Home' },
        { to: 'service', label: 'Servicios' },
        { to: 'projects', label: 'Proyectos' },
        { to: 'testimonials', label: 'Testimonios' },
        { to: 'questions', label: 'Preguntas' },
    ];

    return (
        <div className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#fff]" : ""}`}>
            <div className="xl:max-w-screen-xl px-5 md:px-0 md:max-w-screen-md mx-auto flex justify-between items-center py-4">
                <p className="font-bold text-2xl text-[#fff]"><Image src={isScrolled ? logoBlack : logo} width={60} height={60} alt="logo" /></p>
                <div className="hidden xl:block">
                    <ul className="flex bg-[#fff] rounded-full w-full py-4">
                        {navLinks.map((link, index) => (
                            <li
                                key={index}
                                className={`${index === 0 ? 'ml-1' : 'ml-1'} first:px-0 last:px-0 px-5 rounded-full transition-colors duration-300`}
                            >
                                <ScrollLink
                                    to={link.to}
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    offset={-80} // Ajusta este valor según la altura de tu Header
                                    activeClass="active-link bg-[#8820DE] px-5 rounded-full text-[#fff]"
                                    className="cursor-pointer text-[#000] px-5 hover:font-bold py-4 hover:text-[#8820DE]]"
                                >
                                    {link.label}
                                </ScrollLink>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <a
                        href="https://wa.me/51991065217?text=Hola%20quiero%20más%20información%20sobre%20sus%20servicios" // Reemplaza con tu número y mensaje
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`border cursor-pointer border-solid py-2 px-6 rounded-full ${isScrolled ? "border-[#404040] text-[#404040]" : "border-[#fff] text-[#fff]"}`}>Contactanos</a>
                </div>
            </div>
        </div>
    )
}

export default Header;