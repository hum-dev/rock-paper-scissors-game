import PropTypes from "prop-types";
import rock from '../assets/icon-rock.svg'
import paper from '../assets/icon-paper.svg'
import scissors from '../assets/icon-scissors.svg'
// Picks component: Allows the player to choose their pick (rock, paper, or scissors)
// Starts
const Picks = ({ handlePick }) => {
    return (
      <div>
        <h2>Your Pick</h2>
        <div className="button">
          <button className="round-btn" onClick={() => handlePick("rock")}> <img src={rock} alt="" /> </button>
          <button className="round-btn" onClick={() => handlePick("paper")}> <img src={paper} alt="" /></button>
          <button className="round-btn" onClick={() => handlePick("scissors")}> <img src={scissors } alt="" /></button>
        </div>
      </div>
    );
  };
  // Picks component ends
  
  Picks.propTypes = {
    handlePick: PropTypes.func.isRequired,
  };
  
  export default Picks;