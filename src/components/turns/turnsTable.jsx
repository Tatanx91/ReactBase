import React from 'react'
//import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

export const TurnTable = props => {

  return (
    <div>
        <div>
            <label htmlFor="Finicio">Fecha inicio:</label><input type="string" name='Finicio' />
            <label htmlFor="Ffin">Fecha fin: </label><input type="string" name='Ffin' />
            <label htmlFor="servicio">Servicio: </label><input type="string" name='servicio'/>
        </div>
        <div>
            <button>Generar Turnos</button>
        </div>
    </div>
    
  )
}
