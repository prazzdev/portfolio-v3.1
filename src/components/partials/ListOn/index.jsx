export default function ListOn(props) {
    const { title, sub1, sub2, date } = props
    return (
        <>
        <h3 className="text-xl font-extrabold tracking-wide mb-2">{title}</h3>
        <h3 className="text-xl font-semibold tracking-wide">{sub1}</h3>
        <h3 className="text-xl font-semibold tracking-wide">{sub2}</h3>
        <time className="text-xs tracking-wide mt-2 uppercase dark:text-gray-400">{date}</time>
        </>
    )
}