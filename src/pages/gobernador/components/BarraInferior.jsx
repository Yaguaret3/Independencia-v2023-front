import React, { useContext } from 'react';
import {
  AppBar, Toolbar, Typography, Box, Table,
  TableHead, TableRow, TableCell, TableContainer, TableBody
} from '@mui/material';
import { GobernadorContext } from '../Context';


const BarraInferior = () => {

  const {playerData} = useContext(GobernadorContext);

  return (
      <AppBar position="static" color='warning'>
        <Toolbar>
          <Box >
            <Table style={{ tableLayout: 'fixed' }}>
              <TableHead>
                <TableRow>
                  <TableCell align={"center"} sx={{color: 'white'}}>
                    Plata: {playerData?.plata}
                  </TableCell>
                  <TableCell align={"center"} sx={{color: 'white'}}>
                    Milicia: {playerData?.milicia}
                  </TableCell>
                  <TableCell align={"center"} sx={{color: 'white'}}>
                    Impuestos: {playerData?.city?.taxesLevel}
                  </TableCell>
                  <TableCell align={"center"} sx={{color: 'white'}}>
                    Opinión Pública: {playerData?.city?.publicOpinion}
                  </TableCell>
                  <TableCell align={"center"} sx={{color: 'white'}}>
                    Nivel comercial: {playerData?.city?.marketLevel}
                  </TableCell>
                </TableRow>
              </TableHead>
            </Table>
          </Box>
        </Toolbar>
      </AppBar>
  )
}

export default BarraInferior