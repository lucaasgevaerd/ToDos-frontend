import { useCallback } from 'react';
import { CreateToDo } from '../../components/CreateToDo';
import { useLocation, useNavigate } from 'react-router-dom';

export function Home() {
    const navigate = useNavigate()
    const location = useLocation()
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
        if (location.pathname !== '/todos') {
            navigate('/todos')
        }
    }, []);
    return (
        <main className="flex flex-col bg-dark-100 w-full min-h-[100vh] bg-[url('/src/assets/images/background.jpg')] bg-no-repeat bg-cover bg-center-center px-[2rem]">
            <section className="flex flex-col w-full min-h-[100vh] justify-center">
                <h1 className="w-full text-center text-white mb-[2rem]">O que fazer hoje?</h1>
                <CreateToDo onCreateToDo={handleCreateToDo} />
            </section>
        </main>
    )
}