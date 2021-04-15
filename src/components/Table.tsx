
import Loader from "../atoms/loader/Loader";
import NoData from "../atoms/NoData";
import { useFetch } from "../hooks/useFetch";
import ITasa from "../interfaces/ITasa";

const Table: React.FC<{ url: string }> = ({ url }) => {
    const { data, fetching, error } = useFetch<ITasa[]>(url);
    return (
        fetching  ?  <Loader/> : error ?  <NoData message={error} /> : <table className="shadow-lg table-auto ">
        <thead>
            <tr className="h-10 capitalize bg-red-600 rounded-t-lg text-red-50 ">
                {
                    data &&
                    Object.getOwnPropertyNames(data[0]).map(
                        (item, index) => {
                            return (<th className="p-4" key={index}>{item}</th>)
                        }
                    )
                }
            </tr>
        </thead>
        <tbody>
            {
                data &&
                data.map(item => (
                    <tr key={item.moneda} className="h-8 text-red-500 bg-white border-b-2 border-red-300 hover:bg-red-100 ">
                        <td className="p-4">{item.moneda}</td>
                        <td className="p-4">{item.descripcion}</td>
                        <td className="p-4">{item.tasa}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>       
    );
}
export default Table;
