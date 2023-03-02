import { Stack } from '@mui/material'
import { LoadingButton } from '@mui/lab'
import { Save } from '@mui/icons-material'

export const MuiLoadingButton = () => {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton loading variant="outlined">
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading..." loading>
        Fetch data
      </LoadingButton>
      <LoadingButton variant="contained" loadingPosition="start" startIcon={<Save />}>
        Save
      </LoadingButton>
      <LoadingButton loading variant="contained" loadingPosition="start" startIcon={<Save />}>
        Save
      </LoadingButton>
    </Stack>
  )
}
