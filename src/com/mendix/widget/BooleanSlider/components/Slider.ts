import "../ui/Slider.less";
import * as classNames from "classnames";
import { DOM, Props } from "react";

export interface SliderProps extends Props<any> {
    widgetId: string;
    onClick: Function;
    isChecked: boolean;
    enabled: boolean;
    hasError: boolean;
}

export const Slider = (props: SliderProps) =>
    DOM.div({ className: classNames("mx-boolean-slider", { "has-error": props.hasError}) },
        DOM.input({
            checked: props.isChecked,
            className: classNames("mx-toggle", { enabled: props.enabled }),
            id: "mx-toggle-" + props.widgetId,
            readOnly: true,
            type: "checkbox"
        }),
        DOM.label({
            className: classNames("mx-toggle-btn", { enabled: props.enabled }),
            htmlFor: "mx-toggle-" + props.widgetId,
            onClick: props.enabled ? () => props.onClick(!props.isChecked) : null
        }),
        props.children
    );
