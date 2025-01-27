import React, { useState, useEffect } from "react"
import "./Comprehension.css"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import ProgressBar from "../../components/progress-bar/ProgressBar"
import { useNavigate, useParams } from "react-router-dom"
import SubmissionPopup from "../../components/pop-up/submissionPopup"
import { calculateProgress } from "../../components/progress-bar/CalculateProgress"
import { useApi } from "../../hooks/useApi"

const Comprehension = () => {
  const userID = localStorage.getItem("user")
  const navigate = useNavigate()
  const { lessonNumber } = useParams()
  const [progressPercentage, setProgress] = useState(null)
  const [lesson, setLesson] = useState(null)
  const [answers, setAnswers] = useState(null)
  const [options, setOptions] = useState(null)
  const [popUp, setPopup] = useState(false)

  const { fetchData, isLoading, error } = useApi()

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const lessonData = await fetchData(`/lessons/reading/comprehension/${lessonNumber}`)
        setLesson(lessonData)
        setOptions(new Array(lessonData.options.length).fill(null))

        const progress = await calculateProgress(userID, "reading", "comprehension", "comprehension")
        setProgress(progress)
      } catch (error) {
        console.error("Error fetching lesson:", error)
      }
    }

    fetchLessonData()
  }, [lessonNumber, userID, fetchData])

  const handleCheckboxChange = (selectedOption) => {
    const updatedAnswers = lesson.options.map((option) => (option === selectedOption ? option : null))
    setOptions(updatedAnswers)
    setAnswers(selectedOption)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await fetchData("/lessons/reading/comprehension/answer", {
        method: "POST",
        body: JSON.stringify({ lessonNumber, studentID: userID, answers }),
      })
      setPopup(true)
    } catch (error) {
      console.error("Error submitting answer: ", error)
    }
  }

  if (isLoading || !lesson || progressPercentage === null) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div className="main-container">
      <Navbar />
      <ProgressBar progress={progressPercentage} />
      <div className="container">
        <h1>Comprehension</h1>
        <p>{lesson.passage}</p>
        <form onSubmit={handleSubmit}>
          <h3>{lesson.question}</h3>
          {lesson.options &&
            lesson.options.map((option, index) => (
              <div key={index}>
                <label htmlFor={option}>
                  <input
                    type="checkbox"
                    id={option}
                    name="answer"
                    value={option}
                    checked={options && options[index] === option}
                    onChange={() => handleCheckboxChange(option)}
                  />
                  {option}
                </label>
                <br />
              </div>
            ))}
          <button type="submit" className="btn-submit">
            Submit
          </button>
        </form>
        <SubmissionPopup showPopup={popUp} onClose={() => setPopup(false)} />
      </div>
      <div className="bottom-tag">
        <Footer />
      </div>
    </div>
  )
}

export default Comprehension

