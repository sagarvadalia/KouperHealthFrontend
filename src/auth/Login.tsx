import { Link } from "react-router"
import { useLoginRequest } from "./hooks/useLoginRequest"
import { makeStyles } from "@mui/styles"

// TODO: opting to use native forms instead of react-hook-form for now given the simplicity of this application
export const Login = () => {
    const { mutate: login } = useLoginRequest()
    const classes = useStyles()
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const userName = formData.get('userName') as string
        login(userName)
    }

  return <form name="loginForm" onSubmit={handleSubmit} >
    <h1>Login to the application</h1>
    <div className = {classes.formContainer}>

    
    <input type="text" placeholder="Username" name="userName" />
    <button type="submit">Login</button>
    </div>
    <Link  to="/signup">Sign up</Link>
  </form>
}

const useStyles = makeStyles(() => ({
    formContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        paddingBottom: '10px'
    },
   
}))

