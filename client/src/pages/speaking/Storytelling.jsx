import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProgressBar from "../../components/progress-bar/ProgressBar"
import "./StorytellingStyle.css"
import Recorder from "../../components/recorder/Recorder"
import SubmissionPopup from "../../components/pop-up/submissionPopup"
import { calculateProgress } from "../../components/progress-bar/CalculateProgress"
import { useApi } from "../../hooks/useApi"

const Storytelling = () => {
  const userID = localStorage.getItem("user")
  const navigate = useNavigate()
  const { lessonNumber } = useParams()
  const [progressPercentage, setProgress] = useState(null)
  const [lesson, setLesson] = useState(null)
  const [popUp, setPopup] = useState(false)
  const [audioBlob, setAudioBlob] = useState(null)

  const { fetchData, isLoading, error } = useApi()

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const lessonData = await fetchData(`/lessons/speaking/storytelling/${lessonNumber}`)
        setLesson(lessonData)

        const progress = await calculateProgress(userID, "speaking", "storytelling", "storytelling")
        setProgress(progress)
      } catch (error) {
        console.error("Error fetching lesson:", error)
      }
    }

    fetchLessonData()
  }, [lessonNumber, userID, fetchData])

  const handleAudioSubmit = async () => {
    if (audioBlob) {
      try {
        const formData = new FormData()
        formData.append("file", audioBlob)
        formData.append("lessonType", "Storytelling")
        formData.append("lessonNumber", lessonNumber)
        formData.append("story", lesson.story)
        formData.append("studentID", userID)

        await fetchData("/lessons/speaking/storytelling/answer", {
          method: "POST",
          body: formData,
        })

        setPopup(true)
        console.log("Audio submitted successfully")
      } catch (error) {
        console.error("Error submitting audio:", error)
      }
    } else {
      console.warn("Required fields are missing")
    }
  }

  const handleSkipButton = () => {
    navigate(-1)
  }

  if (isLoading || !lesson || progressPercentage === null) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <Navbar />
      <div className="container-st">
        <div className="st-main">
          <ProgressBar progress={progressPercentage} />
          <div className="st-top">
            <h1>Storytelling</h1>
            <div className="st-para">
              <p className="st-para-p">{lesson.story}</p>
            </div>
          </div>
          <Recorder onRecordingStop={(blob) => setAudioBlob(blob)} />
        </div>
        <hr className="sd-horizontal-line" />
        <div className="container-sd-button">
          <button className="sd-button1" onClick={handleSkipButton}>
            Can't Record now
          </button>
          <button className="sd-button2" onClick={handleAudioSubmit}>
            Submit
          </button>
        </div>
      </div>
      <SubmissionPopup showPopup={popUp} onClose={() => setPopup(false)} />
      <Footer />
    </div>
  )
}

export default Storytelling

