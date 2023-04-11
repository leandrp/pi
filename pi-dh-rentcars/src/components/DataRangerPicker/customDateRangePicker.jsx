import React from 'react'
import { DateRangePicker } from 'rsuite'


function CustomDateRangePicker(props) {
  const { beforeToday } = DateRangePicker

  return (
    <DateRangePicker
      {...props}
      disabledDate={beforeToday()}
      format="dd-MM-yyyy HH:mm"
      locale={{
        sunday: 'Dom',
        monday: 'Seg',
        tuesday: 'Ter',
        wednesday: 'Qua',
        thursday: 'Qui',
        friday: 'Sex',
        saturday: 'Sab',
        ok: 'Aplicar',
        today: 'Hoje',
        yesterday: 'Ontem',
        hours: 'Horas',
        minutes: 'Minutos'
      }}
      placeholder="Data e Hora: Retidada | Devolução"
    />
  )
}

export default CustomDateRangePicker