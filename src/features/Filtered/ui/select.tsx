import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type Props = {
    personName: string;
    setPersonName:(personName: string) => void;
}

const ITEM_HEIGHT = 64;
const ITEM_PADDING_TOP = 20;
const MenuProps = {
    slotProps: {
        paper: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    },
};

const names = [
    'Popularity ↓',
    'Popularity ↑',
    'Rating ↓',
    'Rating ↑',
    'Release Date ↓',
    'Release Date ↑',
    'Title A-Z',
    'Title Z-A',
];

function getStyles(name: string, personName: string, theme: Theme) {
    return {
        fontWeight: personName.includes(name)
            ? theme.typography.fontWeightMedium
            : theme.typography.fontWeightRegular,
    };
}

export function MultipleSelect({personName,setPersonName}: Props) {
    const theme = useTheme();

    const handleChange = (event: SelectChangeEvent<string>) => {
        setPersonName(event.target.value)
    }

    return (
        <div>
            <FormControl sx={{ m: 1, width: 245, marginBottom: 5 }}>
                <InputLabel id="demo-multiple-name-label">Sort by</InputLabel>
                <Select
                    labelId="demo-multiple-name-label"
                    id="demo-multiple-name"
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Sort by" />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, personName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}