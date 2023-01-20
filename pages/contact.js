/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { useRef } from "react";
import emailjs from "emailjs-com";
export default function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5u6pcy9",
        "template_q5iskbq",

        form.current,
        "dWlURBGetKYlEjW64"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <>
      <div className="md:grid grid-cols-2 content-center justify-center bg-black m-auto p-2 sm:p-20">
        <div className="md:grid md:grid-cols-2 md:gap-6">
          <div className="mt-5 md:col-span-2 md:mt-0 bg-gray-700">
            <div className="px-4 mx-4 my-4">
              <h3 className="text-lg font-medium leading-6 text-white p-4">
                Berätta gärna vad vill du ha hjälp med så når dig inom kort.
              </h3>
            </div>
            <form action="#" method="POST">
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-gray-800 px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-white"
                      >
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        placeholder="e.g John Erikson"
                        autoComplete="given-name"
                        className="mt-1  p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-12">
                      <label
                        htmlFor="email-address"
                        className="block text-sm font-medium text-white"
                      >
                        Email address
                      </label>
                      <input
                        type="text"
                        name="email-address"
                        id="email-address"
                        placeholder="e.g John.erikson@email.com"
                        autoComplete="email"
                        className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>

                    <div className=" col-span-8 sm:col-span-12">
                      <label
                        htmlFor="about"
                        className="my-4 block text-sm font-medium text-white"
                      >
                        Berätta gärna vad du vill ha hjälp med så når vi dig
                        inom kort.
                      </label>
                      <div className="mt-1">
                        <textarea
                          id="about"
                          name="about"
                          placeholder="e.g I have broken screen on my old phone ......"
                          rows={3}
                          className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          defaultValue={""}
                        />
                      </div>
                      <p className="mt-2 text-sm text-gray-500"></p>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-cyan-600 py-2 px-10 text-sm font-medium text-black shadow-sm hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="bg-gray-700  p-20">
          <div>
            <h4 className="text-3xl font-semibold text-white">Adress</h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600  text-gray-300">
              Kungsgatan 2
              <br /> 722 11 Västerås
              <br />
              {/* <span className="text-white"> Söndag Stängt</span> */}
            </h5>
          </div>
          <div>
            <h4 className="text-3xl font-semibold text-white">Öppettider</h4>
            <h5 className="text-lg mt-0 mb-2 text-gray-300">
              Måndag-Fredag 11:00-15:00 <br /> Lördag 11:00-15:00
              <br />
              <span className="text-red-500"> Söndag Stängt</span>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}
