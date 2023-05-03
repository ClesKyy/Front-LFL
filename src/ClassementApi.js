import axios from "axios";
import { styled } from '@mui/material/styles';
import { useEffect, useState } from "react";
import * as React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Team from "./Team";
import './App.css';
import AppHeader from "./AppHeader";
import Classement from "./Classement";
import { Paper, Table, TableContainer, TableHead, TableRow } from "@mui/material";


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(position, name, game, win, lose) {
  return { position, name, game, win, lose };
}

const rows = [
  createData(1, 'Aegis', 6.0, 24, 4.0, 1),
  createData(1, 'Aegis', 6.0, 24, 4.0, 1),
  createData(1, 'Aegis', 6.0, 24, 4.0, 1),
  createData(1, 'Aegis', 6.0, 24, 4.0, 1),
  createData(1, 'Aegis', 6.0, 24, 4.0, 1),

];
function ClassementApi(props) {

  const [team, setTeam] = useState([]);
  useEffect(() => {
    axios.get("https://localhost:7108/team/order", {
    }).then((res) => {
      console.log(res.data)
      setTeam(res.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  return (
    <div>
      <AppHeader />
      <div>
        <div className='ranking'>
          <div>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 1000 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="left">Position</StyledTableCell>
                    <StyledTableCell>Nom</StyledTableCell>
                    <StyledTableCell align="right">Partie</StyledTableCell>
                    <StyledTableCell align="right">Victoire</StyledTableCell>
                    <StyledTableCell align="right">Défaite</StyledTableCell>
                  </TableRow>
                </TableHead>
                {team.map((item, index) => (
                  <Classement key={index} team={item} />
                ))}
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClassementApi;
