import { Button } from "@mui/material";
const Actions = ({ handleClick, type, className, color }) => {
  return (
    <Button
      className={className}
      onClick={handleClick}
      variant="outlined"
      size="small"
      color={color}
      style={{
        fontSize: "14px",
        textTransform: "capitalize",
        marginLeft: "5px",
      }}
    >
      {type}
    </Button>
  );
};
export default Actions;
