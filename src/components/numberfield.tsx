import { TextField } from '@mui/material'
import PropTypes from 'prop-types'
interface Props {
  setState: (arg0: number) => void
  defaultValue?: number
}


const NumberField: React.FC<Props> = ({ setState, defaultValue = 1 }) => {
  const handleChange = (e: React.FocusEvent<HTMLInputElement>): void => {
    if (e.target.valueAsNumber < 1) {
      e.target.valueAsNumber = 1
      return
    }
    setState(Number(e.target.value))
  }
  return (
    <TextField
      id="outlined-number"
      label="Number"
      type="number"
      InputLabelProps={{
        shrink: true
      }}
      InputProps={{
        inputProps: { min: 1 }
      }}
      onBlur={handleChange}
      defaultValue={defaultValue}
    />
  )
}

export default NumberField

NumberField.propTypes = {
  setState: PropTypes.func.isRequired,
  defaultValue: PropTypes.number
}
