import { Paper, Container, Grid , Box, Typography, Divider, TextField, ThemeProvider} from '@mui/material'
import React from 'react'
import { styled } from '@mui/material/styles';
import { createTheme, useTheme } from '@mui/system';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  



export default function EditItem() {
 
  return (
    <Box>
        <Grid container spacing={2}>

        <Grid item xs={9}>
            <Item>
                <Box sx={{display:"flex", justifyContent:"space-between"}}>
                    <Box component="span">
                        <Typography  display="inline" variant="subtitle2">Date: </Typography>
                        <Typography  display="inline"variant="string">2023-05-05</Typography>
                    </Box>
                    <Box component="span">
                        <Typography  display="inline" variant="subtitle2">Due Date: </Typography>
                        <Typography  display="inline"variant="string">2023-07-25</Typography>
                    </Box>
                </Box>

                <Grid item xs={12}>
                    <Typography variant='h5'>Invoice #001</Typography>
                    <Divider />
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextField  
                            InputLabelProps={{
                                style: {
                                  fontSize: 14,
                                  backgroundColor: '#FFF',
                                  paddingLeft: 4,
                                  paddingRight: 4,
                                  color: '#383838',
                                },
                              }}
                              inputProps={{
                                style: {
                                  fontSize: 14,
                                  height: 40,
                                  width: 272,
                                  padding: '0 14px',
                                  fontWeight: 'bold'
                                },}}
                                id="filled-basic" variant="filled" />
                            
                        </Grid>
                        <Grid item xs={6}>
                            <TextField  size="small" id="filled-basic" variant="filled" />
                        </Grid>
                    </Grid>
            
                </Grid>
            </Item>
        </Grid>
        <Grid item xs={3}>
            DOWNLOAD
        </Grid>
        <Grid item xs={4}>
            <Item>xs=4</Item>
        </Grid>
        <Grid item xs={8}>
            <Item>xs=8</Item>
        </Grid>
        </Grid>
  
    </Box>
   
  )
}

/*
  const theme = createTheme({
    components: {
      MuiTextField: {
        defaultProps: {
          size: "small",
        },
      },
      MuiFormControl: {
        defaultProps: {
          size: "small",
        },
      },
      MuiInputLabel: {
        defaultProps: {
          sx: {
            fontSize: "13px",
            top: 2,
          },
        },
        styleOverrides: {
          shrink: ({ ownerState, theme }) => ({
            ...(ownerState.shrink && {
              fontSize: "1rem !important",
              top: "-1 !important",
            }),
          }),
        },
      },
    },
  });

*/

/*

<TextField
    label="Search"
    InputProps={{ sx: { fontSize: "1.6vh", height: "3.3vh" } }}
    InputLabelProps={{ sx: { fontSize: "1.6vh", top: "-1.6vh", "&.MuiInputLabel-shrink": { top: 0 } } }}
/>
*/