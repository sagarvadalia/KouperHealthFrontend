import { makeStyles } from "@mui/styles"
import { useSignUpRequest } from "./hooks/useSignUpRequest"

// TODO: opting to use native forms instead of react-hook-form for now given the simplicity of this application
export const Signup = () => {
    const { mutate: signUp } = useSignUpRequest()
    const classes = useStyles()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const userName = formData.get('userName') as string
        signUp(userName)
    }

  return <form name="signUpForm" onSubmit={handleSubmit} >
    <h1>Sign up to the application</h1>
    <div className = {classes.loginContainer}>

    
    <input type="text" placeholder="Username" name="userName" />
    <button type="submit">Sign up</button>
    </div>
  </form>
}

const useStyles = makeStyles(() => ({
    loginContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px'
    },
}))

