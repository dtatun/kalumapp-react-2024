import { Box } from "@mui/material"
import { NavBar } from "../components/NavBar"

const drawerWidth = 240;

export const HomeLayout = () => {
  return (
    <Box sx={{display: 'flex'}}>
      <NavBar drawerWidth={drawerWidth}/>
    </Box>
  )
}

