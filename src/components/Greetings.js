function Greetings(props) {
    let l = props.lang
    let c = props.children

    switch(l) {
        case "de":
            l = `hallo, ${c}`;
            break;
        case "en":
            l = `hello, ${c}`;
            break;
        case "fr":
            l = `bonjour, ${c}`;
            break;
        case "es":
            l = `holla, ${c}`
            break;
    }
    return (
         <div className="bugged-greetings-boxes">
            <p>{l}</p>
         </div>
    )
}

export default Greetings;