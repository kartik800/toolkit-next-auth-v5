import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string,
}

const FormError = ({message}: FormErrorProps) => {

    if(!message) return null

    return <div className="flex gap-x-2 items-center bg-destructive/15 text-destructive text-sm p-3 rounded-md">
        <ExclamationTriangleIcon className="h-4 w-4"/>
        <p>
        {message}
        </p>
    </div>

}

export default FormError;