import type { FieldError } from "react-hook-form"

type InputProps = {
    id: string
    type?: string
    placeholder: string
    rounded: "all" | "top" | "bottom" | "none"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    register: any
    error?: FieldError
}

export function Input({
    id,
    type,
    placeholder,
    rounded = "all",
    register,
    error
}: InputProps) {
     const roundedClass = {
        all: "rounded-lg",
        top: "rounded-t-lg",
        bottom: "rounded-b-lg",
        none: ""
     }[rounded]
    return (
        <input
            type={type}
            id={id}
            {...register(id)}
            className={`block w-full p-5 text-base font-poppins-regular ${roundedClass} focus:outline-none
                ${error
                    ? "border-2 border-red-500 bg-red-100 placeholder-red-400 focus:border-red-500"
                    : `border-2 border-gray-lines-in-white bg-white-shape text-text-complement focus:border-s-purple focus:border-s-4`
                }
            `}
            placeholder={placeholder}/>
    )
}