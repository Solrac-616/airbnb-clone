'use client';

import { FieldErrors, UseFormRegister, FieldValues} from 'react-hook-form';
import { BiDollar } from 'react-icons/bi';

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disable?: boolean;
  formatPrice?: boolean;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
  errors: FieldErrors
}

const Input: React.FC<InputProps> = 
({id, label, type, disable, formatPrice, register, errors, required}) => {
  return ( 
    <div className='w-full relative'>
      {formatPrice && (
        <BiDollar size={24} className='text-neutral-700 absolute top-5 left-2' />
      )}
      <input type={type} id={id} disabled={disable} {...register(id, {required})} placeholder='' className={`peer w-full p-4 pt-6 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed ${formatPrice ? 'pl-9' : 'pl-4'} ${errors[id] ? 'border-rose-500 focus:border-rose-500' : ' border-neutral-300 focus:border-black'}`}/>
    </div>
  );
}
 
export default Input ;