import { CheckCircledIcon } from "@radix-ui/react-icons";

interface FormSuccessProps {
    message?: string,
}

const FormSuccess = ({message}: FormSuccessProps) => {

    if(!message) return null

    return <div className="flex gap-x-2 items-center bg-emerald-500/15 text-emerald-500 text-sm p-3 rounded-md">
        <CheckCircledIcon className="h-4 w-4"/>
        <p>
        {message}
        </p>
    </div>

}

export default FormSuccess;