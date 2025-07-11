import React, { useState } from "react";

const Contact = () => {
  //user input
  const [text, setText] = useState({
    name: "",
    email: "",
    message: "",
  });
  //for successfully send or not
  const [satus, setStatus] = useState();

  //update input in text State trigger(target) name(attribute)
  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: [e.target.value] });
  };

  const handleSubmit = async (e) => {
    //refresh abort
    e.preventDefault();
    try {
      const res = await fetch("https://api.aakashlabs.com", {
        //type of data to send
        method: POST,
        header: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(text),
      });
      // condition
      if (res.ok) {
        setStatus("Send Message Successfully");
        //clear
        setText({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus(error.message);
    }
  };
  return (
    <form
      className="mb-6 mt-5 max-w-3xl mx-auto px-4 py-6 rounded-lg shadow-2xl"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center p-5 font-bold text-indigo-950 text-3xl sm:text-4xl">
        Contact Form
      </h1>

      <div className="flex flex-col gap-4 md:justify-center md:items-center">
        <div className="flex flex-col">
          <label className="font-bold py-1">Full Name</label>
          <input
            name="name"
            type="name"
            placeholder="Enter your name"
            value={text.name}
            onChange={handleChange}
            className="w-full max-w-md p-3 border border-gray-500 rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold py-1">Email</label>
          <input
            name="email"
            type="email"
            value={text.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full max-w-md p-3 border border-gray-500 rounded-md focus:outline-none"
            required
          />
        </div>

        <div className="flex flex-col">
          <label className="font-bold py-1">Your Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            value={text.message}
            onChange={handleChange}
            className="w-full max-w-md p-3 border border-gray-500 rounded-md focus:outline-none"
            required
          ></textarea>
        </div>

        <div>
          <button
            type="submit"
            className="mt-4 w-full max-w-md rounded-2xl p-3 bg-indigo-700 hover:bg-indigo-900 text-white font-bold border border-indigo-700 transition duration-200"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Contact;
