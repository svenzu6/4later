import { Container } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormLabel from '@material-ui/core/FormLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import React from 'react'

import { useStyles } from './LinkAdd.styles'

export const LinkAdd: React.FunctionComponent = () => {
    const classes = useStyles()

    return (
        <Container>
            <Typography
                color="textSecondary"
                component="h2"
                gutterBottom={true}
                variant="h6"
            >
                Add a Link
            </Typography>

            <form
                autoComplete="off"
                noValidate={true}
            >
                <TextField
                    className={classes.field}
                    color="secondary"
                    fullWidth={true}
                    label="Link Title"
                    required={true}
                    variant="outlined"
                />
                <TextField
                    className={classes.field}
                    color="secondary"
                    fullWidth={true}
                    label="Description"
                    multiline={true}
                    required={true}
                    rows={4}
                    variant="outlined"
                />
                <FormControl className={classes.field}>
                    <FormLabel>
                        Link Category
                    </FormLabel>
                    <RadioGroup>
                        <FormControlLabel
                            control={<Radio />}
                            label="Entertainment"
                            value="entertainment"
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="Education"
                            value="education"
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="Music"
                            value="music"
                        />
                        <FormControlLabel
                            control={<Radio />}
                            label="Work"
                            value="work"
                        />
                    </RadioGroup>
                </FormControl>
                <Button
                    color="secondary"
                    endIcon={<KeyboardArrowRightIcon />}
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </form>
        </Container>
    )
}
