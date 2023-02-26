import { Button, ButtonBase, Container, Stack, TextField } from '@mui/material'
import React from 'react'

export default function ResetUserPassword() {
  return (
    <Container maxWidth="xs" sx={{mt:5}}>
        <h2>Şifre Sıfırlama</h2>
        <form>
            <Stack spacing={3}>
                <TextField
                sx={{width:500}}
                color="success"
                id=''
                name=''
                label='Password'
                placeholder='Password'
                ></TextField>
                <TextField
                sx={{width:500}}
                color="success"
                id=''
                name=''
                label='Password Confirm'
                placeholder='Password Confirm'
                ></TextField>
                <Button   sx={{width:500}} type='submit' variant='contained'>Save</Button>
            </Stack>
        </form>
    </Container>
  )
}
