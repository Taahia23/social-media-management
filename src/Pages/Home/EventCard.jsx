
import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

const EventCard = ({ event }) => {
    const {short_description, id, name, image, price } = event
    return (
        <div className="card bg-base-100 shadow-xl mb-10">
            <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body space-y-1">
                <h2 className="card-title text-2xl">{name}</h2>
                <p className='text-left font-light'>{short_description}</p>
                <p className='text-lg font-semibold text-pink-600'>Price: $ {price}</p>
               <Link to={`/event/${id}`} className='text-left font-semibold '><button className='bg-pink-600 px-3 py-2 w-full text-white'>More Details..</button></Link>


            </div>
        </div>
    );
};

EventCard.propTypes = {
    event : PropTypes.object,
    length : PropTypes.func
}

export default EventCard;


