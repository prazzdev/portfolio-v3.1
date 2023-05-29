export default function Footer() {
    const getTheDate = new Date()
    const getYear = getTheDate.getFullYear()
    return (
        <>
        <footer className="fixed bottom-0 right-0 left-0 text-center bg-white py-3">
            copyboth © {getYear} - Made with <span className="text-red-500">❤</span> by prazzdev
        </footer>
        </>
    )
}