'use client'
import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

type MyFormType = {
    name: string
    age:number
}

export const MyForm: React.FC= () => {
   
    const {register, handleSubmit,formState: {errors}} = useForm<MyFormType>({
        defaultValues: {}
    })

    const Submit: SubmitHandler<MyFormType> = data =>{
        console.log(data)
    }
    const Error: SubmitErrorHandler<MyFormType> = data =>{
        console.log(data)
    }
    const inputStyle = 'bg-gray-300 h-8 w-full mb-5 border-gray-400 border-2 rounded-lg px-2'
return (
    <form className=' flex flex-wrap justify-center px-[20vw] py-10 ' onSubmit={handleSubmit(Submit,Error)}>
        <h1 className='w-full text-4xl text-center mb-4'>Войти</h1>
        <input placeholder='имя' className={inputStyle} type="text" {...register('name', {required:true})} aria-invalid={errors.name ? true : false}/>
        <input className={inputStyle} type="text" {...register('age')} />
        <div className="w-full flex justify-between">
            <button className='bg-gray-800 rounded-lg px-5 py-2' type='button'>Зарегистрироватся</button>
            <button  className='bg-gray-800 rounded-lg px-5 py-2'>Войти</button>
        </div>
        
    </form>
);
};