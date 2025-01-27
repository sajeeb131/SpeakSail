import { useState, useEffect } from "react"
import { useApi } from "./useApi"

export const useLessonData = (userID) => {
  console.log("useLessonData hook called with userID:", userID)
  const [user, setUser] = useState(null)
  const [progressData, setProgressData] = useState({
    listening: { progress: 0, total: 0 },
    speaking: { progress: 0, total: 0 },
    reading: { progress: 0, total: 0 },
    writing: { progress: 0, total: 0 },
  })
  const [overallProgress, setOverallProgress] = useState(0)
  const { fetchData: apiFetch, isLoading, error } = useApi()

  useEffect(() => {
    const fetchLessonData = async () => {
      if (!userID) {
        console.error("No userID provided")
        return
      }

      try {
        const userData = await apiFetch(`/home/${userID}`)
        console.log("Received user data:", userData)

        if (!userData || typeof userData !== "object") {
          throw new Error("Invalid user data received")
        }

        if (!userData.fullName) {
          console.warn("User data does not contain fullName")
        }

        setUser(userData)
        localStorage.setItem("name", userData.fullName || "Unknown User")

        const lessonTypes = ["listening", "reading", "writing", "speaking"]
        const newProgressData = {}
        let totalProgress = 0
        let totalLessons = 0

        for (const type of lessonTypes) {
          const progress = userData[type] || 0
          let total = 0

          if (type === "listening") {
            const sd = await apiFetch("/lessons/listening/sentence-dictation")
            const qa = await apiFetch("/lessons/listening/qa")
            total = sd.lessons.length + qa.lessons.length
          } else if (type === "reading") {
            const c = await apiFetch("/lessons/reading/comprehension")
            total = c.lessons.length
          } else if (type === "speaking") {
            const st = await apiFetch("/lessons/speaking/storytelling")
            const ce = await apiFetch("/lessons/speaking/conversation-exchange")
            total = st.lessons.length + ce.lessons.length
          } else if (type === "writing") {
            const pd = await apiFetch("/lessons/writing/picturedescription")
            total = pd.lessons.length
          }

          newProgressData[type] = { progress, total }
          totalProgress += progress
          totalLessons += total
        }

        setProgressData(newProgressData)
        setOverallProgress(totalLessons > 0 ? (totalProgress / totalLessons) * 100 : 0)
      } catch (error) {
        console.error("Error fetching data:", error)
        setUser(null)
        setProgressData({
          listening: { progress: 0, total: 0 },
          speaking: { progress: 0, total: 0 },
          reading: { progress: 0, total: 0 },
          writing: { progress: 0, total: 0 },
        })
        setOverallProgress(0)
      }
    }

    fetchLessonData()
  }, [userID, apiFetch])

  return { user, progressData, overallProgress, isLoading, error }
}

