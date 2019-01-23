import * as React from "react";
import { PanResponderInstance } from "react-native";
interface ICircleSliderProps {
    arcDirection?: "CW" | "CCW";
    backgroundColor: string;
    bgInactive: string;
    btnColor: string;
    widthDevice: number;
    btnRadius: number;
    component?: JSX.Element;
    decimalPlaces?: number;
    endGradient: string;
    flex: number;
    maxValue: number;
    onPressInnerCircle?: (value: number) => void;
    onPressOuterCircle?: (value: number) => void;
    onValueChange?: (value: number) => void;
    showValue?: boolean;
    sliderRadius: number;
    sliderWidth: number;
    startDegree?: number;
    startGradient: string;
    textColor?: string;
    textSize?: number;
    value?: number;
}
interface ICircleSliderState {
    angle: number;
    circleCenter: ICartesian;
    measuredBox: Array<Point> | null;
    origin: ICartesian;
    relativeAngle: number;
    xCenter: number;
    yCenter: number;
}
interface ICartesian {
    x: number;
    y: number;
}
interface IAngle {
    angle: number;
    relativeAngle: number;
}
interface Point {
    angle: number;
    x: number;
    y: number;
}
export default class CircleSlider extends React.Component<ICircleSliderProps, ICircleSliderState> {
    static defaultProps: {
        arcDirection: string;
        widthDevice: number;
        backgroundColor: string;
        bgInactive: string;
        btnColor: string;
        btnRadius: number;
        component: undefined;
        decimalPlaces: number;
        endGradient: string;
        flex: number;
        maxValue: number;
        onPressInnerCircle: (value: number) => number;
        onPressOuterCircle: (value: number) => number;
        onValueChange: (value: number) => number;
        showValue: boolean;
        sliderRadius: number;
        sliderWidth: number;
        startDegree: number;
        startGradient: string;
        textColor: string;
        textSize: number;
        value: number;
    };
    panResponder: PanResponderInstance;
    constructor(props: ICircleSliderProps);
    componentWillReceiveProps(nextProps: ICircleSliderProps): void;
    polarToCartesian: (angle: number) => ICartesian;
    cartesianToPolar: (x: number, y: number) => number;
    handleMeasure: (ox: number, oy: number, width: number, height: number, px: number, py: number) => void;
    measureLocation: () => void;
    getOnPressAngle: (x: number, y: number) => IAngle;
    getRelativeAngle: (angle: number) => number;
    relativeToAbsoluteAngle: (relativeAngle: number) => number;
    getCurrentValue: () => number;
    setValue: (value: number) => void;
    onValueChanged: (value: number) => void;
    innerCirclePressed: (value: number) => void;
    outerCirclePressed: (value: number) => void;
    getBoxBounds: () => Point[];
    degreeToRadian: (angle: number) => number;
    radianToDegree: (radian: number) => number;
    render(): JSX.Element;
}
export {};
