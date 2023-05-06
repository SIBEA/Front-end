import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import lupa from './../resources/lupa.png';
import image from './../resources/pic2.png'; 
import './css/search-results.css';
import TextField from '@mui/material/TextField';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import toast from 'react-hot-toast'
import { CardContent, Input } from '@mui/material';
import { Box, padding, positions } from '@mui/system';  
import { Card } from '@mui/material';
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
//import { useRouter } from 'next/navigation'
import { styled } from '@mui/material/styles';  
import Paper from '@mui/material/Paper';

function Results() {

  const [texto, setTexto] = React.useState('');

  const MSG_MAX_LENGHT = 160
  const FINAL_MAX_LENGHT = 320

  const { handleSubmit, formState: { isDirty, isSubmitting, errors } } = useForm();

  //const router = useRouter();

  const [smsData, setSmsData] = React.useState({
    message: "",
    phoneNumber: "",
    availableMsg: "",
    visiblePhoneNumber: "",
    realPhoneNumber: "",
    showLenghtMsg: false,
  });

  const [open, setOpen] = React.useState(false);

  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  const handleClickOpen = () => {
    if(smsData.phoneNumber && smsData.message && smsData.phoneNumber.length !== 0 && smsData.message.trim() !== ""){
      setOpen(true);
    }else{
      toast.error("Teléfono y mensaje son mandatorios")
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const resetForm = () => {
   setSmsData({
      message: "",
      availableMsg: "",
      visiblePhoneNumber: "",
      realPhoneNumber: "",
      showLenghtMsg: false 
    });
  }
  
  const handleInputChange = (e) => {
    setSmsData(oldValues  => (
      {
        ...oldValues,
        message: e.target.value, 
        showLenghtMsg: (e.target.value.length >= MSG_MAX_LENGHT ? true : false)
      }));
  };

  const handleSubmitFunction = () => {

    const loadData = async () => {
      let request = {
        message: smsData.message,
        phoneNumber: smsData.phoneNumber,
        country: smsData.country,
      };

      setOpen(false);
    };

    loadData();
  }
  
  const ListItem = styled('li')(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));
  
  const handleAddNumber = (value, country, event, formattedValue) => {
    const phoneNumber = value.slice(country.dialCode.length);

    if(phoneNumber.length < 10) {

    }
    
    setSmsData(oldValues => (
        {
          ...oldValues,
          realPhoneNumber: phoneNumber
        }));
      
    event.preventDefault();
  };

  const handleOnKeyPress = (event) => {
    
    if(event.key == 'Enter'){

      if(smsData.realPhoneNumber.length < 10) {
        toast.error("El número debe tener 10 digitos");
        return;
      }

      chipData.push(
        { 
          key: Number.parseInt(smsData.realPhoneNumber), 
          label: smsData.realPhoneNumber
        });

        smsData.phoneNumber.push(smsData.realPhoneNumber);

        setSmsData(oldValues => (
          {
            ...oldValues,
            realPhoneNumber: "",
            visiblePhoneNumber: ""
          }));
        
        event.preventDefault();
    }
  };

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    smsData.phoneNumber.splice(smsData.phoneNumber.indexOf(chipToDelete.label), 1);
  };
 
  return (
    <>
      <Card 
        sx={{
          marginBlock: '30px',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center'
        }}>
        <CardHeader title='Envío 1 a 1' />
        <CardContent>
          <Box
              sx={{
                display: 'flex',
                flexFlow: 'column',
                alignItems: 'flex-end'
              }}>
              <Typography
                  sx={{
                    lineHeight: 2,
                    fontWeight: 500,
                    fontSize: '0.65rem',
                    letterSpacing: '0.17px',
                    marginBottom: '2px',
                  }}>
                  Disponible
              </Typography>
              <Chip
                  sx={{ 
                    height: 20, 
                    fontSize: '0.75rem', 
                    fontWeight: 500, 
                    width: '55px',
                  }}
                  label={smsData.currentBalance}
              />
          </Box>
          
          <Box sx={{ mb: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> 
              <form onSubmit={handleSubmit(handleSubmitFunction)}>
                <Box>
                  <Typography 
                      sx={{
                        lineHeight: 2,
                        fontWeight: 500,
                        fontSize: '0.75rem',
                        letterSpacing: '0.17px',
                        paddingBottom: '10px',
                        paddingTop: '20px',
                    }}
                  >
                    Ingrese el número de celular y presione "Enter"
                  </Typography>
                </Box>
                <Box>
                  <Paper
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      listStyle: 'none',
                      width: '100%',
                      maxWidth: "300px",
                      border: '0px !important',
                      paddingInlineStart: '0px'
                    }}
                    component="ul"
                    variant='outlined'
                  >
                    {chipData.map((data) => {
                      return (
                        <ListItem key={data.key}>
                          <Chip 
                            sx={{marginBottom: "10px"}}
                            label={data.label}
                            onDelete={data.label === 'React' ? undefined : handleDelete(data)}
                          />
                        </ListItem>
                      );
                    })}
                  </Paper>
                </Box>
                <Box
                    sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'left',
                      justifyContent: 'left',
                      width: '100%'
                      
                    }}>
                  <Typography 
                          sx={{
                            lineHeight: 2,
                            fontWeight: 500,
                            fontSize: '0.75rem',
                            letterSpacing: '0.17px',
                            paddingBottom: '10px'
                        }}>
                        Escriba su mensaje aquí
                  </Typography>
                </Box>  
                <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      flexDirection: 'column',
                      paddingBottom: '90px'
                      
                    }}>
                  <TextField
                    id="outlined-multiline-static"
                    label="Mensaje de prueba"
                    multiline
                    rows={3}
                    fullWidth
                    variant='outlined'
                    onChange={(e) => handleInputChange(e)}
                    inputProps={{ maxLength: FINAL_MAX_LENGHT }}
                    defaultValue={""}
                    required
                    helperText={smsData.showLenghtMsg ? 'El mensaje supera los 160 caracteres. Se descontaran 2 mensajes' : "" }
                    disabled={false}
                  />
                </Box>
                <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: {
                        xs: 'center',
                        md: 'left',
                        lg: 'left',
                        xl: 'left'
                      }
                    }}>
                  <Button 
                    sx={{
                      width: {
                        xs: "100%", 
                        md: "80%",
                        lg: "99%", 
                        xl: "100%"
                      }
                    }}
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleClickOpen}> 
                    Enviar
                  </Button>
                  <Dialog
                    open={open}
                    keepMounted
                    onClose={handleClose}
                    aria-describedby="alert-dialog-slide-description"
                    >
                    <DialogTitle>{"Confirmación"}</DialogTitle>
                    <DialogContent>
                      <DialogContentText sx={{paddingBottom: '25px'}} id="alert-dialog-slide-description">
                        ¿Está seguro de enviar el mensaje SMS?
                      </DialogContentText>
                      <Typography sx={{color: '#666CFF', fontWeight: '500'}}>Destinatario</Typography>
                      <TextField 
                        value={smsData.phoneNumber}
                        disabled={true}/>
                      <Typography sx={{paddingTop: '25px', color: '#666CFF', fontWeight: '500'}}>Mensaje</Typography>
                      <TextField 
                        id="outlined-multiline-static"
                        multiline
                        rows={3}
                        fullWidth
                        variant='outlined'
                        disabled={true}
                        value={smsData.message}/>
                    </DialogContent>
                    <DialogActions>
                      <Button onClick={handleClose}>Editar</Button>
                      <Button onClick={handleSubmitFunction}>Enviar</Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </form>
          </Box>
        </CardContent>
      </Card>
    </>
  )
  }

export default Results;