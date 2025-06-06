import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { SkipHirePeriodeMapper, SkipSizeMapper } from '../../Utils/Mappers';

export const SkipSelectionForm = ({ data, changeHandler }) => {
    const [ sizes, setSize ] = useState([])
    const [ periods, setPeriod ] = useState([])

    const [formData, setFormData] = useState({
        skipSize: '',
        hirePeriod: '14'
    });

    useEffect(() => {
        let isMounted = true;
        if(isMounted && Array.isArray(data)){
            setSize(data.map(SkipSizeMapper));
            const allPeriods = data.map(SkipHirePeriodeMapper);
            const uniquePeriods = [...new Set(allPeriods.map(JSON.stringify))].map(JSON.parse);
            setPeriod(uniquePeriods);
        }
        return () => isMounted = false;
    }, [data]);

    const onSelectionChanged = (e) => {
        const { name, value } = e.target;
        const currentSelection = {
            ...formData,
            [name]: value
        }
        setFormData(currentSelection);
        changeHandler(currentSelection);
    };


    return (
        <div className="max-w-md bg-transparent rounded-lg shadow-md">
        <form onSubmit={() => undefined}>
            <div className="mb-6">
            <label htmlFor="skipSize" className="block text-sm font-medium text-white mb-2">
                Skip Size (in yards)
            </label>
            <select
                id="skipSize"
                name="skipSize"
                value={formData.skipSize}
                onChange={onSelectionChanged}
                className="w-full px-4 text-rem-gray-700 py-2 border border-rem-gray-300 rounded-md shadow-sm focus:ring-rem-500 focus:border-rem-500"
            >
                <option value={null}>Select a skip size</option>
                {sizes.map((size, index) => (
                <option key={index} value={size.value}>{size.size} yards</option>
                ))}
            </select>
            </div>

            <div className="mb-6">
            <label htmlFor="hirePeriod" className="block text-sm font-medium text-white mb-2">
                Hire Period (in days)
            </label>
            <select
                id="hirePeriod"
                name="hirePeriod"
                value={formData.hirePeriod}
                disabled
                onChange={onSelectionChanged}
                className="w-full px-4 text-rem-gray-700 py-2 border border-rem-gray-300 rounded-md shadow-sm focus:ring-rem-500 focus:border-rem-500"
            >
                {periods.map((period, index) => (
                <option key={index} value={period.value}>{period.period} days</option>
                ))}
            </select>
            </div>
        </form>
        </div>
    );
};

SkipSelectionForm.propTypes = {
    data: PropTypes.arrayOf(PropTypes.shape({
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
    })),
    changeHandler: PropTypes.func
}

SkipSelectionForm.defaultProps = {
    data: [],
    changeHandler: () => undefined
}