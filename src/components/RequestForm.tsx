import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Checkbox,
} from "@chakra-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RequestForm = () => {
  const [isSending, setSending] = useState(false);
  const smsRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const SignupSchema = Yup.object().shape({
    acceptedTerms: Yup.bool().oneOf(
      [true],
      "Accepting the Terms of Service and Privacy Policy is required."
    ),
    smsNumber: Yup.string()
      .nullable()
      .matches(smsRegExp, "Phone number is not valid. Please try again."),
    name: Yup.string().nullable().optional,
  });

  const validateName = (value) => {
    let error;
    if (!value) {
      error = "Name is required";
    } else if (value !== "Jonathan") {
      error = "Please enter that's not Jonatahn!";
    }
    return error;
  };
  // const handleSubmit = async (values) => {
  //   setSending(true);

  //   const res = await fetch("", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       // data: img,
  //       // uuid: uuid,
  //       // sms: values.smsNumber,
  //       // name: name,
  //     }),
  //     headers: {
  //       "Content-type": "application/json",
  //     },
  //   });

  //   const fileResponse = await res.json();
  //   console.log("response", fileResponse);
  //   if (fileResponse) {
  //     setSending(false);
  //     alert("sent!");
  //   }
  // };

  return (
    <Box>
      <Heading>Request Form</Heading>
      <Formik
        initialValues={{
          // smsNumber: null,
          // acceptedTerms: false,
          // imageInfo: img,
          name: "testing",
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form>
            <Field name="name" validate={validateName}>
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">First name</FormLabel>
                  <Input {...field} id="name" placeholder="name" />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSending}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RequestForm;
