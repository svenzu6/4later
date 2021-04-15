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
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import { useStyles } from './LinkAdd.styles'

export const LinkAdd: React.FunctionComponent = () => {
    const classes = useStyles()
    const router = useRouter()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [descriptionError, setDescriptionError] = useState(false)
    const [category, setCategory] = useState('money')

    const handleSubmit = (event) => {
        event.preventDefault()
        setTitleError(false)
        setDescriptionError(false)

        if (title == '') {
            setTitleError(true)
        }
        if (description == '') {
            setDescriptionError(true)
        }
        if (title && description) {
            void fetch('http://localhost:3000/dashboard', {
                body: JSON.stringify({ category: category, description: description, title: title }),
                headers: { 'Content-type': 'application/json' },
                method: 'POST',
            }).then(async () => router.push('/'))
        }
    }

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
                onSubmit={handleSubmit}
            >
                <TextField
                    className={classes.field}
                    color="secondary"
                    error={titleError}
                    fullWidth={true}
                    label="Link Title"
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                    required={true}
                    variant="outlined"
                />
                <TextField
                    className={classes.field}
                    color="secondary"
                    error={descriptionError}
                    fullWidth={true}
                    label="Description"
                    multiline={true}
                    onChange={(event) => {
                        setDescription(event.target.value)
                    }}
                    required={true}
                    rows={4}
                    variant="outlined"
                />
                <FormControl className={classes.field}>
                    <FormLabel>
                        Link Category
                    </FormLabel>
                    <RadioGroup
                        onChange={(event) => {
                            setCategory(event.target.value)
                        }}
                        value={category}
                    >
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
