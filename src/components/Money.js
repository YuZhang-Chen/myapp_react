const Hello = (pros) => {
    return (
        <div>
            <h1>嗨，{pros.name}</h1>
            <p>(固定不動的值)</p>
        </div>
    )
}

const Accept = (pros) => {
    return (
        <div>
            <h1>你現在有{pros.money}元</h1>
            <p></p>
        </div>
    )
}

export { Hello, Accept };