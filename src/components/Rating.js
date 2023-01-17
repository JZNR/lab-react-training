function Rating(props) {
    const rating = Math.round(props.children);

    const empty = "☆";
    const filled = "★";

    function starChecker() {
        if (rating != 5) {
            const diff = 5 - rating;

            const numberOfFilled = filled.repeat(rating);
            const numberOfEmpty = empty.repeat(diff);
            
            return numberOfFilled + numberOfEmpty;
        } else {
            return filled.repeat(5);
        }
    }
    return (
        <div className="star">
            {starChecker()}
        </div>
    )
}


export default Rating;