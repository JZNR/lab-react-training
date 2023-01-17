function Random(props) {
    const min = props.min;
    const max = props.max;
    function getRandomArbitrary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
}

return (
    <div className="random">
        <p>Random number beetween {min} and {max} = {getRandomArbitrary(min, max)}</p>
    </div>
)
}

export default Random;