import Header from "@/components/Header";
export default function Page() {
  return (
    <main>
      <Header />
      <div className="w-[70%] mx-auto py-16 flex flex-col space-y-12">
        <h1 className="text-5xl font-semibold text-center">Packages</h1>
        <form className="grid grid-cols-4 gap-x-8 gap-y-6">
          <div className="col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              First Name
            </label>
            <input
              placeholder="First Name"
              type="text"
              className="border p-2 border-gray-300 focus:outline-none  focus:border-blue-300"
            />
          </div>
          <div className="col-span-2 flex flex-col">
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
          <div className="col-span-2 flex flex-col">
            <label className="text-xs font-semibold text-gray-600 uppercase mb-2">
              Plan
            </label>
            <select className="border p-2  border-gray-300 focus:outline-none  focus:border-blue-300">
              <option>1 hour</option>
              <option>2 hour</option>
              <option>3 hour</option>
            </select>
          </div>
        </form>
      </div>
    </main>
  );
}
