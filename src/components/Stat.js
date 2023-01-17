

function Stat({ attribute, statSize }) {
  let statStyle = {};
  switch (attribute) {
    case "attack":
      statStyle = {
        gridArea: "2 / 1 / 3 / 2"       
      };
      break;
    case "defense":
      statStyle = {
        gridArea: "2 / 3 / 3 / 4"
      };
      break;
    case "mAttack":
      statStyle = {
        gridArea: "3 / 1 / 4 / 2"
      };
      break;
    case "mDefense":
      statStyle = {
        gridArea: "3 / 3 / 4 / 4"
      };
      break;
      case "movement":
      statStyle = {
        gridArea: "5 / 1 / 6 / 2"
      };
      break;
      case "hp":
      statStyle = {
        gridArea: "5 / 2 / 6 / 3"
      };
      break;
      case "range":
      statStyle = {
        gridArea: "5 / 3 / 6 / 4"
      };
      break;
    default:
      statStyle = {};
  }

  return <div style={statStyle}>
    <h6>{attribute}</h6>
    <img style={{width: "50px"}}src={statSize} alt="stat"/>
  </div>;
}

export default Stat;
