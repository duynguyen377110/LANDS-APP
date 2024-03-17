import { useState } from "react";

const useValdator = () => {
    const [value, setValue] = useState('');

    const enterVal = (val) => {
        setValue(val);
    }

    const resetVal = () => {
        setValue('');
    }

    return {
        value,
        enterVal,
        resetVal
    }
}

export default useValdator;