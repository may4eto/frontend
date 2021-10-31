import * as React from 'react'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'
import Button from '@mui/material/Button'
import { PickerOverlay } from 'filestack-react'
import { useTranslation } from 'react-i18next'

export default function FileUploaderModal() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const { t } = useTranslation()

  return (
    <div>
      <Button onClick={handleOpen}>{t('components.modal.upload-image')}</Button>
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box>
            <PickerOverlay
              apikey={'AVZuTFWbJTxCq6DwUN9Zlz'}
              onSuccess={(res: unknown) => console.log(res)}
              onUploadDone={(res: unknown) => console.log(res)}
              pickerOptions={{
                onClose: () => setOpen(false),
              }}
            />
          </Box>
        </Fade>
      </Modal>
    </div>
  )
}
