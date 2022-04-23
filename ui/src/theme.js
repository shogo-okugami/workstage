import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      secondary: blue[50],
    }
  },
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            background: blue[50],
          }
        }
      }
    }
  }
})

export default theme