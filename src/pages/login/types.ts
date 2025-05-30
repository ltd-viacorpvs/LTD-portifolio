import type { useloginModel } from "./login.model";



export type LoginViewProps = ReturnType<typeof useloginModel>

interface LoginFormData {
    email: string
    password: string
    rememberMe: boolean
}
