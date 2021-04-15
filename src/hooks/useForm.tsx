import { ChangeEvent, useState } from "react";

export function useForm<T>(initState: T) {
    const [formulario, SetFormulario] = useState<T>(initState);
    const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = target;
        SetFormulario({
            ...formulario,
            [name]: value
        });
    }
    return {
        formulario,
        handleChange,
        ...formulario,
    }
}