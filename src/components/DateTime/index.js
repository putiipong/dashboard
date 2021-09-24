
import DateTimePicker from 'react-datetime-picker';

export default function index({ value, onChange }) {

  const onChangeDate = date => {
    onChange(date)
  }

  return (
    <DateTimePicker
      onChange={onChangeDate}
      value={value}
    />
  )
}
