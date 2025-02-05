
"use client"
import React from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import {toast, Toaster} from "sonner";

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        const templateParams = {
            to_name: "Andru77",
            from_name: data.name,
            reply_to: data.email,
            message: data.message
        }
        sendEmail(templateParams)
    }

    const sendEmail = (params) => {
        const toastId =  toast.loading('Sending your message, please wait...')
        emailjs
            .send(process.env.NEXT_PUBLIC_SERVICE_ID,
                process.env.NEXT_PUBLIC_TEMPLATE_ID,
                params,
        {
                  publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
                  limitRate: {
                    throttle: 5000
                  }
               }
            )
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('I have received your message, I will get back to you soon!',
                        {
                            id: toastId,
                            duration: 5000,
                        }
                    )
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error('Something went your, try again later!',
                        {
                            id: toastId,
                            duration: 5000,
                        }
                    )
                },
            );
    };


    return (
        <>
            <Toaster richColors={true}/>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={'max-w-md w-full flex flex-col items-center justify-center space-y-4'}
            >
                <input type="text"
                       className={'custom-input'}
                       placeholder="Name" {...register("name",
                    {
                        required: 'This field is required',
                        minLength: {
                            value: 3,
                            message: 'Name should be at least 3 characters long'
                        }
                    })}
                />
                {
                    (errors.name && errors.name.message) &&
                    <span className={'inline-block self-start text-accent'}> {errors.name.message}</span>
                }
                <input type="email"
                       className={'custom-input'}
                       placeholder="Email" {...register("email", {required: 'This field is required'})}
                />
                {
                    (errors.email && errors.email.message) &&
                    <span className={'inline-block self-start text-accent'}> {errors.email.message}</span>
                }
                <textarea
                    className={'custom-input'}
                    placeholder={'Message'}
                    {...register("message", {
                        required: 'This field is required',
                        maxLength: {
                            value: 400,
                            message: 'Message should be less than 400 characters long'
                        },
                        minLength: {
                            value: 50,
                            message: 'Message should be more than 50 characters long'
                        }
                    })}
                />
                {
                    (errors.message) &&
                    <span className={'inline-block self-start text-accent'}> {errors.message.message}</span>
                }
                <input
                    value={'Deploy your message'}
                    className={'px-10 py-4 cursor-pointer rounded-md shadow-lg bg-background border' +
                        'border-accent/30 border-solid hover:shadow-glass-sm backdrop-blur text-foreground' +
                        'focus:outline-none focus:ring-2 focus:ring-accent/50 capitalize'} type="submit"/>
            </form>
        </>

    );
}