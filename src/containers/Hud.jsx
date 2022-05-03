import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import RefreshIcon from "@mui/icons-material/Refresh";
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { connect } from "react-redux";
import styled from "@emotion/styled";
import { reset, changeRotate} from "../features/sceneSlice";
import FastForward from "@mui/icons-material/FastForward";
import FastRewind from "@mui/icons-material/FastRewind";

const mapStateToProps = state => ({

}),
  mapDispatchToProps = dispatch => ({
    onReset: e => dispatch(reset(e)),
    onChangeRotate: e => dispatch(changeRotate(e))
  })

const Nav = styled.nav`
  position: absolute;
  z-index: 9999;
  width: 100%;
  bottom: 0;
  left: 0;
  `

const Hud = ({ onReset, onChangeRotate }) => {

  const actions = [
    { icon: <RefreshIcon onClick={onReset} />, name: 'Reset' },
    { icon: <FastRewind onClick={() => onChangeRotate(-1)} />, name: 'Rotate Left' },
    { icon: <FastForward onClick={() => onChangeRotate(1)} />, name: 'Rotate Right' }
  ];
  
  const margin = 1;
  return (
    <Nav>
      <Box
        className="hud"
        m={margin}
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={`calc(100% - ${margin}rem)`}
      >
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          sx={{ position: 'absolute', bottom: 16, right: 16 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
            />
          ))}
        </SpeedDial>
      </Box>
    </Nav>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Hud);
