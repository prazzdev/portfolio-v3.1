export default function HeadingTitle(props) {
    const { text } = props
    return (
        <>
        <h1 className="text-gray-600 font-bold text-[30px] lg:text-[40px] py-1 lg:py-2">
        {text}
        </h1>
        </>
    )
}