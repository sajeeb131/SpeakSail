import React, { useState, useEffect } from "react"
import ProgressBar from "../../components/progress-bar/ProgressBar"
import Navbar from "../../components/Navbar"
import "./PictureDescription.css"
import Footer from "../../components/Footer"
import { useNavigate, useParams } from "react-router-dom"
import SubmissionPopup from "../../components/pop-up/submissionPopup"
import { calculateProgress } from "../../components/progress-bar/CalculateProgress"
import { useApi } from "../../hooks/useApi"

const PictureDescription = () => {
  const userID = localStorage.getItem("user")
  const navigate = useNavigate()
  const { lessonNumber } = useParams()
  const [progressPercentage, setProgress] = useState(null)
  const [lesson, setLesson] = useState(null)
  const [answers, setAnswer] = useState("")
  const [popUp, setPopup] = useState(false)

  const { fetchData, isLoading, error } = useApi()

  useEffect(() => {
    const fetchLessonData = async () => {
      try {
        const lessonData = await fetchData(`/lessons/writing/picturedescription/${lessonNumber}`)
        setLesson(lessonData)

        const progress = await calculateProgress(userID, "writing", "picturedescription", "picture_description")
        setProgress(progress)
      } catch (error) {
        console.error("Error fetching lesson:", error)
      }
    }

    fetchLessonData()
  }, [lessonNumber, userID, fetchData])

  const handleTextAreaChange = (e) => {
    setAnswer(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (!answers) {
        throw new Error("Answer script is empty!")
      }
      await fetchData("/lessons/writing/picturedescription/answer", {
        method: "POST",
        body: JSON.stringify({ lessonNumber, studentID: userID, answers }),
      })
      setPopup(true)
    } catch (error) {
      console.log("Error submitting data: ", error)
    }
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
      <form className="container-pd">
        <div className="pd-main">
          <ProgressBar progress={progressPercentage} />
          <div className="pd-top">
            <h1>Picture Description</h1>
            <div className="pd-top-image">
              <img src={lesson.imagePath || "/placeholder.svg"} alt="" width="580px" height="402px" />
            </div>
          </div>
          <div className="pd-middle">
            <textarea
              cols="30"
              rows="8"
              maxLength="400"
              placeholder="Start Writing..."
              onChange={handleTextAreaChange}
              value={answers}
            ></textarea>
            <div className="middle-submit">
              <button className="btn-submit" type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      <SubmissionPopup showPopup={popUp} onClose={() => setPopup(false)} />
      <Footer />
    </div>
  )
}

export default PictureDescription

