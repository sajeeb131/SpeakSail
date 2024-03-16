import React from 'react'
import './Comprehension.css';
import { useState } from 'react'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProgressBar from '../../components/progress-bar/ProgressBar'

const Comprehension = () => {
    const [progressPercentage, setProgress] = useState(40); 


  return (
    <div className='main-container'>
        <Navbar/>
        <ProgressBar progress={[progressPercentage]}/>
            <div className='container'>
                <h1>Comprehension</h1>
                <p>Once upon a time, a little red hen found seeds in the barn. She asked her friends, the duck, the cat, and the cow for help planting, harvesting, and baking bread. They all said, "Not I!" The little red hen did everything herself and ended up with delicious bread. Who helped the little red hen bake bread?</p>
                <form>
                    <h3>Who found seeds in the barn?</h3>
                    <label for="cow">
                        <input type="checkbox" id="cow" name="answer" value="cow" /> The Cow
                    </label>
                    <br />
                    <label for="duck">
                        <input type="checkbox" id="duck" name="answer" value="duck" /> The Duck
                    </label>
                    <br />
                    <label for="red-hen">
                        <input type="checkbox" id="red-hen" name="answer" value="red-hen" />The Little Red Hen
                    </label> <br />
                    <br />
                    <button type="submit" className='btn-submit'>Submit</button>
                </form>
            </div>
        <div className='bottom-tag'>
        <Footer/>
        </div>
    </div>
  )
}

export default Comprehension