
interface InputAuthenticationProps {
    label: string
    value: any
    required?: boolean
    type?  : 'text' | 'email' | 'password'
    notRender?: boolean
    valueUpdate: (vUpdate: any) => void
}

export default function InputAuthentication(props: InputAuthenticationProps) {
    
    return props.notRender ? null : (
        <div className={`flex flex-col mt-4`}>
            <label>{props.label}</label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                onChange={e => props.valueUpdate?.(e.target.value)}
                required={props.required}
                className={`
                    px-3 py-3 rounded-lg bg-gray-200 mt-2
                    border focus:border-blue-500 focus:bg-white
                    focus:outline-none
                `}
            ></input>
        </div>
    )
}