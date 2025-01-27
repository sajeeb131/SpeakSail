import React, { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ProgressBar from "../../components/progress-bar/ProgressBar"
import Navbar from "../../components/Navbar"
import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import { AiOutlineSound } from "react-icons/ai"
import "./ListeningStyle.css"
import Footer from "../../components/Footer"
import SubmissionPopup from "../../components/pop-up/submissionPopup"
import { calculateProgress } from "../../components/progress-bar/CalculateProgress"
import { useApi } from "../../hooks/useApi"

const QuestionAnswer = () => {
  const userID = localStorage.getItem("user")
  const navigate = useNavigate()
  const { lessonNumber } = useParams()
  const [progressPercentage, setProgress] = useState(null)
  const [lesson, setLesson] = useState(null)
  const [answers, setAnswers] = useState(["", "", ""])
  const [popUp, setPopup] = useState(false)

  const { fetchData, isLoading, error } = useApi()

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const lessonData = await fetchData(`/lessons/listening/qa/${lessonNumber}`)
        setLesson(lessonData)

        const progress = await calculateProgress(userID, "listening", "qa", "question_answer")
        setProgress(progress)
      } catch (error) {
        console.error("Error fetching lesson data:", error)
      }
    }

    fetchLessonData()
  }, [lessonNumber, userID, fetchData])

  const handleSubmit = async () => {
    try {
      await fetchData("/lessons/listening/qa/answer", {
        method: "POST",
        body: JSON.stringify({
          lessonNumber,
          studentID: userID,
          studentName: localStorage.getItem("name"),
          answers,
        }),
      })
      setPopup(true)
    } catch (error) {
      console.error("Error submitting answers:", error)
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
      <div className="container-qa">
        <div className="qa-main">
          <ProgressBar progress={progressPercentage} />
          <div className="qa-top">
            <h1>Question/Answer</h1>
            <div className="qa-top-r">
              <AiOutlineSound size={28} color="blue" />
              <AudioPlayer src={lesson.audioFilePath} onPlay={() => console.log("onPlay")} />
            </div>
          </div>
          <div className="qa-middle">
            {lesson.questions.map((question, index) => (
              <div className="qa-middle-q" key={index}>
                <p>
                  Ques {index + 1}. {question}
                </p>
                <textarea
                  value={answers[index]}
                  onChange={(e) => {
                    const newAnswers = [...answers]
                    newAnswers[index] = e.target.value
                    setAnswers(newAnswers)
                  }}
                  cols="50"
                  rows="2"
                  placeholder="Start writing..."
                ></textarea>
              </div>
            ))}
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

export default QuestionAnswer

