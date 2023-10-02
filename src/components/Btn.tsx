import { useEffect, useState } from "react"

export default function Btn(props: { text: string, type?: string, class?: string }) {
    const [className, setClassName] = useState('')
    useEffect(() => {
        switch (props.type) {
            case 'degrad':
                setClassName('rounded-md bg-gradient-to-br from-blue-400 from-10% to-indigo-800 to-90% shadow-lg hover:shadow-cyan-500/50')
                break
            default:
                setClassName('rounded-md bg-slate-600 shadow-lg hover:shadow-cyan-500/50	text-white')
        }
    }, [])

    return <>
        { }
        <button className={`${className} ${props.class}`}>
            {props.text}
        </button>
    </>
}
