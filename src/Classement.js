import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';
import AppHeader from './AppHeader';
import React, { useEffect } from 'react';

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

export default function Classement(props) {
  useEffect(() => {
  })
  return (
    <TableBody>
        <StyledTableRow >
          <StyledTableCell align="left">{props.team.position}</StyledTableCell>
          <StyledTableCell ><img className='classement-table-item-logo' src={props.team.logo}></img>{props.team.name.toUpperCase()}</StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
          <StyledTableCell align="right"></StyledTableCell>
        </StyledTableRow>
    </TableBody>
  );
}