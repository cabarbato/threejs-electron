import { Box, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NavigationIcon from "@mui/icons-material/Navigation";
import styled from "@emotion/styled";

const Nav = styled.nav`
  position: absolute;
  z-index: 9999;
  width: 100%;
  bottom: 0;
  left: 0;
  `

function Hud() {
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
        <Fab color="primary" aria-label="add" sx={{margin}}>
          <AddIcon />
        </Fab>
        <Fab color="secondary" aria-label="edit" sx={{margin}}>
          <EditIcon />
        </Fab>
        <Fab variant="extended" sx={{margin}}>
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Fab disabled aria-label="like" sx={{margin}}>
          <FavoriteIcon />
        </Fab>
      </Box>
    </Nav>
  );
}

export default Hud;
