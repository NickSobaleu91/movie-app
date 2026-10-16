import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

type Props = {
    value: number[]
    setValue: (value: number[]) => void;
}

function valuetext(value: number) {
    return `${value}°C`;
}

export function RangeSlider({value,setValue}: Props) {


    const handleChange = (_event: Event, newValue: number[]) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%", paddingBottom: 7 }}>
            <Slider
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                min={0}
                max={10}
                step={0.1}
            />
        </Box>
    );
}