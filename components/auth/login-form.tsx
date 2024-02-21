import CardWrapper from "./card-wrapper";

const LoginForm = () => {
  return (
    <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't Have an account?"
        backButtonHref="/auth/register"
        showSocial
    >
        Login-form
    </CardWrapper>
  )
}

export default LoginForm;