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
        <div onClick={onClickHandler} className="flex flex-col items-center bg-white rounded-2xl shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-4 w-auto h-auto cursor-pointer gap-2">
            <div className="h-36 w-36 rounded-xl bg-gray-100 mb-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                <img
                    className="object-cover aspect-square rounded-2xl"
                    src={data.img}
                    alt={data.name}
                />
            </div>

            <div className="flex flex-col items-center p-2 gap-1">
                <h2 className="text-2xl font-bold text-neutral-800 text-center gap-2">
                    {data.name}
                </h2>
                <div className="flex flex-col items-center justify-center gap-2">
                    <h2 className="text-lg font-bold text-md">{data.brand}</h2>
                    <h2 className="text-xs text-neutral-500">{data.referenceNumber}</h2>
                    <h2 className="text-lg font-semibold text-black">{data.price}</h2>
                </div>
            </div>
        </div>
    );
}