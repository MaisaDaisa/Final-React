type Props = {
    id: string;
    name: string;
    pokeElement: string[];
};

const Card: React.FC<Props> = ({ id, name, pokeElement }) => {
    return (
        <div className="border-primary rounded-2xl border p-4 shadow-md">
            <img src="" alt="" className="-top-20 size-32" />
            <div className="flex flex-col gap-1">
                <p className="font-bold">№ ${id}</p>
                <h3 className="text-text text-2xl font-extrabold">${name}</h3>
                <div className="pokelement flex items-center justify-center gap-2">
                    {pokeElement.map((el) => el)}
                </div>
            </div>
        </div>
    );
};

export default Card;
