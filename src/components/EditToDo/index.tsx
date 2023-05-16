import { ChangeEvent, useState } from "react";
import { RiCheckboxFill } from "react-icons/ri";

type Props = {
    name: string;
    id: number;
    setIsEditing: (value: boolean) => void
    onEditToDo: (data: ToDo) => void
};

type ToDo = {
    name: string;
    id: number
}

export function EditToDo({ name, id, setIsEditing, onEditToDo }: Props) {
    const [toDo, setToDo] = useState(name);

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setToDo(event.currentTarget.value);
    }

    async function handleClick() {
        if (onEditToDo) {
            onEditToDo({ name: toDo, id: id })
        }
        setIsEditing(false)
    }

    return (
        <>
            <div className="flex bg-white w-full shadow-[0_3px_3px_gray] pl-[1rem] pr-[1rem] rounded-[0.4rem] h-[3rem] my-[1rem]">
                <input
                    className="grow-[2] border-none focus:outline-none"
                    type="text"
                    onChange={handleChange}
                    placeholder="Ex.: Correr, Estudar"
                    value={toDo}
                    autoFocus
                />
                <button onClick={handleClick}>
                    <RiCheckboxFill className="text-green-200" size={26} />
                </button>
            </div>
        </>
    );
}
