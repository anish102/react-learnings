import { useState } from "react";

function ColorPicker() {
    const [color, setColor] = useState("#000000")

    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (<div className="color-picker-container">
        <h1 className="color-h1">Color Picker</h1>
        <div className="color-display" style={{ backgroundColor: color }}>
            <p>Selected Color: {color} </p>
        </div>
        <label className="color-picker-label">Select a color:</label><br />
        <input className="color-input" type="color" value={color} onChange={handleColorChange} />
    </div>
    )
}

export default ColorPicker