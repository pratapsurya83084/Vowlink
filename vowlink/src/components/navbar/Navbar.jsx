// import React ,{useState} from "react";
// // import { BsFillCloudSunFill } from "react-icons/bs";
// // import { FiSun } from "react-icons/fi";
// import { Fragment } from "react";
// import { Dialog, Transition } from "@headlessui/react";
// import { RxCross2 } from "react-icons/rx";
// import {Link }   from 'react-router-dom'
// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     // bg-white
//     <div className="sticky top-0 z-50">
//      {/* mobile size show menubar */}
//      <Transition.Root show={open} as={Fragment}>
//         <Dialog as="div" className="relative z-40 lg:hidden"
//         onClose={setOpen}>
//           <Transition.Child
//             as={Fragment}
//             enter="transition-opacity ease-linear duration-300"
//             enterFrom="opacity-0"
//             enterTo="opacity-100"
//             leave="transition-opacity ease-linear duration-300"
//             leaveFrom="opacity-100"
//             leaveTo="opacity-0"
//           >
//             {/* bg-black */}
//             <div className="fixed inset-0  bg-opacity-25" />
//           </Transition.Child>

//           <div className="fixed inset-0 z-40 flex">
//             <Transition.Child
//               as={Fragment}
//               enter="transition ease-in-out duration-300 transform"
//               enterFrom="-translate-x-full"
//               enterTo="translate-x-0"
//               leave="transition ease-in-out duration-300 transform"
//               leaveFrom="translate-x-0"
//               leaveTo="-translate-x-full"
//             >
//               <Dialog.Panel
//                 className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"

//               >
//                 <div className="flex px-4 pb-2 pt-28">
//                   <button
//                     type="button"
//                     className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
//                     onClick={() => setOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <RxCross2 />
//                   </button>
//                 </div>

//                 <div className="border-t border-gray-300 px-4 py-6">
//                   {/* list tabs in mobile desktop */}
//                   <div className="px-5  grid grid-cols-1 lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                     <Link
//                       to={"/"}
//                       className="text-sm my-2 font-medium text-gray-700 "
//                     >
//                       Home
//                     </Link>

//                     <Link
//                       to={"/about"}
//                       className="text-sm my-2 font-medium text-gray-700 "
//                     >
//                       About
//                     </Link>

//                     <Link
//                       to={"/contact"}
//                       className=" text-sm my-2 font-medium text-gray-700 cursor-pointer"
//                     >
//                       contact
//                     </Link>

//                     <Link
//                       to={"/franchise"}
//                       className=" text-sm my-2 font-medium text-gray-700 cursor-pointer"
//                     >
//                       Franchise
//                     </Link>

//                   </div>
//                 </div>

//               </Dialog.Panel>
//             </Transition.Child>
//           </div>
//         </Dialog>
//       </Transition.Root>

//       {/* desktop menu */}
//       <header className="relative ">
//         <nav
//           aria-label="Top"
//           className="bg-white-600 px-4 sm:px-6 lg:px-8 shadow-xl "
//         >
//           <div className="">
//             <div className="flex h-16 items-center">
//               {/* button menu */}

//               {/* Logo of vowlink */}
//               <div className="ml-4 flex lg:ml-0">
//                 <Link to={"/"} className="flex">
//                   <div className="flex ">
//                     <h1 className=" text-2xl font-bold text-black  px-2 py-1 rounded">
//                       logo of vowlink
//                     </h1>
//                   </div>
//                 </Link>
//               </div>
//                 {/* header list */}
//               <div className="ml-auto flex items-center">
//                 <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
//                   <Link to={"/"} className="text-sm font-medium text-gray-700 ">
//                     Home
//                   </Link>

//                   <Link
//                     to={"/about"}
//                     className="text-sm font-medium text-gray-700 "
//                   >
//                     About
//                   </Link>

//                   <Link
//                     to={"/contact"}
//                     className="-m-2 block p-2 font-medium text-gray-900"
//                   >
//                     Contact
//                   </Link>

//                   <Link
//                     to={"/franchise"}
//                     className="-m-2 block p-2 font-medium text-gray-900"
//                   >
//                     Franchise
//                   </Link>
//                 </div>
//               </div>
//               {/* button menu mobile */}
//               <button
//                 type="button"
//                 onClick={() => setOpen(true)}
//                 className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
//               >
//                 <span className="sr-only">Open menu</span>
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke-width="1.5"
//                   stroke="currentColor"
//                   class="w-6 h-6"
//                 >
//                   <path
//                     stroke-linecap="round"
//                     stroke-linejoin="round"
//                     d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                   />
//                 </svg>
//               </button>

//             </div>
//           </div>
//         </nav>
//       </header>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      <nav
  aria-label="Global"
  className="bg-gray-50 shadow-lg flex items-center p-5 lg:px-8 fixed top-0 w-full"
>
  {/* Logo */}
  <div className="flex flex-1 items-center">
    <Link to="/" className="-m-1.5 p-1.5">
      <span className="sr-only">vowlink Company</span>
      vowlink logo
    </Link>
  </div>

  {/* Mobile menu button */}
  <div className="flex lg:hidden">
    <button
      type="button"
      onClick={() => setMobileMenuOpen(true)}
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="h-6 w-6" />
    </button>
  </div>

  {/* Large menu links */}
  <div className="hidden lg:flex lg:flex-1 lg:mr-[400px] xl:mr-[750px] lg:gap-x-12">
    <Link to="/" className="hover:text-gray-800 lg:text-[17px]">
      Home
    </Link>
    <Link to="/about" className="hover:text-gray-800 lg:text-[17px]">
      About
    </Link>
    <Link to="/contact" className="hover:text-gray-800 lg:text-[17px]">
      Contact
    </Link>
    <Link to="/franchise" className="hover:text-gray-800 lg:text-[17px]">
      Franchise
    </Link>
  </div>
</nav>


      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              vowlink logo
              {/* <img
                alt=""
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Contact
                </Link>
                <Link
                  to="/franchise"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Franchise
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
