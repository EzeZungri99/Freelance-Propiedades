import Image from "next/image"
export default function Footer(){
return(
<footer className="bg-0,0,0">
    <div className="w-full  mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <Image src="https://flowbite.com/docs/images/logo.svg" 
                width={50}
                height={50}
                className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Sobre Nosotros</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6">Redes Sociales</a>
                </li>
                <li>
                    <a href="#" className="mr-4 hover:underline md:mr-6 ">Licensing</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contactanos</a>
                </li>
            </ul>
        </div>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 md:p-8">Todas las medidas enunciadas son meramente orientativas, las medidas exactas serán las que se expresen en el respectivo título de propiedad de cada inmueble. Todas las fotos, imagenes y videos son meramente ilustrativos y no contractuales. Los precios enunciados son meramente orientativos y no contractuales..</span>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">2023 M - R Propiedades</a>©  .Software Inmobiliario - Tokko Broker</span>
    </div>
</footer>
)
}