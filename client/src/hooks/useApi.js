import { useState, useCallback } from "react"
import { API_BASE_URL } from "../config/api"

export function useApi() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchData = useCallback(async (endpoint, options = {}) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
      })
      console.log(`API Response for ${endpoint}:`, response)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(
          JSON.stringify({
            status: response.status,
            statusText: response.statusText,
            errorData,
          }),
        )
      }

      const data = await response.json()
      console.log(`API Data for ${endpoint}:`, data)

      if (!data) {
        throw new Error("No data received from the server")
      }

      return data
    } catch (e) {
      console.error(`Error fetching data from ${endpoint}:`, e)
      setError(e instanceof Error ? e : new Error("An unknown error occurred"))
      throw e
    } finally {
      setIsLoading(false)
    }
  }, [])

  return { fetchData, isLoading, error }
}

