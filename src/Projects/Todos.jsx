import { Pencil, Save, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TodoContextProvider, useTodo } from "./TodoContext";

const GenerateTodo = ({ item = {} }) => {
    const { editTodo, deleteTodo, toggleComplete } = useTodo()

    const [isEdit, setIsEdit] = useState(false)
    const [editedValue, setEditedValue] = useState(item?.value || "")

    const handleSaveEdit = () => {
        editTodo(item.id, editedValue)
        setIsEdit(false)
    }


    return (
        <div className={`mt-4 flex gap-2 py-1 px-4 rounded-2xl ${item.isComplete? "bg-green-300":"bg-gray-500"}`}>
            <input
                type="checkbox"
                value={item.isComplete}
                onChange={() => { toggleComplete(item.id) }}
            />
            <input
                type="text"
                className={`ring-0 ring-offset-0 flex-1 bg-transparent text-white ${item?.isComplete ? 'line-through' : ''} ${isEdit ? 'border-1' : ""}`}
                disabled={!isEdit}
                value={editedValue}
                onChange={(e) => setEditedValue(e.target.value)}
            />
            <div className="flex gap-2 items-center ml-auto">
                {isEdit && <button onClick={handleSaveEdit} className="bg-white dark:bg-gray-600 p-2 px-1 rounded-sm">{<Save className="h-4" />}</button>}
                {!isEdit && <button disabled={item.isComplete} onClick={() => setIsEdit(!isEdit)} className="bg-white dark:bg-gray-600 p-2 px-1 rounded-sm">{<Pencil className="h-4" />}</button>}
                <button onClick={() => deleteTodo(item.id)} className="bg-white dark:bg-gray-600 p-2 px-1 rounded-sm"><Trash className="h-4" /></button>
            </div>
        </div>
    )
}

const Todos = () => {
    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState("")

    const addTodo = (newValue) => {
        const newItem = { id: uuidv4(), value: newValue, isComplete: false }
        setTodos((prev) => [newItem, ...prev])
        setNewTodo("")
    }

    const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((item) => item.id !== id));
    }
    const toggleComplete = (id) => {
        setTodos((prev) => prev.map((item) => (item.id === id) ? { ...item, isComplete: !item.isComplete } : item));
    }

    const editTodo = (id, newValue) => {
        setTodos((prev) => prev.map((item) => (item.id === id) ? { ...item, value: newValue } : item))
    }

    useEffect(() => {
        const savedTodos = localStorage.getItem('todos')
        const parsedTodos = JSON.parse(savedTodos)
        if (parsedTodos && parsedTodos.length) {
            setTodos(parsedTodos)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <TodoContextProvider value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }}>
            <div className='page-container justify-center items-center' >
                <div className="backdrop-blur-lg border-2 rounded-lg min-w-[320px] p-4">
                    <h1 className="p-5">Manage your Todos</h1>
                    <div className="max-h-[60vh] overflow-y-auto p-5 pt-1 relative backdrop-blur-md">
                        <div className='input-wrapper sticky top-0 z-10 mt-4'>
                            <input
                                className='py-1 px-2 flex-1 h-full rounded-l-sm rounded-r-none focus:outline-0 light:bg-white'
                                value={newTodo}
                                onChange={(e) => setNewTodo(e.target.value)}
                                placeholder='Todo...'
                            />
                            <button onClick={() => addTodo(newTodo)} disabled={!newTodo} className='bg-green-600 text-white h-full px-2 rounded-r-sm'>
                                Create Todo
                            </button>
                        </div>
                        {todos?.map((item) => (
                            <GenerateTodo key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </div>
        </TodoContextProvider>
    )
}

export default Todos;