import { useState } from 'react'

export const useClientSidePagination = () => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(8)

  const handleChangePage = (newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value)
  }

  const paginate = (rows) => {
    return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  }

  const styleHeaderMeals = (column) => {
    if (column) {
      return column.color || column.fontStyle
        ? {
            color: column.color,
            fontStyle: column.fontStyle,
            fontSize: '1.4rem',
            fontWeight: 600,
          }
        : { fontSize: '1.4rem', fontWeight: 600 }
    }
  }

  const styleHeaderOrders = (column) => {
    if (column) {
      return column.color || column.fontStyle
        ? {
            color: column.color,
            fontStyle: column.fontStyle,
            fontSize: '1.4rem',
            fontWeight: 600,
          }
        : { fontSize: '1.4rem', fontWeight: 600 }
    }
  }

  const styleBodyMeals = (column) => {
    return column.color || column.fontStyle
      ? {
          color: column.color,
          fontStyle: column.fontStyle,
          fontWeight: column.fontWeight,
          fontSize: '1.4rem',
        }
      : { fontSize: '1.4rem', fontWeight: 500 }
  }

  const styleBodyOrders = (column) => {
    return column.color || column.fontStyle
      ? {
          color: column.color,
          fontStyle: column.fontStyle,
          fontWeight: column.fontWeight,
          fontSize: '1.4rem',
        }
      : { fontSize: '1.4rem', fontWeight: 500 }
  }

  const resultAdminMeals = (column, rowIndex, row) => {
    const value = column.index ? rowIndex + 1 : row[column.key]

    const resultMeals = column.number ? `${row[column.key]}$` : value

    return resultMeals
  }

  const resultAdminOrders = (column, rowIndex, row) => {
    const value = column.index ? rowIndex + 1 : row[column.key]

    const resultMeals = column.number ? `${row[column.key]}$` : value

    return resultMeals
  }

  return {
    page,
    rowsPerPage,
    handleChangePage,
    handleChangeRowsPerPage,
    paginate,
    styleBodyMeals,
    styleHeaderMeals,
    resultAdminMeals,
    resultAdminOrders,
    styleHeaderOrders,
    styleBodyOrders,
  }
}
