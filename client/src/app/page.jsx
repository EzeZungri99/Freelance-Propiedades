'use client';
import Image from 'next/image';
import Carrousel from './Components/carrousel';
import CardConteiner from './Components/CardsConteiner/CardsConteiner';
import axios from "axios"
import { ThemeProvider } from '@material-tailwind/react';
import Testimonials from "./Components/Testimonials/testimonials";
import SubirArchivo from "./subirArchivo/subirArchivo";
import ContactHome from "../app/Components/ContactHome/ContactHome";
import SoldProps from "../app/Components/soldProps";

export default function Home() {
  const images = [
    'https://st.depositphotos.com/1041088/1389/i/600/depositphotos_13894671-stock-photo-american-beige-luxury-large-house.jpg',
    'https://i.blogs.es/c68014/casa-3d/840_560.jpeg',
    // Agrega más imágenes según sea necesario
    ,
  ];

  return (
    <div>
      <ThemeProvider>

        <Carrousel />
        {/* <SubirArchivo/> */}
        <CardConteiner />
        <Testimonials/>
        <ContactHome/>
        <SoldProps/>

      </ThemeProvider>
    </div>
  );
}
