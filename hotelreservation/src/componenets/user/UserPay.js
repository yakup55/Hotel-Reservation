import { Button, Checkbox, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, FormGroup, TextField } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { openSnacbar } from '../../redux/actions/appActions';
import PaidIcon from "@mui/icons-material/Paid";
export default function UserPay() {
    const { user } = useSelector((state) => state.user);
    const dispacth=useDispatch();
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const pay = () => {
      dispacth(
        openSnacbar({
          message: "Ödemeniz Yapılmıştır Teşekkür Ederiz",
          severity: "success",
        })
      );
      setOpen(false);
    };
  return (
    <>
    <Button
      variant="contained"
      color="success"
      onClick={handleClickOpen}
    >
      <PaidIcon></PaidIcon>
    </Button>
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Ödeme Yap</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Bu alınan bilgiler formalite icabı için
          alınmaktadır herhangi bir yere kaydedilmemektedir
        </DialogContentText>
        <Stack spacing={3}>
          <TextField
            fullWidth
            value={user.data?.phoneNumber}
            label="Telefon Numaranız"
            variant="filled"
            color="success"
            focused
          />
          <TextField
            fullWidth
            value={user.data?.email}
            label="Email Adresiniz"
            variant="filled"
            color="success"
            focused
          />
          <TextField
            fullWidth
            label="Kart Numaranız"
            placeholder=".... .... .... ...."
            variant="filled"
            color="success"
            focused
          />
          <TextField
            fullWidth
            label="SKT"
            placeholder="AA/YY"
            variant="filled"
            color="success"
            focused
          />
          <TextField
            fullWidth
            label="CVC2"
            placeholder="***"
            variant="filled"
            color="success"
            focused
          />
          <FormGroup>
            <FormControlLabel
              control={<Checkbox />}
              label="ön bilgilendirme formunu okudum ve onaylıyorum"
            />
          </FormGroup>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Kapat</Button>
        <Button onClick={pay}>Öde</Button>
      </DialogActions>
    </Dialog>
  </>
  )
}
