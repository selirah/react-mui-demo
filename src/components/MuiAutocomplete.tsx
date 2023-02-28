import { useState } from 'react'
import { Stack, Autocomplete, TextField } from '@mui/material'

const skills = ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React']

type Skill = {
  id: number
  label: string
}

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill
}))

export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null)
  const [skill, setSkill] = useState<Skill | null>(null)

  console.log({ skill })

  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        // multiple
        value={value}
        onChange={(_event, newValue) => setValue(newValue)}
        // freeSolo
      />
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(_event, newValue) => setSkill(newValue)}
      />
    </Stack>
  )
}
