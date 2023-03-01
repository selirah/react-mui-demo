import { Stack, Alert, AlertTitle, Button } from '@mui/material'
import { Check } from '@mui/icons-material'

export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is a success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is a success alert
      </Alert>

      <Alert variant="filled" severity="error" onClose={() => alert('Closed alert')}>
        <AlertTitle>Error</AlertTitle>
        This is an error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<Check fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is a success alert
      </Alert>
    </Stack>
  )
}
