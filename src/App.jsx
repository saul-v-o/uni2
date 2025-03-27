import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material"

function App() {

  const usersList = [
    {name:"Juan", lastName:"Mendoza", age:17}, 
    {name:"Luis", lastName:"Pérez", age:16}, 
    {name:"Jorge", lastName:"Fernández", age:21}]

    return (
      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell>Apellido</TableCell>
            <TableCell>Edad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {usersList.map((user, index) => (
            <TableRow key={index}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.lastName}</TableCell>
              <TableCell>{user.age}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

export default App
