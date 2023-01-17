import Rating from './Rating';

function DriverCard(props) {
    
    const name = props.name;
    const rating = props.rating;
    const img = props.img;
    const car = props.car;

    return (
        <div className='driver-card'>
            <img src={img} />
            <div className='driver-card-info'>
                <p><b>{name}</b></p>
                <Rating>{rating}</Rating>
                <p>{car.model} - {car.licensePlate}</p>
            </div>
        </div>
    )
}


export default DriverCard;