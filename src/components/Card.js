import Stat from "./Stat"
import d4 from "../images/d4.png"
import d6 from "../images/d6.png"
import d8 from "../images/d8.png"
import d10 from "../images/d10.png"
import d12 from "../images/d12.png"
import one from "../images/number-one.png"
import two from "../images/number-2.png"
import three from "../images/number-3.png"

function Card() {
  return (
    <div>
      <Stat statSize={d4} attribute="attack" />
      <Stat statSize={d10} attribute="defense" />
    </div>
  )
}

export default Card