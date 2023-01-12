import d4 from "../images/d4.png"
import d6 from "../images/d6.png"
import d8 from "../images/d8.png"
import d10 from "../images/d10.png"
import d12 from "../images/d12.png"
import one from "../images/number-one.png"
import two from "../images/number-2.png"
import three from "../images/number-3.png"

function Stat({ attribute, statSize }) {
  let statStyle = {};
  switch (attribute) {
    case "attack":
      statStyle = {
        position: "left",        
      };
      break;
    case "defense":
      statStyle = {
        position: "right",
      };
      break;
    case "mAttack":
      statStyle = {
        position: "left",
      };
      break;
    case "mDefense":
      statStyle = {
        position: "right",
      };
      break;
      case "movement":
      statStyle = {
        position: "left",
      };
      break;
      case "hp":
      statStyle = {
        position: "center",
      };
      break;
      case "range":
      statStyle = {
        position: "right",
      };
      break;
    default:
      statStyle = {};
  }

  return <div >
    <img style={statStyle} src={statSize} alt="stat"/>
  </div>;
}

export default Stat;
