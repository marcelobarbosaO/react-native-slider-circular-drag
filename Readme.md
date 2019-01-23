## react-native-slider-circular-drag

This is a continuation of the work from the user marcelobarbosaO, who made the initial component;  
https://github.com/marcelobarbosaO/react-native-slider-circular-drag

### Installation

The project requires react-native-svg to render, so follow these steps to get it up and running:
   
    npm install --save react-native-svg

After it has installed, you must link it:

    react-native link react-native-svg

And finally install react-native-slider-circular-drag

    npm install --save react-native-slider-circular-drag

### Features

* Gradient integration
* Scalable design
* Customizable start location
* Many configurable options



### Usage

    import CircleSlider from 'react-native-slider-circular-drag';
    ...
    ...
    render() {
		return (
			<CircleSlider 
				arcDirection={'CW'}
                backgroundColor={"white"}
                btnRadius={20}
                sliderRadius={130}
                sliderWidth={25}
                startDegree={0}
                maxValue={360}
                onPressInnerCircle={(value) => console.log(`Inner: ${value}`)}
                onPressOuterCircle={(value) => console.log(`Outer: ${value}`)}
                onValueChange={(value) => console.log(`Changed: ${value}`)}
                endGradient={"#A6FFCB"}
                startGradient={"#12D8FA"}
			/>
		)
	} 

### Props

|Name  |Default  |Description  |Type  |
|--|--|--|--|
|arcDirection  | "CW" |Determines direction of the slider, clockwise or counterclockwise. | string <br>["CW", "CCW"] |
|backgroundColor  | "white" |Determines the colour of the sliders background. | string |
|btnRadius  | 13 |Determines the radius of the slider button. | number |
|decimalPlaces  | 0 |Determines the amount of decimals in the value. | number|
|endGradient  | "#A6FFCB" |Determines the end gradient of the slider. | string |
|maxValue  | 360 |Determines the max value of the slider. | number |
|onPressInnerCircle  | (value) => |Callback with value as a parameter when the inner circle is pressed. | callback |
|onPressOuterCircle  |(value) => |Callback with value as a parameter when the outer circle is pressed. | callback |
|onValueChange  |(value) => |Callback with value as a parameter when the value changes. | callback | callback |
|showValue  | true |Determines if the value will be shown as text in the inner circle.  | boolean |
|sliderRadius  | 130 |Determines the radius of the slider. | number |
|sliderWidth | 25 |Determines the width of the slider. | number |
|startDegree  | 0 |Determines the starting position of the slider.  | number |
|startGradient  | "#12D8FA" |Determines the starting gradient of the slider.  | string |
|textColor  | "white" |Determines the colour of the inner circle text.  | string |
|textSize  | 50 |Determines the size of the inner circle text.  | number |
|value  | 0 |Determines the current value for the slider.  | number |
