"use client"
import clsx from "clsx";
import { useState } from "react";

type Props = {
    checked?: boolean;
    onChange?: (isChecked: boolean) => void;
}

export default function Switch({ checked = false, onChange }: Props) {
    const [isChecked, setIsChecked] = useState(checked);

    return (
        <label className="cursor-pointer h-full w-16 bg-slate-800 dark:bg-sky-400 rounded-full flex transition duration-300 p-0.5">
            <input
                type="checkbox"
                checked={isChecked}
                className="hidden"
                onChange={() => {
                    setIsChecked(!isChecked);
                    if (onChange) onChange(!isChecked);
                }}
            />
            <div className={clsx("w-8 h-8 rounded-full bg-slate-50 dark:bg-slate-800 transition duration-300", {'translate-x-[28px]': isChecked})}/>
        </label>
    );
}