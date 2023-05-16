import { AiFillDelete } from 'react-icons/ai'
import { RiEdit2Fill } from 'react-icons/ri'
import { EditToDo } from '../EditToDo';
import { useState } from 'react';

type Props = {
    name: string;
    id: number;
    onEditToDo?: (data: ToDo) => void
    onDeleteToDo?: (id: number) => void
}

type ToDo = {
    name: string;
    id: number;
};

export function ToDo({ name, id, onEditToDo, onDeleteToDo }: Props) {
    const [isEditing, setIsEditing] = useState<boolean>(false)

    function handleEdit() {
        setIsEditing(true);
    }

    return (
        <>
            {isEditing ? (
                <EditToDo name={name} id={id} setIsEditing={setIsEditing} onEditToDo={(data: ToDo) => onEditToDo && onEditToDo(data)} />
            ) : (
                <div className="flex items-center justify-between w-full h-[3rem] bg-white shadow-[0_3px_3px_gray] my-[1rem] p-[1rem] rounded-[0.4rem]">
                    <span>{name}</span>
                    <div>
                        <button className='mr-[1rem]' onClick={handleEdit}>
                            <RiEdit2Fill size={26} className='text-green-300' />
                        </button>
                        <button onClick={() => onDeleteToDo && onDeleteToDo(id)}>
                            <AiFillDelete size={26} className='text-red' />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}
