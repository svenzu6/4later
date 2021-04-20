import {
    Button,
    Dialog,
    DialogActions,
    TextField,
} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import React from 'react'

import {
    DashboardDialogContent,
    DashboardDialogForm,
    DashboardFormTitle,
} from './Dashboard.styles'

export const Dashboard: React.FunctionComponent = () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div>
            <Button
                color="secondary"
                onClick={handleClickOpen}
                variant="outlined"
            >
                Add a new link
            </Button>
            <Dialog
                onClose={handleClose}
                open={open}
            >
                <DashboardFormTitle
                    color="textSecondary"
                    variant="h6"
                >
                    Add a Link
                </DashboardFormTitle>
                <DashboardDialogContent>
                    <DashboardDialogForm>
                        <TextField
                            color="secondary"
                            fullWidth={true}
                            label="URL"
                            required={true}
                            variant="outlined"
                        />
                        <TextField
                            color="secondary"
                            fullWidth={true}
                            label="Link Title"
                            required={true}
                            variant="outlined"
                        />
                        <TextField
                            color="secondary"
                            fullWidth={true}
                            label="Description"
                            multiline={true}
                            rows={4}
                            variant="outlined"
                        />
                    </DashboardDialogForm>
                </DashboardDialogContent>
                <DialogActions>
                    <Button
                        color="secondary"
                        endIcon={<KeyboardArrowRightIcon />}
                        onClick={handleClose}
                        type="submit"
                        variant="contained"
                    >
                        Add
                    </Button>
                    <Button
                        color="secondary"
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
