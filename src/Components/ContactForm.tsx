import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";

import React, { FormEvent, forwardRef, useState } from "react";
import Status from "./Status";

type form = {
  name: string;
  email: string;
  contact: string;
  message: string;
};

const baseForm: form = {
  name: "",
  email: "",
  contact: "",
  message: "",
};

const ContactForm = forwardRef<HTMLDivElement>(function (_, ref): JSX.Element {
  const [form, setForm] = useState<form>({ ...baseForm });
  const [loading, setLoading] = useState<boolean>(false);
  const [state, setState] = useState<string>("");

  const checkFormData = (): boolean => {
    if (
      form.contact.trim() !== "" &&
      /^\+?\d+([-\s]\d+)*$/.test(form.contact) &&
      form.name.trim() !== "" &&
      form.email.trim() !== "" &&
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(form.email) &&
      form.message.trim() !== ""
    )
      return true;
    return false;
  };

  const getMailSentData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setState("");
    if (checkFormData()) {
      setLoading(true);
      setState("wait");
      await fetch(
        // "http://localhost:4000/send-mail",
        "https://emailnodescr.onrender.com/send-mail",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...form }),
        }
      )
        .then((res) => {
          console.log("res", res);
          if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
          // else
          setLoading(false);
          setForm({ ...baseForm });
          setState("success");
        })
        .catch((_) => {
          console.log("err", _);
          setLoading(false);
          setState("failed");
        });
    } else {
      setState("wrong");
    }
  };

  const changeValue = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setForm((prevForm) => {
      const name = e.target.name;
      prevForm[name as keyof form] = e.target?.value;
      return { ...prevForm };
    });
  };

  return (
    <div
      ref={ref}
      className=" contact-form bg-warm  drop-shadow-lg rounded-t-2xl p-10"
    >
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex-1">
          <h1 className="text-4xl text-primary">Lets Connect</h1>

          <div className="hidden sm:flex flex-col mt-5">
            <p className="text-primary pb-2 ">
              Hey! Need to reach me?
              <br /> Just fill out the form, I’ll be in touch soon!
            </p>
            {/* <div className="relative border-primary border-b my-2 after:content-['OR'] after:bg-warm after:absolute after:top-1/2"></div> */}

            <p className="text-primary">Or Lets connect socially...</p>
            <div className="w-full flex gap-4 ">
              <AiFillInstagram
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.instagram.com/__pranavmunot__",
                    "_blank"
                  );
                }}
                className="cursor-pointer text-primary text-2xl "
              />
              <AiFillLinkedin
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://www.linkedin.com/in/pranavmunot/",
                    "_blank"
                  );
                }}
                className="cursor-pointer text-primary text-2xl "
              />
              <IoLogoWhatsapp
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://wa.me/918669171507", "_blank");
                }}
                className="cursor-pointer text-primary text-2xl "
              />
            </div>
          </div>
        </div>
        <form onSubmit={getMailSentData} className="flex-1 flex flex-col gap-4">
          {state !== "" && <Status state={state} />}
          <div>
            <label>Name</label>
            <input
              type="name"
              name="name"
              value={form.name}
              onChange={changeValue}
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Your name"
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={changeValue}
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label>Contact Number</label>
            <input
              type="text"
              name="contact"
              value={form.contact}
              onChange={changeValue}
              className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="+00 21212 12121"
            />
          </div>
          <div>
            <label>Your Message</label>
            <textarea
              name="message"
              maxLength={500}
              rows={4}
              value={form.message}
              onChange={changeValue}
              className=" px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Your message"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center bg-primary text-white rounded px-8 py-3 border border-primary hover:bg-secondary disabled:bg-slate-300 disabled:text-slate-600"
            disabled={loading}
          >
            {loading && (
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            )}
            Send Enquiry
          </button>
        </form>
      </div>
    </div>
  );
});

export default ContactForm;
