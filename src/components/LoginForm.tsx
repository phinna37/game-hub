import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  GridItem,
  Heading,
  Input,
} from "@chakra-ui/react";
import { FieldValues, useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <GridItem area="main">
      <Container centerContent>
        <Flex
          maxW="md"
          marginTop={20}
          flexDirection="column"
          justifyContent="center"
          width="full"
        >
          <Box
            p={8}
            maxWidth="500px"
            borderWidth={1}
            borderRadius={8}
            boxShadow={"lg"}
          >
            <Box textAlign="center">
              <Heading>Login</Heading>
            </Box>
            <Box my={4} textAlign="left">
              <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input placeholder="test@test.com" {...register("email")} />
                </FormControl>
                <FormControl mt={6} isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input placeholder="*****" {...register("password")} />
                </FormControl>
                <Button
                  width="full"
                  mt={4}
                  type="submit"
                  colorScheme="green"
                  variant="outline"
                >
                  Log In
                </Button>
              </form>
            </Box>
          </Box>
        </Flex>
      </Container>
    </GridItem>
  );
};

export default LoginForm;
