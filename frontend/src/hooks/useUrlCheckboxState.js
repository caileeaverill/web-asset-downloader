import { useState, useEffect } from "react";
import { fileTypes } from '../constants/data';

const useUrlCheckboxState = () => {
    const [checked, setChecked] = useState(() => {
        const initialCheckedState = Object.keys(fileTypes).reduce((acc, key) => {
            acc[key] = false;
            return acc;
        }, {});
        return initialCheckedState;
    });

    const handleSelectAllOrDeselectAll = (shouldSelect) => {
        const updatedState = Object.keys(fileTypes).reduce((acc, key) => {
            acc[key] = shouldSelect;
            return acc;
        }, {});
        setChecked(updatedState);
    };

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;

        setChecked((previousInputs) => ({
            ...previousInputs,
            [name]: checked,
        }));
    };

    useEffect(() => {
        if (Object.keys(checked).length === 0) {
            const initialCheckedState = Object.keys(fileTypes).reduce((acc, key) => {
                acc[key] = true;
                return acc;
            }, {});

            setChecked(initialCheckedState);
        }
    }, [checked]);

    return {
        checked,
        handleSelectAllOrDeselectAll,
        handleCheckboxChange,
    };
};

export default useUrlCheckboxState;