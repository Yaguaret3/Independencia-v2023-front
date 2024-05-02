import React, { useContext } from 'react';
import {
  AppBar, Toolbar, Box, Table,
  TableHead, TableRow, TableCell, TableContainer, TableBody
} from '@mui/material';
import { CapitanContext } from '../Context';


const BarraInferior = () => {

  //const {playerData} = useContext(CapitanContext);

  return (
    <AppBar position="static" color="warning" sx={{ top: 'auto', bottom: 0, height: '10vh' }}>
      <Toolbar>
        <Box sx={{
          mr: 3, height: '100%', display: 'flex', alignItems: 'center',
          paddingLeft: '5vh'
        }}>
          <TableContainer style={{ height: '100%', maxHeight: '100%', overflow: 'hidden', alignItems: 'center' }}>
            <Table style={{ tableLayout: 'fixed' }}>
              <TableHead>
                <TableRow>
                  <TableCell style={{ color: 'white', padding: '0.6vh', textAlign: 'center' }}>

                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell style={{ color: 'white', padding: 0, textAlign: 'center' }}>

                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default BarraInferior