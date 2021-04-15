
const ErrorMsg: React.FC<{message: string}> = ({message}) => {
    return (
        <div className="flex items-center justify-center min-h-screen ">
            <div className="p-4 text-red-600 bg-red-200 border-l-4 border-red-400" role="alert">
                <p className="font-bold">Mensaje</p>
                <p>{message}</p>
            </div>
        </div>
    );
}

export default ErrorMsg;