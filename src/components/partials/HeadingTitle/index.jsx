export default function HeadingTitle(props) {
    const { text } = props
    return (
        <>
        <h1 className="font-bold text-[40px] py-2">
        {text}
        </h1>
        </>
    )
}