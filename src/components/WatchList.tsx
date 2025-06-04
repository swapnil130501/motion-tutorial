import { useEffect, useRef, useState } from "react";
import WatchCard from "./WatchCard";
import {motion} from 'motion/react';

export default function WatchList() {

    interface Watch {
        name: string;
        brand: string;
        price: string;
        img: string;
        referenceNumber: string;
        description: string;
    }

    const [currentCard, setCurrentCard] = useState<Watch | null>(null);

    const watchData: Watch[] = [
        {
            name: "Bambino",
            brand: "Orient",
            price: "$280",
            img: "src/assets/orient-bambino.webp",
            referenceNumber: "RA-AP0105Y30B",
            description: "With roots back to 1950, Orient has become one of the best value for money watchmakers in the world of mechanical timekeeping. This Japanese brand has served as a gateway into the hobby for millions of enthusiasts by offering exceptional products spanning a variety of styles and even creating their own in-house calibers."
        },
        {
            name: "Khaki Field Murph",
            brand: "Hamilton",
            price: "$945",
            img: "src/assets/hamilton-murph.webp",
            referenceNumber: "H70405730",
            description: "With roots back to 1892, Hamilton Watch Company is a brand with a rich history in its production of military-style watches for the United States army during WWI and WWII. With the brand’s Pulsar and Ventura, it is evident that Hamilton never shied away from pushing the creative limits of watchmaking. Hamilton is also known for its close association with the world of movies, with over 500 major movie appearances and a stunning catalogue of milestone moments on the silver screen. In 1972, the company was purchased by Swatch Group and in 2003 Hamilton moved its headquarters and production facilities to the heart of watchmaking in Biel, Switzerland."
        },
        {
            name: "Tsuyosa",
            brand: "Citizen",
            price: "$337.50",
            img: "src/assets/citizen-tsuyosa.webp",
            referenceNumber: "NJ0200-50L",
            description: "Founded in 1918, Citizen is one of the largest manufacturers of watches in the world and also one of few brands with a vertically-integrated production model, designing and manufacturing every component of all of the watches in Citizen’s vast offering. While perhaps best known for inexpensive, solar-powered watches from the Eco-Drive collection, Citizen also has a powerful enthusiast following largely associated with the Promaster collection of divers and tool watches best exemplified by the Aqualand diver’s watch."
        },
        {
            name: "Alpanist",
            brand: "Seiko",
            price: "$675",
            img: "src/assets/seiko-alpanist.webp",
            referenceNumber: "SPB121",
            description: "Seiko was founded in 1881 in Tokyo, Japan and has grown to become one of the largest watch companies in the world. Today, Seiko’s diverse collection presents impressive value backed by some of the most iconic designs in watch history. Perhaps best known for its sporty Prospex collection, Seiko’s legend also stems from the attainable Seiko 5 Sports collection as well as the refined Presage range of well-finished dress watches."
        },
        {
            name: "PRX Powermatic 80",
            brand: "Tissot",
            price: "$775",
            img: "src/assets/tissot-prx80.webp",
            referenceNumber: "T1374071135100",
            description: "Founded in 1853, Tissot is a Swiss manufacturer based in Le Locle and are known for their well-built timepieces that span a variety of styles. With the help of models such as the Le Locle, Gentleman, Seastar, T-Touch, and their many heritage pieces, they are one of the largest producers of Swiss-Made timepieces in the world."
        },
        {
            name: "Speedmaster",
            brand: "Omega",
            price: "$775",
            img: "src/assets/omega-speedmaster.webp",
            referenceNumber: "T1374071135100",
            description: "Founded in 1853, Tissot is a Swiss manufacturer based in Le Locle and are known for their well-built timepieces that span a variety of styles. With the help of models such as the Le Locle, Gentleman, Seastar, T-Touch, and their many heritage pieces, they are one of the largest producers of Swiss-Made timepieces in the world."
        },
        {
            name: "Khaki Field Mechanical",
            brand: "Hamilton",
            price: "$775",
            img: "src/assets/hamilton-field.webp",
            referenceNumber: "T1374071135100",
            description: "Founded in 1853, Tissot is a Swiss manufacturer based in Le Locle and are known for their well-built timepieces that span a variety of styles. With the help of models such as the Le Locle, Gentleman, Seastar, T-Touch, and their many heritage pieces, they are one of the largest producers of Swiss-Made timepieces in the world."
        },
        {
            name: "Presage Cocktail Time",
            brand: "Seiko",
            price: "$775",
            img: "src/assets/seiko-persage.webp",
            referenceNumber: "T1374071135100",
            description: "Founded in 1853, Tissot is a Swiss manufacturer based in Le Locle and are known for their well-built timepieces that span a variety of styles. With the help of models such as the Le Locle, Gentleman, Seastar, T-Touch, and their many heritage pieces, they are one of the largest producers of Swiss-Made timepieces in the world."
        },
        {
            name: "Seamaster Aqua Terra",
            brand: "Omega",
            price: "$775",
            img: "src/assets/omega-seamaster.webp",
            referenceNumber: "T1374071135100",
            description: "Founded in 1853, Tissot is a Swiss manufacturer based in Le Locle and are known for their well-built timepieces that span a variety of styles. With the help of models such as the Le Locle, Gentleman, Seastar, T-Touch, and their many heritage pieces, they are one of the largest producers of Swiss-Made timepieces in the world."
        },
        {
            name: "SBGA211 Snowflake",
            brand: "Grand Seiko",
            price: "$6600",
            img: "src/assets/seiko-SBGA211.webp",
            referenceNumber: "T1374071135100",
            description: "Founded in 1853, Tissot is a Swiss manufacturer based in Le Locle and are known for their well-built timepieces that span a variety of styles. With the help of models such as the Le Locle, Gentleman, Seastar, T-Touch, and their many heritage pieces, they are one of the largest producers of Swiss-Made timepieces in the world."
        }
    ];

    return (
        <div 
       
        
        className="p-4 bg-neutral-100 min-h-screen relative">
            {currentCard && <div className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm"></div>}
            {currentCard && <div className="fixed inset-0 z-20 bg-white h-[600px] w-72 rounded-2xl border border-neutral-200 p-4 m-auto">
                <div className="rounded-xl bg-gray-100 mb-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                    <img
                        className="h-64 w-64 object-cover rounded-2xl"
                        src={currentCard.img}
                        alt={currentCard.name}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 mb-4">
                    <h2 className="text-2xl font-bold text-neutral-800 text-center gap-2">
                        {currentCard.name}
                    </h2>

                    <h2 className="text-lg font-bold text-md">{currentCard.brand}</h2>
                </div>
                <div className="overflow-y-auto h-40">
                    <p className="text-sm text-neutral-500">
                        {currentCard.description}
                    </p>
                </div>

            </div>}
            <div className="flex p-4 flex-wrap gap-4 justify-center items-center">
                {watchData.map((watch) => (
                    <WatchCard
                        key={watch.referenceNumber}
                        data={watch}
                        onClickHandler={() => setCurrentCard(watch)}
                    />
                ))}
            </div>
        </div>
    )
}