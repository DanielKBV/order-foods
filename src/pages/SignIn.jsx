import { TextField, styled, Button, Typography } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import InputPassword from '../components/UI/InputPassword/InputPassword'
import { useDispatch } from 'react-redux'
import { signIn } from '../store/auth/authThunk'
import { ActionsTypeSnackbar } from '../store/snackbar/snackbar'

const schema = z.object({
  email: z.string().email('Incorrect E-Mail Address'),
  password: z.string().min(4),
})

export const SignIn = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const submitHandler = async (values) => {
    try {
      await dispatch(signIn(values)).unwrap()
      navigate('/')
      dispatch(ActionsTypeSnackbar.doSuccess())
    } catch (error) {
      dispatch(
        ActionsTypeSnackbar.doError(
          error ? error.message : 'Something went wrong'
        )
      )
    }
  }

  const { handleSubmit, register, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'onChange',
    resolver: zodResolver(schema),
  })

  return (
    <Container>
      <Box>
        <Form onSubmit={handleSubmit(submitHandler)}>
          <ContainerInput>
            <TextField
              label="Email"
              error={!!formState.errors.email}
              {...register('email')}
              sx={{ width: '100%' }}
            />

            {formState.errors.email && (
              <Typography sx={{ color: '#ff0000' }}>
                {formState.errors.email.message}
              </Typography>
            )}

            <InputPassword
              error={!!formState.errors.password}
              register={{ ...register('password') }}
              label="Password"
              width="100%"
            />

            {formState.errors.password && (
              <Typography sx={{ color: '#ff0000' }}>
                {formState.errors.password.message}
              </Typography>
            )}
          </ContainerInput>
          <Button
            sx={{ padding: '10px 20px', fontSize: '1.2rem' }}
            variant="contained"
            type="submit"
          >
            Sign In
          </Button>
        </Form>
        <LinkBox>
          <p>
            Create an account {'  '}
            <Link style={{ textDecoration: 'none' }} to="/signUp">
              Sign Up
              {'  '}
              {'->'}
            </Link>
          </p>
        </LinkBox>
      </Box>
    </Container>
  )
}

const Container = styled('div')`
  margin: 0 auto;
  padding-top: 80px;
  width: 500px;
`

const Box = styled('div')`
  background-color: #fff;
  padding: 20px;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Form = styled('form')`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const ContainerInput = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

const LinkBox = styled('div')`
  display: flex;
  justify-content: flex-end;
  font-size: 1.2rem;
`
