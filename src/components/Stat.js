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
    default:
      statStyle = {};
  }

  return <div style={statStyle}>Stat</div>;
}

export default Stat;
