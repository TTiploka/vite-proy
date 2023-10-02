export default function Btn(props: { text: string }) {
    return <>
        <button className="basis-1/5 rounded-md bg-slate-600 shadow-lg hover:shadow-cyan-500/50	text-white">
            {props.text}
        </button>
    </>
}
