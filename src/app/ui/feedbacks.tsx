"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import Slider from "react-slick";
import men from '../../../public/assets/men.webp'
import Image from "next/image";
import logo from '../../../public/assets/logo.png'
import injoyplan from '../../../public/assets/svg/logogrande.svg';
import tv from '../../../public/assets/svg/ronald.svg';
import logotv from '../../../public/assets/svg/logotv.svg';

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
                    <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl w-full">
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
                            <p className="text-[#7B7B7B]">Son unos capos  !!!, ya había trabajado anteriormente y compartido experiencia en hacer proyectos juntos en una empresa, es por eso que decidi contratar los servicios por que se qué quería hacer una página como INJOYPLAN a mi medida y a mi gusto, ha salido como he querido,gracias por la paciencia y gracias al equipo de X Code, recomendadímo, muchos exitos y gracias nuevamente por todo.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full w-[60px] h-[60px]">
                                            <Image className="border border-solid h-full rounded-full object-cover" width={60} height={60} src={"https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/462242057_2934936513320237_8170183476902356076_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_eui2=AeHdiigIxFcYVffYddJvY6Eyf506Vh81n_5_nTpWHzWf_qMnxi0Y0eR4qNn404lcOzPrvrGHhG0lMPmyHXKLkPWz&_nc_ohc=BjxHOx7pXucQ7kNvgG51Y2B&_nc_oc=AdjpCMy3AyQxt43tnZQqxDhCYRhTRuCUDxngTpBH_ULgBoGB-H223TE5kt-PDBPnvpKqzRZ2uF8Xe_DoS7hdlo1e&_nc_zt=23&_nc_ht=scontent.faqp1-1.fna&_nc_gid=AjnVOEaZxUcREpGAR3pKjpC&oh=00_AYAOxP9O0AP0vX9ZshbQZ1Vevze7e0r9xHg1HZ8xvqGgrg&oe=6794AD7A"}  alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Juan Saavedra</h3>
                                            <p>CO de Injoyplan</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={injoyplan} width={50} className="" alt="" />
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
                            <p className="text-[#7B7B7B]">Gracias al excelente trabajo, hemos logrado transmitir la esencia de Pamolsa de manera clara y atractiva. La nueva plataforma no solo refleja nuestros valores de calidad e innovación, sino que también ha mejorado la experiencia de nuestros clientes al facilitar la comunicación con nuestros productos. Recomiendo encarecidamente sus servicios a cualquier empresa que busque potenciar su presencia digital.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                    <div className="rounded-full w-[60px] h-[60px]">
                                            <Image className="border border-solid h-full rounded-full object-cover" width={60} height={60} src={"https://gestion.pe/resizer/v2/KMKHVHVXSZAR5KBPXREY5HAED4.jpg?auth=3d30b333a6d2f3ecccc4a19545f67f6d05b21fb9345eca633f08aec597ca2ea7&width=980&height=528&quality=75&smart=true"}  alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Ricardo Echagaray</h3>
                                            <p>Vice Presidente de Pamolsa</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={"https://s3.amazonaws.com/media.greatplacetowork.com/peru/best-industries-in-peru/2021/pamolsa/logo.jpg"} width={100}  height={30} className="h-[40px]" alt="" />
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
                            <p className="text-[#7B7B7B]">Suizasoft marcó un antes y un después en nuestros procesos de laboratorio. La dedicación demostrada en cada etapa del desarrollo. Gracias a su enfoque innovador, ahora contamos con una plataforma estable y fácil de usar que ha mejorado significativamente la eficiencia de nuestro equipo. Sin duda, recomendaría sus servicios a cualquier empresa que busque soluciones tecnológicas de alta calidad.</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full">
                                            <Image src={"https://mujeresejecutivas.pe/wp-content/uploads/2021/12/claudia-gianoli-2.jpg"} width={60} className="border border-solid rounded-full" height={60} alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Dra. Gianolli Carolina </h3>
                                            <p>Gerente de Suizalab</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src="https://play-lh.googleusercontent.com/F45luWzRBzaK0XGaV_w1JHenvPwzXyow5jABqWF33NqNfH8KS9L5scCTXNmRRHtM4_I" width={50} height={50} className="h-[50px] w-[50px] rounded" alt="" />
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
                            <p className="text-[#7B7B7B]">Necesitaba una presencia online para llegar a más clientes y mostrar mis servicios de reparación y mantenimiento de televisores de manera profesional. El equipo me creó una landing page sencilla pero muy efectiva, que refleja mi trabajo y experiencia. Desde que la puse en marcha, he recibido más consultas y me ha ayudado a proyectar confianza ante mis clientes potenciales. ¡Recomiendo sus servicios sin dudarlo!</p>
                        </div>
                        <div className="mt-10">
                            <div className="flex">
                                <div className="flex justify-between w-full">
                                    <div className="flex">
                                        <div className="rounded-full">
                                            <Image src={"https://scontent.faqp1-1.fna.fbcdn.net/v/t39.30808-6/464696910_8547407911981070_556664914428694344_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFhpx65OJ885QZpeov7xof1vn47jXv4ZIS-fjuNe_hkhHTK8Qdj_jZk1bdxUZH9anT4pnn5PsIf9tS8fpIRfr0o&_nc_ohc=t0nZyHJIIV4Q7kNvgGb1PsU&_nc_oc=AdigtrupKkUhzLxCFLrHslp7uxmGo59dXnXRIAIvIHs_n32QSAbcLHV8UHfozhtxBhxQlyf4psY9G8S1egdiDMiU&_nc_zt=23&_nc_ht=scontent.faqp1-1.fna&_nc_gid=AuCTiZQi0W8lEtwWseOZc92&oh=00_AYDMRUYHTXBQ3FA9ohn42hI-zZqKpqTQRYLs_Dxym5fD6A&oe=6794A531"} width={60} className="border border-solid rounded-full h-[56px] object-cover" height={60} alt="Imagen" />
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="font-bold">Ronald Munares</h3>
                                            <p>Senior Tecnico de televisión</p>
                                        </div>
                                    </div>

                                    <div>
                                    </div>
                                    <Image src={logotv} width={60} className="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
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
                    </div> */}
                    {/* <div className="border border-solid border-[#ddd] p-4 ml-4 mr-4 rounded-xl">
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
                    </div> */}
                </Slider>
                <div className="hidden">
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