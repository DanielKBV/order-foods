import { styled, Fab, Grid, IconButton } from '@mui/material'
import React, { useState } from 'react'
import { AppTable } from './table/AppTable'
import { useClientSidePagination } from '../../hook/useClientSidePagination'
import { useDispatch, useSelector } from 'react-redux'
import AddIcon from '@mui/icons-material/Add'
import MealModal from '../../components/UI/modal/MealModal'
import { useSearchParams } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import {
  deleteAdminMeals,
} from '../../store/adminMeals/adminMealsThunk'
import { ActionsTypeSnackbar } from '../../store/snackbar/snackbar'

export const Meals = () => {
  const dispatch = useDispatch()
  const { meals } = useSelector((state) => state.meals)
  const [open, setOpen] = useSearchParams()
  const [editData, setEditData] = useState()

  const { styleBodyMeals, styleHeaderMeals, resultAdminMeals } =
    useClientSidePagination()

  const closeModal = () => {
    open.delete('modal')
    open.delete('mealId')
    setOpen(open)
  }

  const openModalHandler = (mode) => {
    open.set('modal', mode)
    setOpen(open)
  }

  const deleteMealHandler = async (id) => {
    try {
      const response = await dispatch(deleteAdminMeals(id)).unwrap()
      dispatch(ActionsTypeSnackbar.doSuccess(response.message))
    } catch (error) {
      dispatch(
        ActionsTypeSnackbar.doError(
          error ? error.response.data.message : 'Something went wrong'
        )
      )
    }
  }

  const editMealHandler = (data) => {
    setEditData(data)
    openModalHandler('edit')
    open.set('mealId', data._id)
    setOpen(open)
  }

  const columns = [
    {
      header: '№',
      key: '_id',
      index: true,
    },
    {
      header: 'Title',
      key: 'title',
    },
    {
      header: 'Description',
      key: 'description',
      fontStyle: 'italic',
      fontWeight: 400,
    },
    {
      header: 'Price',
      key: 'price',
      color: '#ad5502',
      number: true,
      fontWeight: 600,
    },
    {
      header: 'Actions',
      key: 'actions',
      render: (meal) => {
        return (
          <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
            <IconButton onClick={() => editMealHandler(meal)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteMealHandler(meal._id)}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        )
      },
    },
  ]

  return (
    <>
      <MealModal open={open} onClose={closeModal} editData={editData} />
      <Container>
        <div>
          <AppTable
            rows={meals}
            styleHeader={styleHeaderMeals}
            styleBody={styleBodyMeals}
            result={resultAdminMeals}
            id={(id) => id._id}
            columns={columns}
          />
        </div>
        <AddContainer>
          <ContainerIcon
            onClick={() => openModalHandler('add')}
            color="primary"
            aria-label="add"
          >
            <AddIcon sx={{ fontSize: '50px' }} />
          </ContainerIcon>
        </AddContainer>
      </Container>
    </>
  )
}

const Container = styled('div')`
  padding: 60px 80px;
`

const ContainerIcon = styled(Fab)`
  color: #fff;
  width: 76px;
  height: 76px;
  background-color: #8a2b06;

  &:hover {
    background-color: #a83508;
  }
`

const AddContainer = styled('div')`
  position: fixed;
  top: 84%;
  left: 48%;
  z-index: 100;
  animation: pulse 3s linear infinite;
  border-radius: 50%;

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(138, 43, 6, 0.427),
        0 0 0 0 rgba(138, 43, 6, 0.604);
    }
    40% {
      box-shadow: 0 0 0 50px rgba(38, 186, 48, 0),
        0 0 0 0 rgba(138, 43, 6, 0.423);
    }
    80% {
      box-shadow: 0 0 0 50px rgba(23, 181, 81, 0),
        0 0 0 30px rgba(9, 210, 42, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(3, 178, 17, 0), 0 0 0 30px rgba(2, 197, 61, 0);
    }
  }
`
