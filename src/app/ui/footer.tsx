import Image from "next/image";
import logo from '../../../public/assets/svg/logo.svg';

const Footer = () => {
    return (
        <div className="bg-[#222] xl:h-[520px] md:h-[440px] 2xl:h-[600px] swc w-full mt-0 md:mt-56 relative">
            <div className="
          md:absolute 
          relative
          top-0
          md:top-[-100px] 
          left-0
          w-full
          md:left-1/2 
          translate-x-0
          md:-translate-x-1/2         
          md:w-[78%]      
          2xl:w-9/12      
          p-10
          rounded-none
          md:rounded-2xl
          bg-transparent
          md:bg-gradient-to-r 
          from-[#8417E0] 
          via-[#8F2CE2] 
          to-[#8215DF]
        "
            >
                <div className="flex justify-center md:justify-between items-center md:flex-nowrap flex-wrap">
                    <h4 className="text-[#fff] xl:text-4xl font-bold md:text-3xl text-2xl mb-5 md:mb-5">¿Estas listo?</h4>
                    <div className="md:flex items-center">
                        <input type="text" placeholder="Aquí coloca tu correo" className="w-full bg-transparent placeholder:pl-0 pl-5 px-2 md:px-10 md:py-3 py-3 mr-5 md:mr-10 rounded-full border border-opacity-10 outline-none border-solid border-[#fff] md:bg-[#8630E0] text-[#fff] placeholder:text-[#fff]" />
                        <button className="md:bg-[#fff] w-full mt-5 md:mt-0 text-[#fff] bg:transparent border-opacity-35 border border-solid border-[#fff]  md:text-[#8F2CE2] px-6 md:px-10 py-3 md:py-3 rounded-full">Solicitar demo</button>
                    </div>
                </div>
                <div className="flex md:justify-between items-end mt-10 justify-center mb-10 md:mb-0">
                    <Image src={logo} width={400} height={400} className="relative left w-3/12" alt="logo" />
                    <p className="text-[#fff] md:text-[18px] w-[300px] relative md:top-[-50px] text-[13px] hidden md:block">Soluciones digitales eficientes para impulsar tu crecimiento.</p>
                </div>
                <hr className="opacity-15" />
                <div className="justify-between items-center mt-10 flex-wrap md:flex-nowrap text-center hidden md:flex">
                    <h3 className="text-[#fff] opacity-65">Soluciones</h3>
                    <h3 className="text-[#fff] opacity-65">Por que nosotros ?</h3>
                    <h3 className="text-[#fff] opacity-65">Recursos</h3>
                    <h3 className="text-[#fff] opacity-65">Compañia</h3>
                    <h3 className="text-[#fff] opacity-65">Soporte</h3>
                </div>
                <div className="text-center md:text-left">
                    <p className="mt-10 opacity-95 text-[#fff] text-[14px] md:text-[18px]">© 2025 XCode.Inc .Terminos y Condiciones</p>
                </div>
            </div>

        </div>
    )
}

export default Footer;