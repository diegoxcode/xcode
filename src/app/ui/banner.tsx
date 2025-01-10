"use client"
import Image from "next/image";
import software from '../../../public/assets/software.png'
import { Icon } from "@iconify/react/dist/iconify.js";
import { useEffect, useState } from 'react'

const Banner = () => {

    const [opacity, setOpacity] = useState(1);
    const [scale, setScale] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const maxScroll = 300; // Máximo scroll antes de desaparecer
            const newOpacity = Math.max(1 - scrollY / maxScroll, 0);
            const newScale = Math.max(1 - scrollY / (maxScroll * 2), 0.8);
            setScale(newScale);
            setOpacity(newOpacity);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="overflow-hidden" id="home">
            <div className={`
      bg-gradient-to-r from-[#8417E0] via-[#8F2CE2] to-[#8215DF] w-full`}>
                <div className="banner relative"></div>
                <div
                    style={{ opacity }}
                    className="flex sticky top-0 justify-center items-center md:max-h-96 xl:pt-[210px] md:pt-[120px] max-w-screen-lg mx-auto text-center">
                    <div className='relative text-center mt-56 md:mt-24' style={{ transform: `scale(${scale})` }} >
                        <div className='text-center  w-fit mx-auto mb-4'>
                            <span className='flex items-center border border-solid border-[#f5f5f5] rounded-full pr-4'><div className='rounded-full bg-[#dcb2ff] p-2'><Icon className='' icon="file-icons:shuriken" width="20" height="20" color='#fff' /></div><div className='ml-2 text-[#fff]'>Soluciones de impacto</div></span>
                        </div>
                        <h1 className="xl:text-[70px] text-[28px] w-10/12 mx-auto md:text-[54px] md:w-[800px] font-[900] text-white leading-[35px] md:leading-[60px] text-shadow:0_0_10px_rgba(255,255,255,0.8)">
                            Desarrollamos{" "}
                            <span className="[text-shadow:0_0_10px_rgba(255,255,255,0.8)]">
                                Software
                            </span>
                            , impulsamos tu <span className="[text-shadow:0_0_10px_rgba(255,255,255,0.8)]">negocio</span>
                        </h1>
                        <h6 className="mt-5 md:mt-4 md:text-[18px] xl:text-[22px] w-11/12 md:w-[700px] mx-auto text-[#fff]">Herramientas necesarias para impulsar tu empresa, software a medida para tu día a día</h6>
                        <button className='hidden mx-auto md:block mt-10 md:mt-5 border border-solid rounded-full px-8 py-3 text-[#fff]'>{`Solicitar una demo`}</button>

                    </div>

                </div>
                <div className='px-5 mt-10 block xl:max-w-screen-lg md:top-[120px] top-[0px] mx-auto md:max-w-screen-md relative'>
                    <Image className='w-full object-cover rounded-4xl' src={software} width={700} height={700} alt='Software' />
                </div>
            </div>
        </div>
    )
}

export default Banner;