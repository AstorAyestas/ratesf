import { useContext } from "react";
import P from "../atoms/P";

import { UserContext } from "../contexts/UserProvider";

const Toolbar = () =>{
    const usuario  = useContext(UserContext);
    return(
        <header className="flex items-center justify-between h-16 bg-white shadow-md">
        <div className="flex">
            <svg className="w-8 h-8 mx-2 text-red-600 fill-current" xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 512 512">
                <defs />
                <path
                    d="M23.9 51.9L20 55.8v123c0 105.3.2 124.8 1.5 134.9 3.1 23.5 7.9 40 17 59 20.4 42.7 56 71.6 103.7 84.3 23.1 6.1 25.8 6.3 91 6.7 66.1.5 63.8.7 67.8-6 1.9-3.1 2-5.4 2-62.2 0-56.7-.1-59.1-2-62.2-3.5-5.8-3.3-5.8-44-6.4-35.1-.5-37.9-.6-43.2-2.6-10.2-3.8-16.7-9.4-21.3-18.3-4.5-8.8-4.5-7.1-4.5-130.3 0-128.6.3-121.7-6.2-125.7-3.2-2-4.8-2-78.7-2H27.8l-3.9 3.9z"
                />
                <path
                    d="M215.3 109.9c-6.6 4.1-6.3 1.1-6.3 74.8 0 64.5.1 66.9 2 70 3.8 6.3 4 6.3 45.8 6.3 41.1 0 44.2.3 52.3 5.7 4.7 3.1 10.2 11.1 12.6 18.3 1.6 5.1 1.8 12.2 2.3 88 .5 77.4.6 82.7 2.3 85.2 4.1 6 1.6 5.8 81.6 5.8 80.6 0 78.2.2 82.1-6.2 2-3.2 2-4.8 2-94.3 0-53.9-.4-94.7-1-100-8.6-77.4-52.9-131.2-122.5-148.9-23.2-5.9-24.2-5.9-89.5-6.3-59-.4-60.6-.3-63.7 1.6z"
                />
            </svg>
                <P message="Consulta de tasa BASA" /> 
        </div>
        <div>
            <P message={`Bienvenid@: ${usuario.name}`}  />
        </div>
    </header>
    );
}

export default Toolbar;