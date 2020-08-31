import React, { useState, useCallback } from 'react'
import axios from 'axios'
import { Formik, Form, FastField, ErrorMessage } from 'formik'
import Recaptcha from 'react-google-recaptcha'
import * as Yup from 'yup'
import styled from 'styled-components'

const Center = styled.div`
  text-align: left;

  h4 {
    font-weight: normal;
  }
`

import { Button } from 'components/common'
import { Field, Error, Input } from 'components/common/Form'

type Values = {
  name: string
  email: string
  message: string
  recaptcha: string
}

const INITIAL_VALUES: Values = {
  name: '',
  email: '',
  message: '',
  recaptcha: '',
}

const VALIDATION_SCHEMA = Yup.object().shape({
  name: Yup.string().required('Full name field is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email field is required'),
  message: Yup.string().required('Message field is required'),
  recaptcha: Yup.string().required('Robots are not welcome yet!'),
})

export const ContactForm = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(null)

  const onSubmit = useCallback(
    async (
      { name, email, message },
      { setSubmitting, resetForm, setFieldValue }
    ) => {
      setSuccess(false)
      setError(null)

      try {
        await axios({
          method: 'POST',
          url: `${process.env.GATSBY_PORTFOLIO_FORMIK_ENDPOINT}`,
          headers: {
            'Content-Type': 'application/json',
          },
          data: JSON.stringify({
            name,
            email,
            message,
          }),
        })

        setSubmitting(false)
        setSuccess(true)
        setTimeout(() => resetForm(), 6000)
      } catch (err) {
        setSubmitting(false)
        setSuccess(false)
        setError('Something went wrong, please try again!')
      }
    },
    []
  )

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      validationSchema={VALIDATION_SCHEMA}
      onSubmit={onSubmit}
    >
      {({ values, touched, errors, setFieldValue, isSubmitting }) => (
        <Form>
          <Field>
            <Input
              as={FastField}
              type='text'
              name='name'
              component='input'
              aria-label='name'
              placeholder='Full name*'
              error={touched.name && errors.name}
            />
            <ErrorMessage component={Error} name='name' />
          </Field>
          <Field>
            <Input
              id='email'
              aria-label='email'
              component='input'
              as={FastField}
              type='email'
              name='email'
              placeholder='Email*'
              error={touched.email && errors.email}
            />
            <ErrorMessage component={Error} name='email' />
          </Field>
          <Field>
            <Input
              as={FastField}
              component='textarea'
              aria-label='message'
              id='message'
              rows='8'
              type='text'
              name='message'
              placeholder='Message*'
              error={touched.message && errors.message}
            />
            <ErrorMessage component={Error} name='message' />
          </Field>
          {values.name && values.email && values.message && (
            <Field>
              <FastField
                component={Recaptcha}
                sitekey={process.env.GATSBY_PORTFOLIO_RECAPTCHA_KEY}
                name='recaptcha'
                onChange={(value) => setFieldValue('recaptcha', value)}
              />
              <ErrorMessage component={Error} name='recaptcha' />
            </Field>
          )}
          {success && (
            <Field>
              <Center>
                <h4>
                  Your message has been successfully sent, I will get back to
                  you ASAP!
                </h4>
              </Center>
            </Field>
          )}
          {error && (
            <Field>
              <Center>
                <Error as='h4'>{error}</Error>
              </Center>
            </Field>
          )}
          <Center>
            <Button type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </Center>
        </Form>
      )}
    </Formik>
  )
}
