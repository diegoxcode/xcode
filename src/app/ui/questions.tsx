"use client"
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

const Questions = () => {

    const faqData = [
        {
            id: "001",
            question: "¿Qué servicios ofrecen en su plataforma?",
            answer:
                "Proporcionamos soluciones a medida en desarrollo de páginas web, landing pages, creación de sistemas personalizados y gestión de contenidos."
        },
        {
            id: "002",
            question: "¿Cómo mejoran la eficiencia de mi negocio?",
            answer:
                "Nuestras soluciones automatizan procesos, optimizan flujos de trabajo y unifican la información, reduciendo tiempos y facilitando la toma de decisiones."
        },
        {
            id: "003",
            question: "¿Qué tipo de soporte brindan?",
            answer:
                "Ofrecemos soporte técnico continuo vía correo electrónico, chat y llamadas programadas."
        },
        {
            id: "004",
            question: "¿Es segura es la información que manejo en la plataforma?",
            answer:
                "Nos tomamos muy en serio la seguridad de tus datos. Implementamos cifrado de extremo a extremo, protocolos HTTPS y copias de seguridad periódicas para garantizar la integridad y confidencialidad de tu información."
        },
        {
            id: "005",
            question: "¿Pueden integrarse con sistemas o plataformas existentes?",
            answer:
                "Sí, nuestras soluciones se diseñan para ser fácilmente integrables con otros sistemas. Si ya cuentas con CRM, ERP o cualquier plataforma de terceros, podemos crear conectores o APIs para sincronizar toda la información sin fricciones."
        },
        // Agrega más preguntas aquí
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    // Función que maneja el toggle de cada pregunta
    const handleToggle = (index : any) => {
      // Si la pregunta clickeada es la misma activa, la cerramos; sino, la abrimos
      setActiveIndex((prevIndex) => (prevIndex === index ? 0 : index));
    };

    return (
        <div id="questions" className='xl:max-w-screen-xl md:max-w-screen-md max-w-screen-sm px-5 mx-auto mt-24 mb-24'>
            <div className='xl:flex md:flex-nowrap items-center'>
                <div>
                    <div className='w-fit'>
                        <span className='mb-5 flex items-center border border-solid border-[#f5f5f5] rounded-full pr-4'><div className='rounded-full bg-[#8820DE] p-2'><Icon className='' icon="file-icons:shuriken" width="20" height="20" color='#fff' /></div><div className='ml-2 text-[#a7a7a7]'>Preguntas</div></span>
                    </div>
                    <h2 className='w-full font-bold xl:text-[70px] text-[35px] md:text-[60px] md:leading-[60px] text-[#222] md:w-[600px] leading-[35px]'>Nuestras preguntas más frecuentes</h2>
                    <p className="text-[#767676] mt-5 md:mt-10 text-[19px] xl:text-[21px] md:text-[20px] md:w-[400px] w-full xl:w-9/12">Descubre las dudas más comunes de nuestros clientes y las respuestas que te ayudarán a conocer mejor nuestras soluciones.</p>
                </div>
                <div>
                    <div className="flex flex-col gap-5 ml-0 xl:ml-10 md:ml-0 md:mt-10 mt-10">
                        {/* Paso 3: Renderizar la lista de preguntas con .map() */}
                        {faqData.map((item, index) => (
                            <div
                                key={item.id}
                                onClick={() => handleToggle(index)}
                                className={`bg-[#F8F8F8] xl:w-[600px] md:w-full p-6 rounded-xl cursor-pointer overflow-hidden ${activeIndex === index ? "h-fit border-2 border-solid border-[#8417E0]" : "h-auto"
                                    } transition-all duration-300`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex">
                                        <span className="text-[#767676] text-[18px] hidden md:block">{item.id}</span>
                                        <label htmlFor="" className="ml-0 md:ml-5 font-[600] md:text-[18px] text-[17px]">
                                            {item.question}
                                        </label>
                                    </div>
                                    {activeIndex === index ? (
                                        <Icon
                                            icon="ic:baseline-minus"
                                            width="24"
                                            height="24"
                                            className="cursor-pointer"
                                        />
                                    ) : (
                                        <Icon
                                            icon="ic:baseline-plus"
                                            width="24"
                                            height="24"
                                            className="cursor-pointer"
                                        />
                                    )}
                                </div>
                                {/* Solo mostramos la respuesta si está activa */}
                                {activeIndex === index && (
                                    <p className="mt-4 text-[#4d4d4d] pl-0 md:pl-12">{item.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Questions;