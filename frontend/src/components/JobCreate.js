import React from "react";

function JobCreate(props) {
  return (
    <div>
      {/* Page Title */}
      <div className="flex flex-wrap  justify-center mt-20">
        <h1 className="text-4xl underline underline-offset-4">Post a Task</h1>
      </div>

      {/* Post a Task-Job Poster Info Form */}
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 flex flex-wrap justify-center">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md border-2 border-indigo-500/50">
              <div className="bg-white px-4 py-5 sm:p-10 md:p-20">
                <div className="grid grid-cols-6 gap-6">
                  {/* Card-1 Title */}
                  <div className="col-span-6 sm:col-span-6 font-bold underline">
                    <h1>Contact Details of Task Poster</h1>
                  </div>
                  {/* First Name */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="text-left block text-sm font-medium text-gray-700"
                    >
                      First name
                    </label>
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Last Name */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="last-name"
                      className="text-left block  text-sm font-medium text-gray-700"
                    >
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      autoComplete="family-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Contact */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="contact"
                      className="text-left block text-sm font-medium text-gray-700"
                    >
                      Contact
                    </label>
                    <input
                      type="text"
                      name="contact"
                      id="contact"
                      autoComplete="contact"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Email */}
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="text-left block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Street Address */}
                  <div className="col-span-6">
                    <label
                      htmlFor="street-address"
                      className="text-left block text-sm font-medium text-gray-700"
                    >
                      Street address
                    </label>
                    <input
                      type="text"
                      name="street-address"
                      id="street-address"
                      autoComplete="street-address"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* City */}
                  <div className="col-span-6 sm:col-span-6 lg:col-span-3">
                    <label
                      htmlFor="city"
                      className="text-left block text-sm font-medium text-gray-700"
                    >
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      autoComplete="address-level2"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* ZIP */}
                  <div className="col-span-6 sm:col-span-3 lg:col-span-3">
                    <label
                      htmlFor="postal-code"
                      className="text-left block text-sm font-medium text-gray-700"
                    >
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      name="postal-code"
                      id="postal-code"
                      autoComplete="postal-code"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go to Next Step
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Post a Task-Job Description Form */}
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 flex flex-wrap justify-center ">
          <form action="#" method="POST">
            <div className="overflow-hidden shadow sm:rounded-md border-2 border-indigo-500/50">
              <div className="bg-white px-4 py-5">
                <div className="grid grid-cols-6 gap-6">
                  {/* Card-2 Title */}
                  <div className="col-span-6 sm:col-span-2 font-bold underline">
                    <h1>Description of Task</h1>
                  </div>
                  {/* Task Title */}
                  <div className="col-span-6">
                    <label
                      htmlFor="task-title"
                      className="required text-left block text-sm font-medium text-gray-700"
                    >
                      Title of the Task
                    </label>
                    <input
                      type="text"
                      name="task-duration"
                      id="task-duration"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  {/* Task Details */}
                  <div className="col-span-6">
                    <label
                      htmlFor="task-details"
                      className="text-left block  text-sm font-medium text-gray-700"
                    >
                      Details of the Task
                    </label>
                    <textarea
                      type="text"
                      name="task-details"
                      id="task-details"
                      className="mt-1 block bg-gray-100 w-full rounded-md border-gray-300
                      shadow-sm focus:border-indigo-500 focus:ring-indigo-500
                      sm:text-sm"
                    ></textarea>
                  </div>
                  {/* Task Duration */}
                  <div className="col-span-6">
                    <label
                      htmlFor="task-duration"
                      className="text-left block text-sm font-medium text-gray-700"
                    >
                      Task Duration
                    </label>
                    <input
                      type="text"
                      name="task-duration"
                      id="task-duration"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              {/* Submit Button */}
              <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit and Create Job Post
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default JobCreate;