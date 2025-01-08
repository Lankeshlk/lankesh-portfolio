"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contactpage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const text = "Contact me...";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const message = formData.get("user_message");

    if (!name || !email || !message) {
      setError(true);
      return;
    }

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
          console.log(error);
        }
      );
  };

  return (
    <motion.div
      className="h-screen"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col md:flex-row lg:flex-row px-8 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
              
            ))}
          </div>
        </div>
        

        <form
          ref={form}
          onSubmit={sendEmail}
          className="h-full md:h-2/3 lg:h-2/3 xl:h-2/3 lg:w-1/2 bg-blue-100 rounded-xl text-xl flex flex-col gap-8 justify-center p-8 text-black"
        >
          <input
            name="user_name"
            type="text"
            placeholder="Your name"
            className="bg-blue-100 border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <textarea
            name="user_message"
            placeholder="Message"
            className="bg-blue-100 border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <input
            name="user_email"
            type="email"
            placeholder="Email"
            className="bg-blue-100 border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button className="bg-blue-300 rounded font-semibold text-white p-4 hover:bg-blue-400 active:bg-blue-500">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Please fill out all fields correctly!
            </span>
          )}
        </form>
        <div>Phone - 0767799845</div>
      </div>
    </motion.div>
  );
};

export default Contactpage;
