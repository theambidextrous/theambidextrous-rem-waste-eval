import {
    IoLocationOutline,
    IoShieldOutline,
    IoTrashOutline,
    IoCalendarClearOutline,
    IoCardOutline
} from "react-icons/io5";
import { FiTruck } from "react-icons/fi";
import PropTypes from 'prop-types';
import { StepperItem } from "./StepperItem";
import { StepperItemSeparator } from "./StepperItemSeparator";

const iconSelector = (active, id) => {
    switch (Number(id)) {
        case 1:
            return <IoLocationOutline size={20} className={`mr-2 ${active ? 'text-rem-700' : 'text-rem-gray-700'}`} />;
        case 2:
            return <IoTrashOutline size={20} className={`mr-2 ${active ? 'text-rem-700' : 'text-rem-gray-700'}`} />;
        case 3:
            return <FiTruck size={18} className={`mr-2 ${active ? 'text-rem-700' : 'text-rem-gray-700'}`} />;
        case 4:
            return <IoShieldOutline size={18} className={`mr-2 ${active ? 'text-rem-700' : 'text-rem-gray-700'}`} />;
        case 5:
            return <IoCalendarClearOutline size={18} className={`mr-2 ${active ? 'text-rem-700' : 'text-rem-gray-700'}`} />;
        case 6:
            return <IoCardOutline size={18} className={`mr-2 ${active ? 'text-rem-700' : 'text-rem-gray-700'}`} />;
    }
}
export const Stepper = ({ items }) => {
    return (
        <div className="flex flex-col justify-center md:flex-row md:items-center md:justify-between">
            {items.map((item, key) => (
                <>
                    <StepperItem icon={iconSelector(item.active, item.id)} item={item} key={key} />
                    {!item.last && (
                        <StepperItemSeparator width={30} isActive={(item.active && item.done)} />
                    )}
                </>
            ))}
        </div>
    )
}

Stepper.propTypes = {
    items: PropTypes.arrayOf(PropTypes.any),
}