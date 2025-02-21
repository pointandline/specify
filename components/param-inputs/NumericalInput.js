import { useState } from 'react';
import MuiInput from '@mui/material/Input';

export function NumericalInput({ param, suggestedRange = [] }) {
    const { name, rightIcon, leftIcon } = param;

    const [inputValue, setInputValue] = useState(0)
}