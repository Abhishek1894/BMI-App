import { useState } from "react";
import './calculator.css';

function Calculator()
{
    const [weight,setWeight] = useState();
    const [height,setHeight] = useState();
    const [bmi,setBmi] = useState();

    function handleWeightChange(event)
    {
        setWeight(event.target.value);
    }

    function handleHeightChange(event)
    {
        setHeight(event.target.value);
    }

    function calculateBmi()
    {
        let wt = weight;
        let ht = height;
        ht /= 100;

        setBmi((wt / (ht*ht)));
    }

    return (
        <div>
            <div id="container">
                <div id="heading">
                    <h1>BMI Calculator</h1>
                </div>
                <label htmlFor="weight">Enter Weight (in kg)</label>
                <input type="number" id="weight" value={weight} onChange={handleWeightChange} placeholder="ex 56"/>

                <label htmlFor="height">Enter Height (in cm)</label>
                <input type="number" id="heigth" value={height} onChange={handleHeightChange} placeholder="ex 177"/>

                <button onClick={calculateBmi}>Calculate</button>

                <input type="number" value={bmi} placeholder="Your BMI"/>
            </div>
        </div>
    )
}

export default Calculator;