import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import axios from "axios";
import { SocialNetworks } from "./SocialNetworks";

export const Contact = () => {
  const [disableButton, setDisableButton] = useState<boolean>(false);
  const [buttonText, setButtonText] = useState<string>("Let's have a talk");
  const { register, errors, handleSubmit } = useForm<IContact>({ resolver: yupResolver(ContactForm) });
  const saveForm = handleSubmit(async (contact: IContact) => {
    setDisableButton(true);
    const response: any = await axios.post(`${process.env.API_URL}/contact`, {
      contact,
    });

    if (response.status == 200) {
      setButtonText("Thanks, I'll send you a message");
    } else {
      setButtonText("Sorry, there was an error");
      setDisableButton(false);
    }
  });

  const getError = (message?: string) => message && <p className="error-input">{message}</p>;

  return (
    <section id="contact">
      <h1 className="title">Let's work together</h1>
      <form id="contact__form">
        <input name="name" ref={register} type="text" placeholder="Your name" />
        {getError(errors.name?.message)}
        <input name="email" ref={register} type="text" placeholder="Your email" />
        {getError(errors.email?.message)}
        <textarea name="message" ref={register} cols={30} rows={10} placeholder="Any Message?"></textarea>
        {getError(errors.message?.message)}
        <button type="submit" onClick={saveForm} disabled={disableButton}>
          {buttonText}
        </button>
      </form>
      <SocialNetworks />
    </section>
  );
};

interface IContact {
  name: string;
  email: string;
  message: string;
}

const ContactForm = yup.object({
  name: yup.string().required(),
  email: yup.string().email().required(),
  message: yup.string(),
});
