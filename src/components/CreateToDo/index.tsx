import { ChangeEvent, useState } from "react";
import { RiAddBoxFill } from "react-icons/ri";

type Props = {
    onCreateToDo?: (name: string) => void
}

export function CreateToDo({ onCreateToDo }: Props) {
    const [name, setName] = useState<string>("");

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.currentTarget.value);
    }

    return (
        <>
            <div className="flex bg-white w-full shadow-[0_3px_3px_gray] pl-[0.8rem] pr-[0.4rem] rounded-[0.4rem] h-[3rem]">
                <input
                    className="grow-[2] border-none focus:outline-none"
                    type="text"
                    defaultValue={name}
                    onChange={handleChange}
                    placeholder="Ex.: Correr, Estudar"
                />
                <button onClick={() => onCreateToDo && onCreateToDo(name)}>
                    <RiAddBoxFill className="text-green-200" size={38} />
                </button>
            </div>
        </>
    );
}
