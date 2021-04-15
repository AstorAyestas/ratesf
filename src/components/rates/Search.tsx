import React from "react";
import { useForm } from "../../hooks/useForm";
import IFilter from "../../interfaces/IFilter";
import Table from "../Table";

const Search: React.FC = () => {
    const data = {
        moneda: ''
    }
    const API = process.env.REACT_APP_API_REST;
    const { handleChange, moneda } = useForm<IFilter>(data);
    const URL = `${API}${moneda}`;

    return (
        <>
            <form className="flex items-end justify-start space-x-2 " autoComplete="off" >
                <div>
                    <label className="block font-bold text-gray-500">Moneda
                        </label>
                    <select className="inp inp-focus" name="moneda" onChange={handleChange} value={moneda}>
                        <option value="">Seleccione una moneda</option>
                        <option value="LPS">Moneda LPS</option>
                        <option value="USD">Moneda USD</option>
                        <option value="EUR">Moneda EUR</option>
                    </select>
                </div>
            </form>
            {  moneda !== ''  &&
                <Table url={URL} />
            } 
        </>
    );
}

export default Search;