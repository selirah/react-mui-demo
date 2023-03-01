import { useState } from 'react'
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material'

export const MuiDialog = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Button color="primary" variant="contained" onClick={() => setOpen(true)}>
        Open dialog
      </Button>
      <Dialog
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
        open={open}
        onClick={() => setOpen(false)}
      >
        <DialogTitle id="dialog-title">Submit the test?</DialogTitle>
        <DialogContent>
          <DialogContentText id="dialog-description">
            Are you sure you want to submit the test? You will not be able to edit after submitting
          </DialogContentText>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
            <Button autoFocus onClick={() => setOpen(false)}>
              Submit
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  )
}
