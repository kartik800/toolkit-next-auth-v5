const AuthLayout = ({children}: {children: React.ReactNode}) => {
    return <div className="flex justify-center items-center h-full bg-sky-400
    ">
        {children}
    </div>
}

export default AuthLayout;