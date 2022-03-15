
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
        <div className={`flex flex-col `}>
            <label>{props.label}</label>
            <input
                type={props.type ?? 'text'}
                value={props.value}
                onChange={e => props.valueUpdate?.(e.target.value)}
                required={props.required}
            ></input>
        </div>
    )
}