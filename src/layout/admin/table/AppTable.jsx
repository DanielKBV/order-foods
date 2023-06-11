import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material'
import { useClientSidePagination } from '../../../hook/useClientSidePagination'

export const AppTable = ({
  rows,
  styleBody,
  styleHeader,
  result,
  id,
  withPagination = true,
  columns,
  editData,
}) => {
  const {
    handleChangePage,
    handleChangeRowsPerPage,
    page,
    rowsPerPage,
    paginate,
  } = useClientSidePagination()

  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden', padding: '10px' }}>
        <TableContainer sx={{ maxHeight: '100%' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    sx={() => styleHeader(column)}
                    key={column.key}
                    align={column.align || 'center'}
                  >
                    {column.header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {paginate(rows).map((row, rowIndex) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={id(row)}>
                    {columns.map((column) => {
                      if (column.render) {
                        return (
                          <TableCell key={column.key}>
                            {column.render(row)}
                          </TableCell>
                        )
                      }

                      return (
                        <TableCell
                          key={column.key}
                          align={column.align || 'center'}
                          sx={() => styleBody(column)}
                        >
                          {result(column, rowIndex, row)}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer>
        {withPagination && (
          <TablePagination
            rowsPerPageOptions={[8, 12, 100]}
            sx={{ fontSize: '1.2rem' }}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(e, newPage) => handleChangePage(newPage)}
            onRowsPerPageChange={(e) => handleChangeRowsPerPage(e)}
          />
        )}
      </Paper>
    </div>
  )
}
