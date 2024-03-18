import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import './VocabTreasure.css'

import Volume from '../../assets/images/volume.svg'

const VocabTreasure = () => {
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

                    {/* box 1 */}
                    <div className="meaning">
                        <div className="word-meaning">
                            <div className="word">
                                <div className="parts-of-speech">
                                    <span className="word-name">{`accident `}</span>
                                    <i className="noun">(noun)</i>
                                </div>
                            </div>

                            <div className="speaker">
                                <img
                                className="speaker-icon"
                                loading="lazy"
                                alt=""
                                src={Volume}
                                />
                            </div>
                        </div>

                        <div className="meaning-of-the-word">
                            <ol className="meaning-of-the-word-order">
                                <li className="meaning-of-the-word-list">
                                    <span>
                                        <span>an event occurring by chance or from unknown causes</span>
                                    </span>
                                </li>
                            </ol>
                            <p className="example-container">
                                <span>
                                    <span>{`       `}</span>
                                    <span className="example">{`“We met by `}</span>
                                </span>
                                <span className="main-word">
                                    <i className="accident">accident.”</i>
                                </span>
                            </p>
                            
                        </div>
                    </div>

                   
                </div>
            </div>
        </section>
        
        <Footer/>
      </div>
    );
  };
  
  export default VocabTreasure;