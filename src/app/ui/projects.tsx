import Image from "next/image";
import software from '../../../public/assets/software.png'
import pamolsa from '../../../public/assets/pamolsa.png'
import injoyplan from '../../../public/assets/injoyplan.png'
import { Icon } from "@iconify/react/dist/iconify.js";

const Projects = () => {
    return (
        <div id="projects">
            <div className='bg-gradient-to-r from-[#8417E0] via-[#8F2CE2] to-[#8215DF] mt-28 pb-24'>
                <div className='xl:max-w-screen-xl md:max-w-screen-md mx-auto relative px-5 md:px-0 text-center md:text-left'>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-5 md:gap-9 items-end'>
                        <div className='md:hidden'>
                            <span className='flex items-center w-fit mx-auto justify-center mt-24 md:mt-0 h-fit border border-solid border-[#f5f5f5] bg-[#8730E0] rounded-full pr-4'><div className='rounded-full bg-[#7931DC] p-2'><Icon className='' icon="file-icons:shuriken" width="20" height="20" color='#fff' /></div><div className='ml-2 text-[#fff]'>Soluciones de impacto</div></span>
                        </div>
                        <div className='l'>
                            <div className='md:block hidden md:mt-24 w-full'>
                                <span className='flex items-center w-fit h-fit border border-solid border-[#f5f5f5] bg-[#8730E0] rounded-full pr-4'><div className='rounded-full bg-[#7931DC] p-2'><Icon className='' icon="file-icons:shuriken" width="20" height="20" color='#fff' /></div><div className='ml-2 text-[#fff]'>Soluciones de impacto</div></span>
                            </div>
                            <h2 className='font-bold text-[45px] xl:mt-4 xl:text-[70px] md:text-[60px] leading-[60px] xl:pt-0 pt-0 md:pt-0 text-[#fff]'>Contruyendo resultados</h2>
                        </div>
                        <p className='md:w-[300px] w-full md:absolute relative md:right-0 md:col-start-3 md:col-end-4 text-[21px] text-[#fff] opacity-60 font-[300]'>Nuestra experiencia se construye con cada proyecto.</p>
                    </div>

                    <div className='pt-12'>
                        <div className='grid mt-10 mb-10 md:mb-0 xl:grid-cols-3 md:grid-cols-2 gap-10 items-center bg-[#fff] px-5 pt-5 md:pb-5 pb-0 rounded-[35px] relative'>
                            <div className=''>
                                <div className='flex items-center'>
                                    <label className="border mr-2 md:mr-0 border-solid border-[#e3e3e3] md:left-0 xl:absolute md:relative md:top-0 xl:top-10 xl:left-10 rounded-full px-4 py-1 text-[#767676]" htmlFor="">001</label>
                                    <span className='xl:absolute md:ml-3 md:relative md:bottom-0 xl:bottom-5 md:left-0 xl:left-10 text-[28px] font-bold'>Software Clínica</span>
                                </div>
                                <p className='md:block xl:hidden text-lg text-[#767676] mt-5 text-left'>Esta solución mejoró la experiencia de enseñanza y aprendizaje, facilitando la gestión de tareas y la comunicación en tiempo real.</p>
                            </div>
                            <div className=''>
                                <Image className='w-full object-cover rounded-4xl border border-solid border-[#e8e8e8] rounded-md' src={software} width={200} height={200} alt='Software' />
                            </div>
                            <div className='md:hidden xl:block'>
                                <p className='text-lg text-[#767676] mt-5 hidden xl:block'>Esta solución mejoró la experiencia de enseñanza y aprendizaje, facilitando la gestión de tareas y la comunicación en tiempo real.</p>
                            </div>
                        </div>
                        <div className='grid mb-10 md:mb-0 xl:grid-cols-3 md:grid-cols-2 gap-10 md:mt-10 items-center bg-[#fff] px-5 pt-5 md:pb-5 rounded-[35px] relative'>
                            <div className=''>
                                <div className='flex items-center'>
                                    <label className="border mr-2 md:mr-0 border-solid border-[#e3e3e3] md:left-0 xl:absolute md:relative md:top-0 xl:top-10 xl:left-10 rounded-full px-4 py-1 text-[#767676]" htmlFor="">002</label>
                                    <span className='xl:absolute md:ml-3 md:relative md:bottom-0 xl:bottom-5 md:left-0 xl:left-10 text-[28px] font-bold'>Pamolsa</span>
                                </div>

                                <p className='md:block xl:hidden text-lg text-[#767676] mt-5  text-left' >Creamos un portal web personalizado para empresas de diversos sectores, orientado a la gestión interna de proyectos, comunicación de equipos y automatización de procesos.</p>

                            </div>
                            <div>
                                <Image className='w-full object-cover rounded-4xl border border-solid border-[#e8e8e8] rounded-md' src={pamolsa} width={200} height={200} alt='Software' />
                            </div>
                            <div className='md:hidden xl:block'>
                                <p className='text-lg text-[#767676] hidden xl:block'>Creamos un portal web personalizado para empresas de diversos sectores, orientado a la gestión interna de proyectos, comunicación de equipos y automatización de procesos.</p>
                            </div>
                        </div>
                        <div className='grid mb-0 md:mb-0 xl:grid-cols-3 md:grid-cols-2 gap-10 md:mt-10 items-center bg-[#fff] px-5 pt-5 md:pb-5 rounded-[35px] relative'>
                            <div className=''>
                                <div className='flex items-center'>
                                    <label className="border mr-2 md:mr-0 border-solid border-[#e3e3e3] md:left-0 xl:absolute md:relative md:top-0 xl:top-10 xl:left-10 rounded-full px-4 py-1 text-[#767676]" htmlFor="">003</label>
                                    <span className='xl:absolute md:ml-3 md:relative md:bottom-0 xl:bottom-5 md:left-0 xl:left-10 text-[28px] font-bold'>Injoyplan</span>
                                </div>
                                <div>
                                    <p className='md:block xl:hidden  text-[#767676] mt-5 text-left'>Desarrollamos una solución integral para fundaciones que necesitaban administrar sus donaciones y campañas de recaudación de manera sencilla y segura.</p>
                                </div>
                            </div>
                            <div>
                                <Image className='w-full object-cover rounded-4xl border border-solid border-[#e8e8e8] rounded-md' src={injoyplan} width={200} height={200} alt='Software' />
                            </div>
                            <div className='md:hidden xl:block'>

                                <p className='text-lg text-[#767676] hidden xl:block'>Desarrollamos una solución integral para fundaciones que necesitaban administrar sus donaciones y campañas de recaudación de manera sencilla y segura.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;