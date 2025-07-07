import React from "react";

//include images into your bundle
import Narvbar from "./Narvbar";
import { Jumbotron } from "./Jumbotron";
import { Card } from "./Card";
import {Footer } from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Narvbar />
			<Jumbotron />
			<div className="containerCard row container gap-2 justify-content-center my-3 mx-auto p-0 ">
				
				<Card
					background = " #800080 "
					titulo="El sultanato del muro de Hierro"
					parrafo="El Sultanato del muro de Hierro es una facción destacada en el universo de Trench Crusade, caracterizada por su rica historia y tradiciones militares. Protegidos por la profética Gran Muralla de Hierro, los habitantes del Sultanato han reunido a las civilizaciones islámicas para defenderse de las invasiones demoníacas. Su ejército combina tecnología avanzada con prácticas alquímicas ancestrales, formando una fuerza formidable en el campo de batalla."
					urlImage="https://cdn.v2.tiendanegocio.com/gallery/19477/img_19477_194812f5120.png?class=sm"
				/>
			
				<Card
					background = "rgb(14, 43, 31) "
					titulo="Nueva Antioquía"
					parrafo="La facción de New Antioch encarna la fortaleza y la fe de una ciudad resurgida. Con un enfoque en tácticas militares disciplinadas y tecnología avanzada, sus fuerzas están listas para enfrentar cualquier amenaza, ya sea demoníaca o humana."
					urlImage="https://cdn.v2.tiendanegocio.com/gallery/19477/img_19477_19418c56bf7.jpeg"
				/>
				
				<Card
					background = "rgb(36, 75, 5) "
					titulo="Peregrinos de las Trincheras"
					parrafo="Los Peregrinos de Trinchera representan el fervor religioso llevado al extremo, compuesto por hombres y mujeres impulsados por una fe inquebrantable. A pesar de su falta de entrenamiento militar formal, su devoción los convierte en una fuerza temible contra las hordas infernales."
					urlImage="https://cdn.v2.tiendanegocio.com/gallery/19477/img_19477_19403fee72d.png"
				/>
				
				<Card
					background = "rgb(63, 14, 12) "
					titulo="Corte de la Serpiente de Siete Cabezas"
					parrafo="El Culto de la Serpiente de Siete Cabezas es un grupo de servidores infernales dedicados a traer caos y destrucción. Sus filas combinan humanos corrompidos y horrores infernales, luchando con una mezcla de magia oscura, fuerza bruta y tácticas despiadadas."
					urlImage="https://cdn.v2.tiendanegocio.com/gallery/19477/img_19477_19419c9b5dd.jpeg"
				/>
			</div>
			<Footer/>
		</>
	);
};

export default Home;