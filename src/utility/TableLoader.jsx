import "./Simmer.css";

{
  /* <div className="w-1/2 h-7 rounded-lg simmer animate-pulse"></div> */
}

const TableLoader = () => {
  return (

    <tr>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-transparent dark:text-transparent dark:bg-button_bg/90 text-sm text-transparent ">
      <div className="flex ">
        <div className="flex-shrink-0 w-40 h-30 ">
          <div className="w-full h-full rounded-lg simmer animate-pulse"></div>
        </div>
        <div className="ml-3 space-y-1">
          <p className="whitespace-no-wrap rounded-lg simmer animate-pulse text-transparent">
            fddasdf
          </p>
          <p className="whitespace-no-wrap rounded-lg simmer animate-pulse">
            afa
          </p>
          <p className="text-sm whitespace-no-wrap rounded-lg simmer animate-pulse text-transparent">
            asdfa
          </p>
        </div>
      </div>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 bg-white dark:bg-blue-300 text-sm dark:text-transparent dark:bg-button_bg/90 dark:border-white/20 space-y-2">
      <p className="whitespace-no-wrap rounded-lg simmer animate-pulse text-transparent">
        <span className="font-bold text-transparent">৳</span> dgagf
      </p>
      <p className="whitespace-no-wrap rounded-lg simmer animate-pulse text-transparent">
        Taka
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white dark:bg-blue-300 text-sm dark:text-transparent dark:bg-button_bg/90">
      <p className="whitespace-no-wrap rounded-lg simmer animate-pulse text-transparent">
        adga
      </p>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white dark:bg-blue-300 text-sm space-x-2 dark:text-transparent dark:bg-button_bg/90">
      <span className="relative inline-block px-3 py-1 font-semibold text-transparent leading-tight rounded-lg simmer animate-pulse">
        <span aria-hidden className="absolute inset-0 rounded-full"></span>
        <button className="relative text-transparent">ag</button>
      </span>
    </td>
    <td className="px-5 py-5 border-b border-gray-200 dark:border-white/20 bg-white dark:bg-blue-300 text-sm text-right dark:bg-button_bg/90">
      <button
        type="button"
        className="text-transparent inline-block text-gray-500 hover:text-transparent rounded-lg simmer animate-pulse"
      >
        <svg
          className="inline-block h-6 w-6 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 6a2 2 0 110-4 2 2 0 010 4zm0 8a2 2 0 110-4 2 2 0 010 4zm-2 6a2 2 0 104 0 2 2 0 00-4 0z" />
        </svg>
      </button>
    </td>
  </tr>
  
  
  );
};

export default TableLoader;
