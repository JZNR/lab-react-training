function CreditCard(props) {
    const type = props.type
    const expirationMonth = props.expirationMonth
    const expirationYear = props.expirationYear
    const bank = props.bank
    const owner = props.owner
    const bgColor = props.bgColor
    const color = props.color

    let img = "";
    const dot = "•"

    const number = props.number
    const safeNumber = number.slice(12, 16);
    const secretNumbers = dot.repeat(4);
    
    
    function checkCardType() {
        if(type === "Visa") {
            img += "https://e7.pngegg.com/pngimages/594/666/png-clipart-visa-logo-credit-card-debit-card-payment-card-bank-visa-blue-text.png";
        } else {
            img += "https://w7.pngwing.com/pngs/397/885/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo.png";
        }
        return img;
    }
    
    return (
        <div className="credit-card" style={{backgroundColor: bgColor, color: color}}>
            <img src={checkCardType()}/>
            <div className="credit-card-info">
                <p className="super-secret-card">{secretNumbers} {secretNumbers} {secretNumbers} {safeNumber}</p>
                    <div className="another-credit-card-div">
                        <p>Expires {expirationMonth}/{expirationYear}</p>
                        <p>{bank}</p>
                    </div>
                <p>{owner}</p>
            </div>
        </div>
    )
}


export default CreditCard;