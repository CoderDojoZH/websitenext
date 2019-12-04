import { withStyles } from '@material-ui/core/styles'
import MuiButton from '@material-ui/core/Button'

const ButtonStyle = withStyles({
  root: {
    background: 'var(--pink)',
    border: 0,
    borderRadius: '10px',
    boxShadow: '0',
    color: 'white',
    padding: '8px 20px',
    '&:hover': {
      background: 'var(--pink-darker)',
      boxShadow:
        '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12);',
    },
  },
})(MuiButton)

export default function Button({ children }) {
  return <ButtonStyle>{children}</ButtonStyle>
}
