import Header from "@/components/Header";
export default function Page() {
  return (
    <main>
      <Header selected="packages" />
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto py-16 flex flex-col space-y-12">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center">
          Packages
        </h1>
        <form className="grid grid-cols-4 gap-x-8 gap-y-6">
          <div className="col-span-4 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              First Name
            </label>
            <input
              placeholder="First Name"
              type="text"
              className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
            />
          </div>
          <div className="col-span-4 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              Last Name
            </label>
            <input
              placeholder="Last Name"
              type="text"
              className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
            />
          </div>
          <div className="col-span-4 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              Email
            </label>
            <input
              placeholder="Email"
              className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300"
              type="text"
            />
          </div>
          <div className="col-span-4 md:col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              Plan
            </label>
            <select className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300">
              <option>- Select -</option>
              <option>1 hour of individual chatting or coaching</option>
              <option>25 hours of chatting or coaching</option>
              <option>20 hours of chatting or coaching</option>
              <option>15 hours of chatting or coaching</option>
              <option>10 hours of chatting or coaching</option>
              <option>5 hours of chatting or coaching</option>
            </select>
          </div>
          <div className="col-span-4">
            <button className="px-8 py-3 uppercase bg-blue-600 rounded text-white">
              Purchase
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
