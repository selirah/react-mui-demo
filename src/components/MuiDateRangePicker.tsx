import { useState } from 'react'
import { Box, TextField } from '@mui/material'
import { DateRangePicker, DateRange } from '@mui/x-date-pickers-pro'

export const MuiDateRangePicker = () => {
  const [value, setValue] = useState<DateRange<Date>>([null, null])

  console.log({ value })

  return (
    <Box width="500px">
      <DateRangePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        renderInput={(startProps, endProps) => (
          <>
            <TextField {...startProps} />
            <Box sx={{ mx: 2 }}>to</Box>
            <TextField {...endProps} />
          </>
        )}
      />
    </Box>
  )
}
