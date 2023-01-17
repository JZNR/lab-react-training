function Boxcolor() {
    // A little different here, is it supposed to be random? I don't know but random is cooler 

    function randomColor() {
        const min = 0
        const max = 255;

        const red = Math.floor(Math.random() * (max - min) + min);
        const green = Math.floor(Math.random() * (max - min) + min);
        const blue = Math.floor(Math.random() * (max - min) + min);

        return `rgb(${red}, ${green}, ${blue})`;;
}

const firstDiv = randomColor();
const secondDiv = randomColor();

return (
    <div className="boxcolor">
        <div style={{
            backgroundColor: firstDiv}}>
       {firstDiv}
        </div>
        <div style={{
            backgroundColor: secondDiv}}>
        {secondDiv}
        </div>
    </div>
)
}

export default Boxcolor;