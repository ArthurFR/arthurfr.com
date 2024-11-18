import { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from "clsx";

import { COLOR_STYLE, TextColor } from "./common";

type Props = ComponentPropsWithRef<'p'> & {
    color?: TextColor;
    bold?: boolean;
}

export default forwardRef<HTMLParagraphElement, Props>(function P({ className, color = 'primary', bold = false, ...rest }, ref) {
    const style = "m-2";
    return (
        <p className={clsx(className, style, COLOR_STYLE[color], {'font-semibold': bold})} {...rest} ref={ref} />
    )
})
