const Contact = () => {
  return (
    <div className="bg-dark min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-white">Contact</h1>
          <p className="mt-2 text-sm text-gray-300">
            Contact Muratone for more info on bookings, media enquiries and
            sponsorships with the form below. Alternatively, hit that WhatsApp
            button
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <a
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            href="https://wa.link/vnkosv"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold text-white">Email</h2>
          <form
            className=""
            action="https://getform.io/f/d9023263-7139-4eaf-b748-7244ea477ccc"
            method="post"
            target="_blank"
          >
            <div className="rounded-md shadow-sm flex flex-col gap-2">
              <div>
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded  bg-secondary w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-t-md focus:outline-none focus:ring-success focus:border-success focus:z-10 sm:text-sm text-white"
                  placeholder="Name"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded  bg-secondary w-full px-3 py-2 border border-gray-300 placeholder-gray-500  focus:outline-none focus:ring-success focus:border-success focus:z-10 sm:text-sm text-white"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  required
                  className="rounded  bg-secondary w-full px-3 py-2 border border-gray-300 placeholder-gray-500  rounded-b-md focus:outline-none focus:ring-success focus:border-success focus:z-10 sm:text-sm text-white"
                  placeholder="Message"
                  rows="4"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-1 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-success hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-success"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
