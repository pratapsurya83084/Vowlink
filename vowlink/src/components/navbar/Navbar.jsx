

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header>
      {/* fixed */}
      <nav
  aria-label="Global"
  // bg-gray-50
  className=" bg-[#0c9db3] text-white   shadow-lg flex items-center p-7 lg:px-8
    top-0 w-full"
>
  {/* Logo */}
  <div className="flex flex-1 items-center">
    <Link to="/" className="-m-1.5 p-1.5">
      <span className="sr-only ">vowlink Company</span>
      vowlink logo
    </Link>
  </div>

  {/* Mobile menu button */}
  <div className="flex lg:hidden">
    <button
      type="button"
      onClick={() => setMobileMenuOpen(true)}
      // text-gray-700
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 "
    >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon aria-hidden="true" className="h-6 w-6" />
    </button>
  </div>

  {/* Large menu links */}
  <div className="hidden m-3 lg:flex lg:flex-1 lg:mr-[400px] xl:mr-[750px] lg:gap-x-12">
    <Link to="/" className="hover:text-gray-800 lg:text-[17px]">
      Home
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
        <DialogPanel className="fixed  inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between ">
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
                  to="/franchise"
                  className="-mx-3 block font-jost rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
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
