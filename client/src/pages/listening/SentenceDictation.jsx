import React, { useState, useEffect } from "react"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { AiOutlineSound } from "react-icons/ai"
import "./ListeningStyle.css"
import "./AudioPlayer.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProgressBar from "../../components/progress-bar/ProgressBar"
import { useNavigate, useParams } from "react-router-dom"
import SubmissionPopup from "../../components/pop-up/submissionPopup"
import { calculateProgress } from "../../components/progress-bar/CalculateProgress"
import { useApi } from "../../hooks/useApi"

const SentenceDictation = () => {
  const userID = localStorage.getItem("user")
  const navigate = useNavigate()
  const { lessonNumber } = useParams()
  const [progressPercentage, setProgress] = useState(null)
  const [audioSrc, setAudioSrc] = useState("")
  const [placeholder, setPlaceholder] = useState("Start Writing...")
  const [answers, setAnswer] = useState("")
  const [popUp, setPopup] = useState(false)

  const { fetchData, isLoading, error } = useApi()

  useEffect(() => {
    const fetchLesson = async () => {
      try {
        const audioUrl = await fetchData(`/lessons/listening/sentence-dictation/${lessonNumber}`)
        console.log("Fetched audio URL:", audioUrl)
        setAudioSrc(audioUrl)

        const progress = await calculateProgress(userID, "listening", "sentence-dictation", "sentence_dictation")
        console.log("Calculated progress:", progress)
        setProgress(progress)
      } catch (error) {
        console.error("Error fetching lesson:", error)
      }
    }

    fetchLesson()
  }, [lessonNumber, userID, fetchData])

  const handleClick = () => {
    setPlaceholder("")
  }

  const handleSubmit = async () => {
    try {
      const response = await fetchData("/lessons/listening/sentence-dictation/answer", {
        method: "POST",
        body: JSON.stringify({
          lessonNumber,
          studentID: userID,
          studentName: localStorage.getItem("name"),
          answers,
        }),
      })

      console.log("Submit response:", response)
      setPopup(true)
    } catch (error) {
      console.error("Error submitting answer:", error)
    }
  }

  const handleSkipButton = () => {
    navigate(-1)
  }

  if (isLoading || !audioSrc) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <Navbar />
      <div className="container-main-sd">
        <div className="container-sd">
          <div className="container-pb-full">
            <div className="container-pb">
              <div className="container-sd-main">
                <ProgressBar progress={progressPercentage} />
                <div className="sd-main">
                  <h1>Sentence Dictation</h1>
                  <div className="sd-middle">
                    <AiOutlineSound size={28} color="blue" />
                    <AudioPlayer
                      src={audioSrc}
                      onPlay={(e) => console.log("onPlay", e)}
                      onError={(e) => console.error("Audio error:", e)}
                    />
                  </div>
                  <div className="sd-bottom">
                    <textarea
                      className="area"
                      cols="50"
                      rows="6"
                      maxLength={400}
                      placeholder={placeholder}
                      onClick={handleClick}
                      onChange={(e) => {
                        setAnswer(e.target.value)
                        console.log("Current answer:", e.target.value)
                      }}
                      value={answers}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="sd-horizontal-line" />
        <div className="container-sd-button">
          <button className="sd-button1" onClick={handleSkipButton}>
            Can't listen now
          </button>
          <button className="sd-button2" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <SubmissionPopup showPopup={popUp} onClose={() => setPopup(false)} />
      <Footer />
    </div>
  )
}

export default SentenceDictation

