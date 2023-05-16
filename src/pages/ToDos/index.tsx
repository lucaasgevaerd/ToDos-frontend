import { useCallback, useEffect, useState } from "react";
import { ToDo } from "../../components/ToDo";
import { CreateToDo } from "../../components/CreateToDo";

type ToDo = {
    name: string;
    id: number;
};

export function ToDos() {
    const [toDos, setToDos] = useState<ToDo[]>([]);

    useEffect(() => {
        getToDos();
    }, []);

    const getToDos = useCallback(async () => {
        const response = await fetch('http://localhost:3000/todos', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const data = await response.json();
        setToDos(data);
    }, []);

    const handleCreateToDo = useCallback(async (name: string) => {
        try {
            await fetch(`http://localhost:3000/todo`, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: name })
            })
        } catch (error) {
            console.log(error)
        }
        getToDos();
    }, []);

    const handleEditToDo = useCallback(async (editedToDo: ToDo) => {
        try {
            await fetch(`http://localhost:3000/todos/${editedToDo.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name: editedToDo.name, id: editedToDo.id })
            });

            // Atualiza a lista de ToDos com o ToDo editado e mantém a ordem original
            setToDos((prevToDos) =>
                prevToDos.map((toDo) => (toDo.id === editedToDo.id ? editedToDo : toDo))
            );
        } catch (error) {
            console.log(error);
        }
    }, []);


    const handleDeleteToDo = useCallback(async (deletedToDoId: number) => {
        try {
            await fetch(`http://localhost:3000/todos/${deletedToDoId}`, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                },
            })
        } catch (error) {
            console.log(error)
        }
        getToDos();
    }, []);

    return (
        <main className="flex flex-col bg-sky-800 w-full min-h-[100vh] items-center">
            <CreateToDo onCreateToDo={handleCreateToDo} />
            <div className="h-[20rem] w-full overflow-auto mt-[2rem]">
                {toDos.map((toDo: ToDo) => (
                    <ToDo
                        name={toDo.name}
                        id={toDo.id}
                        key={toDo.id}
                        onEditToDo={handleEditToDo}
                        onDeleteToDo={handleDeleteToDo}
                    />
                ))}
            </div>
        </main>
    );
}
