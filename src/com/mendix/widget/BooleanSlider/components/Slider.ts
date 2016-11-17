import "../ui/Slider.less";
import * as classNames from "classnames";
import { DOM } from "react";

export interface SliderProps {
    widgetId: string;
    onClick: Function;
    isChecked: boolean;
    enabled: boolean;
}

export const Slider = (props: SliderProps) =>
    DOM.div({ className: "mx-boolean-slider" },
        DOM.input({
            id: "mx-toggle-" + props.widgetId,
            type: "checkbox",
            className: classNames("mx-toggle", { enabled: props.enabled }),
            checked: props.isChecked,
            readOnly: true
        }),
        DOM.label({
            htmlFor: "mx-toggle-" + props.widgetId,
            className: classNames("mx-toggle-btn", { enabled: props.enabled }),
            onClick: props.enabled ? () => props.onClick(!props.isChecked) : null
        })
    );
