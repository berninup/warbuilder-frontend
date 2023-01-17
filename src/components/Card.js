import Stat from "./Stat"
import d4 from "../images/d4.png"
import d6 from "../images/d6.png"
import d8 from "../images/d8.png"
import d10 from "../images/d10.png"
import d12 from "../images/d12.png"
import one from "../images/number-one.png"
import two from "../images/number-2.png"
import three from "../images/number-3.png"

function Card({ cardData }) {

  const cardStyle = {
    display: "grid",
    gridTemplateColumns: "3fr 4fr 3fr",
    gridTemplateRows: "repead(5, 1fr)",
    gridColumnGap: "0px",
    girdRowGap: "0px",
    width: "50%",
    margin: "auto"
  }

  return (
    <div style={cardStyle}>
      <h2 style={{gridArea: "1 / 2 / 2 /3"}}>Name</h2>
      <div style={{ gridArea: "4 / 2 / 5 / 3"}}>Abilities</div>
      <div style={{gridArea: "2 / 2 / 4 / 3"}}>
      <img style={{ height: "200px", width: "auto" }}src="https://i.imgur.com/thwf3Ak.png" alt="orge" />
      </div>
      <Stat statSize={d4} attribute="attack" />
      <Stat statSize={d6} attribute="defense" />
      <Stat statSize={d10} attribute="mAttack" />
      <Stat statSize={d12} attribute="mDefense" />
      <Stat statSize={one} attribute="movement" />
      <Stat statSize={two} attribute="hp" />
      <Stat statSize={three} attribute="range" />
    </div>
  )
}
 
export default Card