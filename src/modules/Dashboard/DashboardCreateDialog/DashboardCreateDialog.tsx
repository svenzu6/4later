import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from '@material-ui/core'
import React from 'react'
import { useToggle } from 'react-use'

import { DashboardCreateDialogForm } from './DashboardCreateDialog.styles'

export const DashboardCreateDialog: React.FunctionComponent = () => {
    const [isOpen, toggleOpen] = useToggle(false)

    return (
        <>
            <Button
                color="secondary"
                onClick={toggleOpen}
                variant="outlined"
            >
                Add a new link
            </Button>
            <Dialog
                onClose={toggleOpen}
                open={isOpen}
            >
                <DialogTitle>
                    Add a Link
                </DialogTitle>
                <DialogContent>
                    <DashboardCreateDialogForm>
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
                    </DashboardCreateDialogForm>
                </DialogContent>
                <DialogActions>
                    <Button
                        color="secondary"
                        onClick={toggleOpen}
                    >
                        Cancel
                    </Button>
                    <Button
                        color="secondary"
                        onClick={toggleOpen}
                        type="submit"
                        variant="contained"
                    >
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
}
