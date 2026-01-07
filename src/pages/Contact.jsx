import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Form } from "reactstrap";
import emailjs from "@emailjs/browser";
function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const text = "Say Hello";
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.log("FAILED...", error);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/*Text Container*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <motion.div>
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
          </motion.div>
        </div>
        {/*Form Container*/}
        <form
          onSubmit={sendEmail}
          ref={form}
          className="h-1/2 lg:h-full lg:w-1/2 bg-yellow-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>My username is:</span>
          <input
            type="text"
            name="name"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>My message is:</span>
          <textarea
            row={6}
            name="message"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />
          <span>My email adress is:</span>
          <input
            type="text"
            name="user_email"
            className="bg-transparent border-b-2 border-b-black outline-none "
          />

          <span>Regards</span>
          <button className="bg-yellow-200 rounded font-semibold text-gray-600 p-4">
            Send
          </button>
          {success && (
            <span className="text-green-600 font-semibold">
              Your message has been sent successfuly
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
}

export default Contact;
