
import { ChangeEvent } from "react";

const Input: React.FC<{ name: string, value: string | number , type: string, disabled?: boolean, required?:boolean, onChange?: (event: ChangeEvent<HTMLInputElement>) =>void  }> = ({ name, value, type, disabled, required, onChange }) => {
    return (
        <div>
            <label className="block font-bold text-gray-500 capitalize"> {name}
            </label>
            <input className="inp inp-disabled inp-focus" name={name} type={type} disabled={disabled} value={value} onChange={onChange} required={required} />
        </div>
    );
}

export default Input;
