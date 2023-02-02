import React, { Component } from "react";
import "../index.css";

export default class ColorPicker extends Component {
    state = {
        selectedColor: null,
    };
    render() {
        const { initialSelectedColor, colorPickerOptions } = this.props

        const handleColorSelector = (pickedColor) => {
            this.setState({
                selectedColor: pickedColor,
            });
        };

        return (
            <div className={'colorPickerWrapper'}>
                <div className={'selectedColorBox'}
                    style={{
                        backgroundColor:
                            this.state.selectedColor || this.props.initialSelectedColor,
                    }}
                    data-testid="selectedColor"
                >
                    <p className={'colorLabel'}>
                        {this.state.selectedColor || initialSelectedColor}
                    </p>
                </div>
                <div className={'colorOptionsWrapper'} data-testid="colorPickerOption">
                    {colorPickerOptions.map((color, index) => {
                        return (
                            <div
                                key={index}
                                style={{
                                    backgroundColor: `${color}`
                                }}
                                className={'colorOptionsBox'}
                                onClick={() => handleColorSelector(color)}
                            ></div>
                        );
                    })}
                </div>
            </div>
        );
    }
}
