function ButtonLogIn() {
  return (
     <div className="flex justify-end lg:w-full">
            <button type="button" className="lg:block hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => { window.location.href = '/login'; }}>Log in</button>
          </div>
  );
}

export default ButtonLogIn