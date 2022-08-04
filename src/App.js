import React from 'react';
import './App.css';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const contactSchema = yup.object().shape({
  contactType: yup.string().required(),
  fullName: yup.string().min(4).required(),
  mobileNumber: yup.string().min(10).required(),
  email: yup.string().email().required(),
})

function App() {
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(contactSchema)
  });
  const onSubmit = (data) => {
    // alert(JSON.stringify(data));

    
    console.log(data)
  };
  return (
    <>
      <main>
       <form onSubmit={handleSubmit(onSubmit)}>
         <label>Tipo de contato:</label>
         <select {...register("contactType")} className="input">
            <option value={null}></option>
            <option value="tipo1">Tipo 1</option>
            <option value="tipo2">Tipo 2</option>
         </select>
         {errors.contactType && <p>Selecione o tipo de contato</p>}
         <br></br>

         <label>Nome completo: </label>
         <input {...register("fullName")} className="input"/>
         {errors.fullName && <p>Insira seu nome completo</p>}
         <br></br>

         <label>Telefone celular: </label>
         <input {...register("mobileNumber", {required: true,minLength:10})} className="input"/>
         {errors.mobileNumber && <p>Insira o número do telefone</p>}
         <br></br>

         <label>Email: </label>
         <input {...register("email", {required: true,  })} className="input"/>
         {errors.email && <p>Insira um email válido</p>}
         <br></br>

         <input type="submit" className='button'/>
       </form>
      </main>
    </>
  );
}

export default App;
