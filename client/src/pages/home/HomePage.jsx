import React from "react"
import { Link, useNavigate } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import "./HomePage.css"
import { useLessonData } from "../../hooks/useLessonData"

import VocabMission from "../../assets/images/VT-Card.png"
import DailyMission from "../../assets/images/DM-CARD.png"

const HomePage = () => {
  const navigate = useNavigate()
  const userID = localStorage.getItem("user")
  const { user, progressData, overallProgress, isLoading, error } = useLessonData(userID)

  const handleDailyMissionClick = () => {
    navigate("/daily-mission")
  }

  const handleVocabTreasureClick = () => {
    navigate("/vocab-treasure")
  }

  const clickLessonLink = (lesson) => {
    navigate(`/lessons/${lesson}`)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error: {error.message}</div>

  return (
    <div className="container-homepage">
      <Navbar />
      <div className="container-homepage-header">
        <h1>
          Welcome back, <span>{user?.fullName}</span>
        </h1>
      </div>
      <div className="container-homepage-progress">
        <div className="container-homepage-progress-bar">
          <div>
            <h1>Your overall progress</h1>
          </div>
          <div className="container-homepage-progress-bar-line">
            <div className="progress-bar" style={{ width: `${overallProgress}%` }}></div>
          </div>
          <span className="overall-progress-span">{Math.floor(overallProgress)}%</span>
        </div>
      </div>
      <div className="container-vb-tr">
        <div className="halff">
          <h2>Vocab Treasure</h2>
          <img src={VocabMission || "/placeholder.svg"} onClick={handleVocabTreasureClick} alt="Vocab Treasure" />
        </div>
        <div className="halff">
          <h2>Daily Mission</h2>
          <img src={DailyMission || "/placeholder.svg"} onClick={handleDailyMissionClick} alt="Daily Mission" />
        </div>
      </div>
      <div className="container-homepage-lessons">
        <div>
          <h1>Lessons</h1>
        </div>
        <div className="container-homepage-lessons-half">
          {Object.entries(progressData).map(([lessonType, { progress, total }]) => (
            <div
              key={lessonType}
              className="container-homepage-lessons-indv"
              id={lessonType}
              onClick={() => clickLessonLink(lessonType)}
            >
              <h2>{lessonType.charAt(0).toUpperCase() + lessonType.slice(1)}</h2>
              <div className="container-homepage-progress-bar-line">
                <div
                  className="progress-bar"
                  style={{
                    width: `${total > 0 ? (progress / total) * 100 : 0}%`,
                    backgroundColor:
                      lessonType === "listening"
                        ? "#FABC2A"
                        : lessonType === "speaking"
                          ? "#52D1DC"
                          : lessonType === "reading"
                            ? "#FF5E5B"
                            : "#93FF96",
                  }}
                ></div>
              </div>
              <span>{total > 0 ? Math.floor((progress / total) * 100) : 0}%</span>
            </div>
          ))}
        </div>
      </div>
      <div className="container-homepage-material">
        <div>
          <h1>
            Download <span style={{ color: "#D67BE0" }}>Materials</span>
          </h1>
        </div>
        <div className="homepage-materials">
          {["Listening", "Speaking", "Reading", "Writing"].map((material) => (
            <div
              key={material}
              className="homepage-materials-indv"
              style={{
                backgroundColor:
                  material === "Listening"
                    ? "#52D1DC"
                    : material === "Speaking"
                      ? "#FABC2A"
                      : material === "Reading"
                        ? "#93FF96"
                        : "#FF5E5B",
              }}
            >
              <div className="homepage-materials-icon">{/* SVG icons here */}</div>
              <div>
                <h2>{material}</h2>
                <h2>Materials</h2>
              </div>
              <p></p>
              <Link
                to={`/materials/${material}`}
                style={{
                  color:
                    material === "Listening"
                      ? "#52D1DC"
                      : material === "Speaking"
                        ? "#FABC2A"
                        : material === "Reading"
                          ? "#93FF96"
                          : "#FF5E5B",
                }}
              >
                Explore
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage

