import React from 'react'

export default function SignupPage() {
  return (
    <div>
        <h1>Let's see what we're working with...</h1>
        {/* idk if form tag is necessary for react but ill just leave it here 4now */}
        <form>
            {/* rStat is for registry stat */}
            <input type='text' className='rStat' id='age'>Age </input>
            <input type='text' className='rStat' id='sex'>Biological Sex </input>
            <input type='text' className='rStat' id='height'>Height </input>
            <input type='text' className='rStat' id='weight'>Weight</input>
        </form>

        <form>
            <button className="next-btn">Next</button>
        </form>
    </div>
  )
}
