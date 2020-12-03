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
  Select,
} from "@chakra-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RequestForm = () => {
  const [isSending, setSending] = useState(false);
  const smsRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const SignupSchema = Yup.object().shape({
    contactOptIn: Yup.bool().oneOf(
      [false],
      "Would you like us to contact you to follow up?"
    ),
    // smsNumber: Yup.string()
    //   .nullable()
    //   .matches(smsRegExp, "Phone number is not valid. Please try again."),
    name: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
    // .required("Required"),
    email: Yup.string().email("Invalid email"),
    category: Yup.string().required("This field is required"),
  });

  const handleSubmit = async (values) => {
    setSending(true);
    const { category, name, email } = values;
    const res = await fetch("", {
      method: "POST",
      body: JSON.stringify({
        category: category,
        name: name,
        email: email,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });

    const fileResponse = await res.json();
    console.log("response", fileResponse);
    if (fileResponse) {
      setSending(false);
      alert("sent!");
    }
  };

  return (
    <Box>
      <Heading>Request Form</Heading>
      <Formik
        initialValues={{
          name: "",
          email: "",
          category: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          setSending(true);
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
          setSending(false);
        }}
      >
        {({ handleSubmit, errors, touched }) => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name}>
                  <FormLabel htmlFor="name">Name (optional)</FormLabel>
                  <Input
                    {...field}
                    id="name"
                    placeholder="Please enter your name if you'd like"
                  />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.email && form.touched.email}
                >
                  <FormLabel htmlFor="email">Email (optional)</FormLabel>
                  <Input
                    {...field}
                    id="email"
                    placeholder="Please enter your email if you'd like"
                  />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="category">
              {({ field, form }) => (
                <FormControl
                  isInvalid={form.errors.category && form.touched.category}
                >
                  <FormLabel htmlFor="category">
                    Category Request (required)
                  </FormLabel>
                  <Select {...field} id="category" placeholder="">
                    <option value="Professional Development">
                      Professional Development
                    </option>
                    <option value="Tech Literacy">Tech Literacy</option>
                  </Select>

                  <FormErrorMessage>{form.errors.category}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              marginTop={4}
              colorScheme="purple"
              variant="outline"
              isLoading={isSending}
              type="submit"
            >
              Send Request
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RequestForm;
