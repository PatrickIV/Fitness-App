import React from 'react'

export default function LoginPage() {
  return (
    <div>
        <div className="Login">
        <form>
              <input type="text" placeholder="username/email/phone #" className="userName"></input>
              <input type="text" className="pswd"></input> 
              {/* query database for user profile -> "Profile.js" */}
        </form>
      </div>
    </div>
  )
}
