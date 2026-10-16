import { useEffect } from "react";
import s from "@/features/Filtered/ui/filtered.module.css";
import { RangeSlider } from "@/features/Filtered/ui/RtingSlider.tsx";

type Props = {
    value: number[];
    setValue: (value: number[]) => void;
};

export const DebounceAndRangeSlader = ({ value, setValue }: Props) => {

    useEffect(() => {
        const timer = setTimeout(() => {
            setValue(value);
        }, 200);

        return () => clearTimeout(timer);
    }, [value, setValue]);

    return (
        <div>
            <div className={s.Rating}>
                <p>Rating</p>
                <p>{value[0]} - {value[1]}</p>
            </div>

            <RangeSlider value={value} setValue={setValue}/>
        </div>
    );
};

