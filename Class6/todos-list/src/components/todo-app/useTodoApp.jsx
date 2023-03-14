import axios from "axios";
import { useEffect, useState } from "react";
import useAppContext from "../../AppContext";

export const useTodoApp = () => {
    const {credential, setCredential} = useAppContext();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get()
    })
}