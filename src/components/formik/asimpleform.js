export default function ASimpleForm() {
    return (
        <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required />
            <input type="sumbit">sumbit</input>
        </form>
    )
}