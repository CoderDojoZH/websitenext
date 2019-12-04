import { withStyles } from '@material-ui/core/styles'
import MuiButton from '@material-ui/core/Button'

const ButtonStyle = withStyles({
  root: {
    background: 'var(--pink)',
    borderRadius: '15px',
    boxShadow: '0',
    color: 'white',
    padding: '8px 20px',
    border: '2px solid white',
    '&:hover': {
      background: 'var(--pink-darker)',
      boxShadow:
        '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);',
    },
  },
})(MuiButton)

export default function OutlineButton({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>
}
