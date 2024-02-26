import { useState } from 'react'
import { Html } from '@react-three/drei'

export default function Consoles({ onClose }) {
  const [showPopup, setShowPopup] = useState(true)
  return (
    <Html>
      <div className="overlay">
        {/* This is your standard HTML for the popup */}
        {showPopup && (
          <div className="popup">
            <h1>Welcome to the Fruity Verse</h1>
            <p>Something strange is happening... could this be the start of a black hole entering this solar system?</p>
            <button className="closeButton" onClick={() => setShowPopup(false)}>
              Close
            </button>
          </div>
        )}
      </div>
    </Html>
  )
}
/**
 * Add load screen with button to start the game
 * Player should press start to start the game
 *
 * Add game over screen if player loses
 *
 * Add winning screen for if the whale wins
 */
