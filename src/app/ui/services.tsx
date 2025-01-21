import { Icon } from "@iconify/react/dist/iconify.js";

const Services = () => {
    return (
        <div>
            <div id="service" className='px-5 md:pt-10 pt-0 md:px-0 block md:flex xl:max-w-screen-xl mx-auto md:max-w-screen-md xl:flex-nowrap md:flex-wrap mt-20 xl:mt-40 2xl:mt-10 justify-between items-end relative'>
                <div>
                    <span className='relative w-fit flex mt-10 md:mt-0 mb-5 items-center border border-solid border-[#f5f5f5] rounded-full pr-4'><div className='rounded-full bg-[#8820DE] p-2'><Icon className='' icon="file-icons:shuriken" width="20" height="20" color='#fff' /></div><div className='ml-2 text-[#a7a7a7]'>Soluciones de impacto</div></span>
                    <h4 className='font-bold w-full xl:text-[70px] text-[35px] md:w-[800px] leading-[45px] md:leading-[60px] md:text-[60px]'>Explora lo posible con soluciones digitales a tu medida</h4>
                </div>
                <p className='mt-5  text-[21px] text-[#767676] md:text-[20px] md:mt-5 md:w-[430px] xl:w-[600px] w-full'>Descubre nuestras soluciones diseñadas para impulsar tu marca, acelerar tu crecimiento y dejar huella en el mundo digital.</p>
            </div>
            <div className='px-5 md:px-0 grid xl:grid-cols-3 xl:max-w-screen-xl mx-auto mt-14 md:mt-10 gap-5 md:max-w-screen-md md:grid-cols-1'>
                <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className='bg-[#8820DE] w-fit rounded-full'>
                        <Icon icon="hugeicons:software" width="70" height="70" className='mb-5 p-5' color='#fff' />
                    </div>
                    <h4 className='font-bold text-3xl'>Diseño web profesional</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Crea y administra sitios web impactantes, optimizados para atraer a tu audiencia y convertir visitas en clientes.</p>
                </div>
                <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className='bg-[#8820DE] w-fit rounded-full'>
                        <Icon icon="mdi:web" width="70" height="70" className='mb-5 p-5' color='#fff' />
                    </div>
                    <h4 className='font-bold text-3xl'>Landing Pages Efectivas</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Convierte más visitantes en clientes potenciales con páginas enfocadas en la acción, el marketing y la generación de leads.</p>
                </div>
                <div className='bg-[#FBF9FF] p-8 rounded-3xl'>
                    <div className='bg-[#8820DE] w-fit rounded-full'>
                        <Icon icon="grommet-icons:system" width="70" height="70" className='mb-5 p-5' color='#fff' />
                    </div>
                    <h4 className='font-bold text-3xl'>Sistemas Personalizados</h4>
                    <p className='mt-4 text-[#767676] text-lg'>Ahorra tiempo y costos optimizando tus procesos internos con sistemas en la nube hechos a tu medida.</p>
                </div>
            </div>
        </div>
    )
}

export default Services;