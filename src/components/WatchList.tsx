import { useEffect, useRef, useState } from "react";
import WatchCard from "./WatchCard";

const useOutsideClick = (callback: () => void) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        }

        document.addEventListener("click", handleClick);

        return () => {
            document.removeEventListener("click", handleClick);
        }
    }, [callback])

    return ref;
}

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
            name: "Submariner Date",
            brand: "Rolex",
            price: "$10,250",
            img: "src/assets/rolex.jpg",
            referenceNumber: "126610LN",
            description: "The Rolex Submariner Date is a legendary diver’s watch known for its robustness, rotating bezel, and timeless design. A symbol of underwater exploration and adventure."
        },
        {
            name: "Royal Oak Selfwinding",
            brand: "Audemars Piguet",
            price: "$33,800",
            img: "src/assets/ap.jpg",
            referenceNumber: "15500ST.OO.1220ST.04",
            description: "Audemars Piguet’s Royal Oak blends sport and luxury with its signature octagonal bezel and integrated bracelet. A modern icon of haute horlogerie."
        },
        {
            name: "Speedmaster Moonwatch",
            brand: "Omega",
            price: "$6,600",
            img: "src/assets/omega.jpg",
            referenceNumber: "310.30.42.50.01.001",
            description: "The Omega Speedmaster Moonwatch is famed for being the first watch worn on the moon. A chronograph with deep space heritage and precision engineering."
        },
        {
            name: "Nautilus 5711",
            brand: "Patek Philippe",
            price: "$35,000",
            img: "src/assets/nautilus.jpg",
            referenceNumber: "5711/1A-010",
            description: "The Patek Philippe Nautilus 5711 is one of the most sought-after watches in the world. Designed by Gérald Genta, it’s known for its porthole-style case and horizontal embossed dial."
        },
        {
            name: "Big Bang Unico",
            brand: "Hublot",
            price: "$21,000",
            img: "src/assets/big-bang-unico.png",
            referenceNumber: "441.OM.1180.RX",
            description: "The Hublot Big Bang Unico combines bold design with innovative materials. Known for its skeleton dial and industrial aesthetic, it embodies modern watchmaking."
        }
    ];

    const ref = useOutsideClick(() => setCurrentCard(null));
    return (
        <div className="p-4 bg-neutral-100 min-h-screen relative">
            {currentCard && <div className="fixed inset-0 z-10 h-full w-full bg-black/50 backdrop-blur-sm"></div>}
            {currentCard && <div ref={ref}  className="h-[500px] fixed inset-0 z-20 bg-white w-72 rounded-2xl border border-neutral-200 p-4 m-auto">
                <div className="rounded-xl bg-gray-100 mb-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                    <img
                        className="h-60 w-72 object-cover aspect-square rounded-2xl"
                        src={currentCard.img}
                        alt={currentCard.name}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-2 ">
                    <h2 className="text-2xl font-bold text-neutral-800 text-center gap-2">
                        {currentCard.name}
                    </h2>

                    <h2 className="text-lg font-bold text-md">{currentCard.brand}</h2>
                </div>
                <div className=" h-20 overflow-auto py-4">

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