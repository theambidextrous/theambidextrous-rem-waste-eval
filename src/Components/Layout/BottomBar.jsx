import React from 'react';
import PropTypes from 'prop-types';

export const BottomBar = ({ skip }) => {
    return (
    <div className="fixed z-30 bottom-0 left-0 right-0 bg-rem-bg border-t border-rem-border p-4 animate-[slide-up_0.5s_ease-in-out]">
        <div className="max-w-7xl mx-auto">
            <div className="mb-3 text-xs text-gray-400 text-center">
                Imagery and information shown throughout this website may not reflect the exact shape or size specification, colours may vary, options and/or accessories may be featured at additional cost.
            </div>
            <div className="lg:hidden">
                <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium"> {skip && skip.size} Yard Skip </h3>
                    <div>
                        <span className="text-xl font-bold text-rem-500">
                            £{ skip && (skip.price_before_vat + skip.vat)}
                        </span>
                        <span className="text-sm text-gray-400 ml-2">
                            { skip && skip.hire_period_days } days
                        </span>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                    <button className="btn-secondary w-full">Back</button>
                    <button className="bg-rem-800 hover:bg-rem-950 text-white font-bold py-2 px-4 rounded items-center gap-2 w-full ">Continue</button>
                </div>
            </div>
            <div className="hidden lg:flex items-center justify-between">
                <div className="flex items-center gap-6">
                    <div>
                        <p className="text-sm text-gray-400"> {skip && skip.size} Yard Skip </p>
                    </div>
                    <div>
                        <span className="text-2xl font-bold text-rem-500">
                            £{ skip && (skip.price_before_vat + skip.vat)}
                        </span>
                        <span className="text-sm text-gray-400 ml-2">
                            { skip && skip.hire_period_days } day hire
                        </span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="btn-secondary">Back</button>

                    <button className="bg-rem-800 hover:bg-rem-950 text-white font-bold py-2 px-4 rounded flex items-center gap-2">
                        Continue
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right w-4 h-4">
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </div>
    )
}

BottomBar.propTypes = {
    skip: {
        id: PropTypes.number,
        size: PropTypes.number,
        hire_period_days: PropTypes.number,
        transport_cost: PropTypes.any,
        per_tonne_cost: PropTypes.any,
        price_before_vat: PropTypes.number,
        vat: PropTypes.any,
        postcode: PropTypes.string,
        area: PropTypes.string,
        forbidden: PropTypes.bool,
        allowed_on_road: PropTypes.bool,
        allows_heavy_waste: PropTypes.bool
    }
}

BottomBar.defaultProps = {
    skip: {
        id: null,
        size: null,
        hire_period_days: null,
        transport_cost: 0,
        per_tonne_cost: 0,
        price_before_vat: null,
        vat: 0,
        postcode: '',
        area: '',
        forbidden: false,
        allowed_on_road: false,
        allows_heavy_waste: false
    }
}