import { useState } from 'react'
import { Stack, Chip, Avatar } from '@mui/material'
import { Face } from '@mui/icons-material'

export const MuiChip = () => {
  const [chips, setChips] = useState(['Chip 1', 'Chip 2', 'Chip 3'])

  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete))
  }

  return (
    <Stack spacing={1} direction="row">
      <Chip label="Chip" color="primary" size="small" icon={<Face />} />
      <Chip
        label="Chip outlined"
        color="secondary"
        size="small"
        variant="outlined"
        avatar={<Avatar>V</Avatar>}
      />
      <Chip label="Click" color="success" size="small" onClick={() => alert('Clicked')} />
      <Chip
        label="Delete"
        color="error"
        size="small"
        onClick={() => alert('Clicked')}
        onDelete={() => alert('Delete handler called')}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} size="small" />
      ))}
    </Stack>
  )
}
