import { AppBar, Box, Toolbar, IconButton, Typography } from '@material-ui/core'
import Help from './Help'
import logo from '../logo.svg'
import { Link } from 'react-router-dom';

function Bar({ pageName } ) {
  console.log(pageName)

  return(
    <AppBar alignItems='stretch'>
      <Toolbar>
        <Box display='flex' flexGrow={1} alignItems='center'>
          <IconButton edge="start">
            <img 
              src={logo}
              width="56">
            </img>
          </IconButton>
          <Typography variant="h6">
            {pageName}
          </Typography>
        </Box>
        <Box justifyContent='center' alignItems='center'></Box>
        <Help></Help>
      </Toolbar>
    </AppBar>
  )
}

export default Bar