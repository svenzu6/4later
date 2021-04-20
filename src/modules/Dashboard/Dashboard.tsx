import {
    Button,
    Dialog,
    DialogActions,
    Toolbar,
} from '@material-ui/core'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import React from 'react'

import {
    DialogForm,
    FormTitle,
    StyledDialogContent,
    StyledTextField,
    TopBar,
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
        <TopBar>
            <Toolbar>
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
                        <FormTitle
                            color="textSecondary"
                            variant="h6"
                        >
                            Add a Link
                        </FormTitle>
                        <StyledDialogContent>
                            <DialogForm>
                                <StyledTextField
                                    color="secondary"
                                    fullWidth={true}
                                    label="URL"
                                    required={true}
                                    variant="outlined"
                                />
                                <StyledTextField
                                    color="secondary"
                                    fullWidth={true}
                                    label="Link Title"
                                    required={true}
                                    variant="outlined"
                                />
                                <StyledTextField
                                    color="secondary"
                                    fullWidth={true}
                                    label="Description"
                                    multiline={true}
                                    rows={4}
                                    variant="outlined"
                                />
                            </DialogForm>
                        </StyledDialogContent>
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
            </Toolbar>
        </TopBar>
    )
}
