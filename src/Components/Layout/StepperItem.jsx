import PropTypes from 'prop-types';

export const StepperItem = ({ item, icon }) => {
    return (
        <div className={`${item.active ? 'cursor-pointer': 'cursor-not-allowed'} flex flex-row items-center justify-center md:justify-between`}>
            {icon}
            <p className={`text-base font-bold text-center ${item.active ? 'text-white' : 'text-rem-gray-700'}`}>{item.title}</p>
        </div>
    );
}

StepperItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.any),
    icon: PropTypes.elementType
}