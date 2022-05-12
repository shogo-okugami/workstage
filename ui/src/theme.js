import { createTheme } from '@mui/material/styles'
import { blue } from '@mui/material/colors'

let theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
      secondary: blue[50],
    }
  },
})

theme = createTheme(theme, {
  components: {
    MuiListItemButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          '&.Mui-selected': {
            background: theme.palette.primary.secondary,
            '&:hover': {
              background: theme.palette.primary.secondary,
            },
            '& .MuiListItemIcon-root,.MuiListItemText-root': {
              color: theme.palette.primary.main
            },
          }
        }
      }
    }
  }
})

export default theme