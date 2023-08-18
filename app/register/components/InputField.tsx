type Props = {
    errorType: string
    error: string | undefined,
    inputName: string,
    inputValue: string,
    inputType: string,
    onChange(event: any):void
}

export default function InputField(props:Props) {

    return (
        <input className={`w-full
                                bg-transparent
                                text-gray-600
                                dark:text-white
                                rounded-md
                                border
                                px-3
                                py-2
                                text-sm
                                placeholder-gray-600
                                invalid:border-red-500
                                dark:placeholder-gray-300
                                ${props.error === props.errorType ? "border-red-500" : "dark:border-gray-700 border-gray-300"}
                                `}

               type={props.inputType}
               id={props.inputName}
               name={props.inputName}
               value={props.inputValue}
               onChange={props.onChange}
               placeholder={props.inputName}
               maxLength={50}
        />

    )

}