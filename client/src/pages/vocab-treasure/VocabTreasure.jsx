import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './VocabTreasure.css';
import Volume from '../../assets/images/volume.svg';

const VocabTreasure = () => {
  const [dailyWords, setDailyWords] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/extras/vocab-treasure');
        if (!response.ok) {
          throw new Error('Cannot get the words');
        }
        const data = await response.json();

        // Shuffle the array and take only the first two words
        const shuffledData = shuffleArray(data);
        setDailyWords(shuffledData.slice(0, 2));
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  // Function to shuffle an array
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <div className="vocab-treasure">
      <Navbar />
      <section className="vocab-treasure-inner">
        <div className="whole-container">
          {/* Vocab-Treasure Heading */}
          <div className="lesson-heading">
            <div className="heading">
              <div className="vocab-heading">
                <h2 className="vocab">Vocab</h2>
              </div>
              <div className="treasure-heading">
                <div className="treasure">Treasure</div>
              </div>
            </div>
          </div>

          {/* Vocab-boxes */}
          <div className="box-containers">
            {dailyWords.map((word, index) => (
              <div className="meaning" key={index}>
                <div className="word-meaning">
                  <div className="word">
                    <div className="parts-of-speech">
                      <span className="word-name">{word.word}</span>
                      <i className="noun">({word.partsOfSpeech})</i>
                    </div>
                  </div>
                  
                </div>

                <div className="meaning-of-the-word">
                  <ol className="meaning-of-the-word-order">
                    <li className="meaning-of-the-word-list">
                      <span>{word.meaning}</span>
                    </li>
                  </ol>
                  <p className="example-container">
                    <span className="example">“{word.example}”</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default VocabTreasure;
