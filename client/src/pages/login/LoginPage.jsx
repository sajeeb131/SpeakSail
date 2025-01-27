import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useApi } from "../../hooks/useApi"
import "./LoginPage.css"
import Logo from "../../assets/images/LogoWhite.png"
import LoginImage from "../../assets/images/login.png"
import { API_BASE_URL } from "../../config/api"

const LoginPage = () => {
  const { user_type } = useParams()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState(null)

  const { fetchData, isLoading } = useApi()

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const user = { email, password }
      console.log("Attempting to login with:", API_BASE_URL)
      const data = await fetchData(`/${user_type}/login`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      })

      console.log("Login successful:", data)
      localStorage.setItem("user", data.userID)
      localStorage.setItem("user_type", user_type)
      navigate(user_type === "student" ? "/home" : "/teachers/dashboard")
    } catch (error) {
      console.error("Login failed:", error)
      setErrorMessage("Login failed. Please check your credentials and try again.")
    }
  }

  return (
    <div className="login-page">
      <form className="login-container" onSubmit={handleSubmit}>
        <img className="speaksail-logo" loading="eager" alt="" src={Logo || "/placeholder.svg"} />

        <div className="o-r-frame">
          <div className="or-">Enter your email address and password</div>
        </div>

        <div className="credentials-container">
          <div className="frame-email-address">
            <div className="frame-password">
              <div className="email-password-frame">
                <input
                  className="email-address"
                  placeholder="Email Address"
                  type="text"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>

              <div className="email-password-frame1">
                <input
                  className="password"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
            </div>

            <button className="text-password" type="submit" disabled={isLoading}>
              {isLoading ? "Logging in..." : "Login"}
            </button>
            {errorMessage && <div className="error-message">{errorMessage}</div>}
          </div>
        </div>
      </form>

      <img className="loginImage" loading="eager" alt="" src={LoginImage || "/placeholder.svg"} />
    </div>
  )
}

export default LoginPage

