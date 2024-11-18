import { ComponentPropsWithRef, forwardRef } from 'react';
import clsx from "clsx";
import { COLOR_STYLE, TextColor } from "./common";

type Props = ComponentPropsWithRef<'h1'> & {
    color?: TextColor;
}
export default forwardRef<HTMLHeadingElement, Props>(function H1({ className, color = 'primary', ...rest }, ref) {
    const style = "text-4xl font-semibold";
    return (
        <h1
            {...rest}
            ref={ref}
            className={clsx(className, style, COLOR_STYLE[color])}
            
        />
    )
})
