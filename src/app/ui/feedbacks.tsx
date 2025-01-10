"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import Slider from "react-slick";
import men from '../../../public/assets/men.webp'
import Image from "next/image";
import logo from '../../../public/assets/logo.png'

const FeedBacks = () => {

    var settingsTop = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 3.4,
        centerMode: true,
        centerPadding: "0px",
        slidesToScroll: 4,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,  // Tablets and small laptops
                settings: {
                    slidesToShow: 3.4,  // Show 3 items
                    slidesToScroll: 2, // Scroll 3 items
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,   // Mobile landscape and small tablets
                settings: {
                    slidesToShow: 1,  // Show 2 items
                    slidesToScroll: 1, // Scroll 2 items
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,   // Mobile portrait
                settings: {
                    slidesToShow: 1,  // Show 1 item
                    slidesToScroll: 1, // Scroll 1 item
                    infinite: true,
                    dots: false,
                }
            }
        ]
    };

    var settingsBottom = {
        dots: false,
        infinite: true,
        speed: 2500,
        slidesToShow: 3.2,
        centerMode: true,
        centerPadding: "0px",
        slidesToScroll: 4,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,  // Tablets and small laptops
                settings: {
                    slidesToShow: 3.4,  // Show 3 items
                    slidesToScroll: 2, // Scroll 3 items
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 768,   // Mobile landscape and small tablets
                settings: {
                    slidesToShow: 2,  // Show 2 items
                    slidesToScroll: 1, // Scroll 2 items
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 480,   // Mobile portrait
                settings: {
                    slidesToShow: 1,  // Show 1 item
                    slidesToScroll: 1, // Scroll 1 item
                    infinite: true,
                    dots: false,
                }
            }
        ]
    };


    return (
        <div className="" id="testimonials">

            <div className='max-w-screen-xl mx-auto pt-24'>
                <div className='mx-auto w-full flex justify-center'>
                    <span className='mb-5 flex items-center border border-solid border-[#f5f5f5] rounded-full pr-4'><div className='rounded-full bg-[#8820DE] p-2'><Icon className='' icon="file-icons:shuriken" width="20" height="20" color='#fff' /></div><div className='ml-2 text-[#a7a7a7]'>Testimonios</div></span>
                </div>
                <h2 className='font-bold text-[35px] w-full xl:text-[70px] md:text-[60px] leading-[37px] md:leading-[60px] text-[#222] md:w-[600px] mx-auto text-center'>Lo que piensan de nosotros</h2>
            </div>
            <div className="mt-10 overflow-hidden md:overflow-visible">

                <Slider {...settingsTop}>
                    <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl w-full ">
                        <div>
                            <div className="flex">
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full">
                                            <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Juan Sovero</h3>
                                            <p>Presidente Senior</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={logo} width={60} className="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                        <div>
                            <div className="flex">
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full">
                                            <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Juan Sovero</h3>
                                            <p>Presidente Senior</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={logo} width={60} className="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                        <div>
                            <div className="flex">
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full">
                                            <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Juan Sovero</h3>
                                            <p>Presidente Senior</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={logo} width={60} className="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                        <div>
                            <div className="flex">
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full">
                                            <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Juan Sovero</h3>
                                            <p>Presidente Senior</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={logo} width={60} className="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                        <div>
                            <div className="flex">
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full">
                                            <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Juan Sovero</h3>
                                            <p>Presidente Senior</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={logo} width={60} className="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                        <div>
                            <div className="flex">
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                            </div>
                        </div>
                        <div className="mt-6">
                            <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full">
                                            <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Juan Sovero</h3>
                                            <p>Presidente Senior</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={logo} width={60} className="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
                <div className="hidden md:block">
                    <Slider {...settingsBottom}>
                        <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                            <div>
                                <div className="flex">
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex">
                                    <div className="flex justify-between w-full">
                                        <div className="flex">
                                            <div className="rounded-full">
                                                <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-bold">Juan Sovero</h3>
                                                <p>Presidente Senior</p>
                                            </div>
                                        </div>

                                        <div>
                                        </div>
                                        <Image src={logo} width={60} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                            <div>
                                <div className="flex">
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex">
                                    <div className="flex justify-between w-full">
                                        <div className="flex">
                                            <div className="rounded-full">
                                                <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-bold">Juan Sovero</h3>
                                                <p>Presidente Senior</p>
                                            </div>
                                        </div>

                                        <div>
                                        </div>
                                        <Image src={logo} width={60} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                            <div>
                                <div className="flex">
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex">
                                    <div className="flex justify-between w-full">
                                        <div className="flex">
                                            <div className="rounded-full">
                                                <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-bold">Juan Sovero</h3>
                                                <p>Presidente Senior</p>
                                            </div>
                                        </div>

                                        <div>
                                        </div>
                                        <Image src={logo} width={60} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                            <div>
                                <div className="flex">
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex">
                                    <div className="flex justify-between w-full">
                                        <div className="flex">
                                            <div className="rounded-full">
                                                <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-bold">Juan Sovero</h3>
                                                <p>Presidente Senior</p>
                                            </div>
                                        </div>

                                        <div>
                                        </div>
                                        <Image src={logo} width={60} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                            <div>
                                <div className="flex">
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex">
                                    <div className="flex justify-between w-full">
                                        <div className="flex">
                                            <div className="rounded-full">
                                                <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-bold">Juan Sovero</h3>
                                                <p>Presidente Senior</p>
                                            </div>
                                        </div>

                                        <div>
                                        </div>
                                        <Image src={logo} width={60} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
                            <div>
                                <div className="flex">
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                    <Icon color="#FFAB00" icon="material-symbols:star" width="24" height="24" />
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-[#7B7B7B]">La plataforma ha sido fundamental en nuestro crecimiento. La integración de todas nuestras operaciones en un solo lugar nos permitió optimizar procesos y mejorar la experiencia de nuestros clientes.</p>
                            </div>
                            <div className="mt-10">
                                <div className="flex">
                                    <div className="flex justify-between w-full">
                                        <div className="flex">
                                            <div className="rounded-full">
                                                <Image src={men} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                            </div>
                                            <div className="ml-4">
                                                <h3 className="font-bold">Juan Sovero</h3>
                                                <p>Presidente Senior</p>
                                            </div>
                                        </div>

                                        <div>
                                        </div>
                                        <Image src={logo} width={60} className="" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>

    )
}

export default FeedBacks;