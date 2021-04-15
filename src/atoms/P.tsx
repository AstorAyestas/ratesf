type PProps = { message: string };

const P:React.FC<PProps> = ({message} :PProps) =>{
    return(
        <p className="mx-2 text-lg text-bold text-red-600">{message}</p>
    )
} 
export default P;