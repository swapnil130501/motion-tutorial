import { FaTag } from "react-icons/fa";
import { motion } from 'motion/react';

interface Watch {
    name: string;
    brand: string;
    price: string;
    img: string;
    referenceNumber: string;
    description: string;
}

export default function WatchCard({ data, onClickHandler }: { data: Watch; onClickHandler: () => void }) {
    return (
        <motion.div 
            layoutId={`card-${data.referenceNumber}`}
            onClick={onClickHandler} 
            className="flex flex-col items-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-4 w-auto h-auto cursor-pointer gap-2">

            <div className="relative h-64 w-64 rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <motion.img
                    src={data.img}
                    alt={data.name}
                    className="h-full w-full object-cover rounded-xl"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                />
                <span className="absolute top-2 left-2 bg-neutral-800 text-white text-xs font-semibold px-2 py-1 rounded">
                    {data.brand}
                </span>
            </div>

            <div className="flex flex-col items-center p-3 gap-1 w-full text-center">
                <h2 className="text-lg font-bold text-gray-900">{data.name}</h2>
                <p className="text-sm text-gray-500">{data.referenceNumber}</p>

                <div className="text-emerald-600 font-bold text-base flex items-center gap-1">
                <FaTag className="text-emerald-500" />
                {data.price}
                </div>
            </div>
        </motion.div>
    );
}