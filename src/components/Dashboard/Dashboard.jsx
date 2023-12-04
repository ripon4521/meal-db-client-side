

const Dashboard = () => {
    return (
        <div className="">
            <div className="grid grid-cols-12  h-screen flex-col justify-between border bg-white">
  <div className="px-4 col-span-3 py-6">
   

    <ul className="mt-6 border p-5 h-full space-y-1">
      <li>
        <a
          href=""
          className="block rounded-lg border hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
     Add a Product
        </a>
      </li>

      <li>
        <a
          href=""
          className="block rounded-lg border hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Mange Product
        </a>
      </li>

      <li>
        <a
          href=""
          className="block rounded-lg border hover:bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
        >
          Update a product
        </a>
      </li>
    

    </ul>
  </div>
  <div className="border col-span-9 ">


  </div>


</div>
        </div>
    );
};

export default Dashboard;