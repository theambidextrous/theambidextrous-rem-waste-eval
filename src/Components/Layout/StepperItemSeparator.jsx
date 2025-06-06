import { IoArrowDown } from "react-icons/io5";

export const StepperItemSeparator = ({ isActive = false }) => {
    return (
       <>
        <div className={`hidden md:block mx-1 h-0.5 w-12 ${ isActive ? 'bg-rem-700' : 'bg-rem-gray-700'}`}></div>
        <div className={`block sm:hidden mx-1 my-1`}>
            <IoArrowDown className={`mob-arrow ${ isActive ? 'text-rem-700' : 'text-rem-gray-700'}`} />
        </div>
       </>
    )
}