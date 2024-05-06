import PropTypes from 'prop-types';

const ServiceCard = ({service}) => {
    const {img, title, price} = service;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure className="px-3 pt-3 h-56">
          <img
            src={img}
            alt=""
            className="rounded-xl h-full"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <h3 className="text-[#FF3811] text-xl font-bold mb-4">Price: ${price}</h3>
        </div>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
    service: PropTypes.object,
}
export default ServiceCard;
