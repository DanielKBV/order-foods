import { zodResolver } from '@hookform/resolvers/zod'
import { Box, Button, Grid, Modal, TextField, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import zod from 'zod'
import { useDispatch } from 'react-redux'
import {
  editAdminMeals,
  postAdminMeals,
} from '../../../store/adminMeals/adminMealsThunk'
import { ActionsTypeSnackbar } from '../../../store/snackbar/snackbar'
import { getMealById } from '../../../api/mealsService'
import { useEffect } from 'react'

const scheme = zod.object({
  title: zod.string().min(1, 'String must contain at least 1 character'),
  description: zod
    .string()
    .min(1, 'The string must contain at least 1 character'),
  price: zod.number().min(1, 'The number must be greater than or equal to 1'),
})

function MealModal({ open, onClose, editData }) {
  const dispatch = useDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    defaultValues: {
      price: 1,
      title: '',
      description: '',
    },

    mode: 'onChange',
    resolver: zodResolver(scheme),
  })

  const params = open.get('modal')

  useEffect(() => {
    const editDataForm = async () => {
      const id = open.get('mealId')
      const editData = await getMealById(id)

      reset(editData.data.data)
    }

    if (params === 'edit') {
      editDataForm()
    } else if (params === 'add') {
      reset()
    }
  }, [open, params, reset])

  const postAddNewMealsHandler = async (values) => {
    try {
      const response = await dispatch(postAdminMeals(values)).unwrap()
      console.log('response: ', response)

      dispatch(ActionsTypeSnackbar.doSuccess(response.message))
      onClose()
    } catch (error) {
      dispatch(
        ActionsTypeSnackbar.doError(error ? error : 'Something went wrong')
      )
    }
  }

  const putEditMealsHandler = async (newEditData) => {
    try {
      const response = await dispatch(editAdminMeals(newEditData)).unwrap()
      dispatch(ActionsTypeSnackbar.doSuccess(response.message))
      onClose()
    } catch (error) {
      dispatch(
        ActionsTypeSnackbar.doError(
          error ? error.message : 'Something went wrong'
        )
      )
    }
  }

  const submitHandler = async (values) => {
    const params = open.get('modal')

    if (params === 'add') {
      postAddNewMealsHandler(values)
    } else {
      const id = open.get('mealId')

      const newEditData = {
        ...values,
        id: id,
      }

      putEditMealsHandler(newEditData)
    }
  }

  return (
    <div>
      {open.has('modal') ? (
        <Modal open onClose={onClose}>
          <StyledModalContent>
            <Container>
              <Form onSubmit={handleSubmit(submitHandler)}>
                <TextField
                  label="Title"
                  type="search"
                  {...register('title')}
                  error={!!errors.title}
                />

                {errors.title && (
                  <Typography sx={{ color: '#ff0000' }}>
                    {errors.title.message}
                  </Typography>
                )}

                <TextField
                  label="Description"
                  type="search"
                  {...register('description')}
                  error={!!errors.description}
                />

                {errors.description && (
                  <Typography sx={{ color: '#ff0000' }}>
                    {errors.description.message}
                  </Typography>
                )}

                <TextField
                  label="Price"
                  type="number"
                  {...register('price', { valueAsNumber: true })}
                  error={!!errors.price}
                />

                {errors.price && (
                  <Typography sx={{ color: '#ff0000' }}>
                    {errors.price.message}
                  </Typography>
                )}

                <ButtonContainer>
                  <Button
                    variant="contained"
                    sx={{ color: '#fff' }}
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    sx={{ color: '#fff' }}
                    type="submit"
                  >
                    Save
                  </Button>
                </ButtonContainer>
              </Form>
            </Container>
          </StyledModalContent>
        </Modal>
      ) : null}
    </div>
  )
}

export default MealModal

const Container = styled(Grid)`
  padding: 10px;
`

const ButtonContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`

const StyledModalContent = styled(Box)(({ theme }) => ({
  '& ': {
    position: 'fixed',
    top: '26%',
    left: '30%',
    width: '40%',
    backgroundColor: theme.palette.success.contrastText,
    padding: '1rem',
    borderRadius: '14px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.25)',
    zIndex: '30',

    animation: 'slide-down 300ms ease-out forwards',

    '@keyframes slide-down': {
      from: {
        opacity: '0',
        transform: 'translateY(-3rem)',
      },
      to: {
        opacity: '1',
        transform: 'translateY(0)',
      },
    },
  },
}))
