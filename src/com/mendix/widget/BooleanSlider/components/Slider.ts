import "../ui/Slider.less";
import { DOM } from "react";

interface SliderProps {
    widgetId: string;
    onClick: Function;
    isChecked: boolean;
}

export const Slider = (props: SliderProps) =>
    DOM.div({ className: "mx-boolean-slider" },
        DOM.input({
            id: "mx-toggle-" + props.widgetId,
            type: "checkbox",
            className: "mx-toggle mx-toggle-ios",
            checked: props.isChecked
        }),
        DOM.label({
            htmlFor: "mx-toggle-" + props.widgetId,
            className: "mx-toggle-btn",
            onClick: () => { if (props.onClick) props.onClick(!props.isChecked) }
        })
    );

