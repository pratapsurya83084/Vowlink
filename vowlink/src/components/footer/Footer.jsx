

import React, { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { PiGreaterThanLight } from "react-icons/pi";
const greatersign = ">";

const Footer = () => {
  const [isopen, setopen] = useState(false);
  const [isLinksOpen, setIsLinksOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  // const toggleAnswer = () => {
  //   setIsOpen(!isOpen);
  // };

  const showBox = () => {
    setopen(!isopen);
  };

  return (
    <footer className="font-type   bg-gray-50 text-gray-600 py-12">
      <div className="container mx-auto px-4">
        <div className="lg:flex justify-center lg:justify-between lg:px-36 gap-1">
          {/* left side */}
          <div className="lg:flex justify-center items-center text-center lg:text-left">
            <div className="mx-auto lg:text-left shadow-xl bg-[#fff] p-3 h-[70px] w-[70px] rounded-full text-center">
              <img
                className="mx-auto ml-1 mt-2"
                src="https://bisjhintus.com/assets/images/graphics/mail.svg"
                alt="Newsletter"
              />
            </div>

            <div className="ml-4 mt- lg:mt-0 py-6 ">
              {" "}
              {/* Adjust margin for spacing */}
              <h3 className="text-lg font-bold">Join our newsletter</h3>
              <p>Subscribe to get the latest updates from BISJHINTUS.</p>
            </div>
          </div>

          {/* right side */}
          <div className="md:flex justify-center md:mt-4">
            <div className="">
              <form action="https://bisjhintus.com/newsletter" >
              <input
        id="email"
        type="email"
        className="input newsletter w-full h-14 border border-gray-300 rounded py-2 px-4 mb-4 sm:mb-0 sm:mr-2"
        maxLength=""
        name="email"
        data-name="email"
        placeholder="Enter your email"
        required
      />
              </form>
            </div>
            <div>
              <button
              type="submit"
              className="w-full mt-2 md:mt-0 md:ml-2 lg:mt-0 rounded-sm bg-cyan-500 p-4 px-10 text-white">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
        <hr className="mx-0 mt-10 lg:mx-5 xl:mx-36 " />

        {/*all column  show lg size and hidden less than lg size  */}
        {/* desktop */}
        <div className="hidden lg:flex  justify-center h-[895.99px]   mt- md:gap-52 xl:gap-42">
          {/* items-center */}

          {/* logo and icons social media */}
          <div className="flex gap-0 md:gap-20">
            <div className="flex flex-col  ">
              <a href="https://bisjhintus.com/" className="mb-4 ">
                <img
                  src="https://bisjhintus.com/assets/images/logo-full.png"
                  alt="BISJHINTUS Logo"
                  className="w-48 "
                />
              </a>
              {/*social media add link done */}
              <div className="flex flex-col space-x- w-full mb-12 items-center">
                <div className="space-x-3 whitespace-nowrap">
                  <a
                    href="https://www.facebook.com/BISJHINTUS"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-facebook-f bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://twitter.com/BISJHINTUS_lst"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-twitter   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/BISJHINTUS"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-instagram   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bisjhintu-s-let-s-succeed-together/"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-linkedin   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                </div>

                {/* 2nd row icon */}
                {/* done with add link */}
                <div className="space-x-2 mt-3  whitespace-nowrap">
                  <a
                    className=""
                    href="https://www.quora.com/profile/BISJHINTUS-Lets-Succeed-Together"
                  >
                    <i className="fab fa-quora  bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://in.pinterest.com/bisjhintus/"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-pinterest  bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCq9vBOTqYP3R5h-ELeBx8Hg"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-youtube bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://bisjhintus.medium.com/"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-medium bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                </div>
              </div>
            </div>
            {/*link section 2,3 column */}
            <div className="  mt-12">
              {/* <div className='gap-'> */}
              <h3 className="text-lg font- mb-4 text-cyan-500">LINKS</h3>
              {/* gap-40  */}
              <div className="gap-36 grid grid-cols-1 sm:grid-cols-2">
                {/* done add with link */}
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://bisjhintus.com/"
                      className="text-gray-600 hover:text-cyan-400"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/about"
                      className="text-gray-600 hover:text-cyan-400"
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/contact"
                      className="text-gray-600 hover:text-cyan-400"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://pricing.bisjhintus.com/"
                      className="text-gray-600 hover:text-cyan-400"
                    >
                      Subscription
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://learn.bisjhintus.com/register"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Learn Portal
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://exam.bisjhintus.com/register"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Test Portal
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://community.bisjhintus.com/user/register"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Community Portal
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://blog.bisjhintus.com/register"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Blog Portal
                    </a>
                  </li>

                  <li>
                    <a
                      href="#newsportal"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      News Portal
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://enterprise.bisjhintus.com/"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Enterprise LMS
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://jobscorporate.bisjhintus.com/register"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Job Portal
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://profilebuilder.bisjhintus.com/registration/step-1/regular/31"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Profile Builder
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://expert.bisjhintus.com/plan"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Expert Portal
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://webbuilder.bisjhintus.com/register"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Web Builder
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://forms.bisjhintus.com/request/create/eyJpdiI6InFZbzFNcWZoQndVaGJQd3gxM2hHT1E9PSIsInZhbHVlIjoiQ0VQWktEM3JRR05HNGZkdzNCemF5K0svUzFYVHlMOTFDZm1RckNOSUJ3Yz0iLCJtYWMiOiIyMTQwYmZkZjY3ZmJkNTViZGU2MTlhMmQxYmMxZDRlZjZmMmQyM2ZkNmNjMzg4MmFhZDU3OTM2ZTg2Y2JlMDI2IiwidGFnIjoiIn0="
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Form Builder
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://podcast.bisjhintus.com/user/register"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Podcast Portal
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://charitycsr.bisjhintus.com/register"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      CSR Contribute
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://bisjhintus.com/instructor"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Teach
                    </a>
                  </li>
                </ul>

                {/* done with add link */}
                <ul className="space-y-4 ">
                  <li>
                    <a
                      href="https://franchising.bisjhintus.com/"
                      className="text-gray-600hover:text-cyan-400"
                    >
                      Franchise
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://worklife.bisjhintus.com/"
                      className="text-gray-600 hover:text-cyan-400"
                    >
                      Career
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/teachers-module"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Teacher's Module
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/our-initiatives"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Our Initiatives
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://bisjhintus.com/partner-with-us"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Partner with us
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/find-me-a-teacher"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Find me a teacher
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/FAQ"
                      className="text-gray-600 hover:text-cyan-400"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/future-with-bisjhintus"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Future with Bisjhintus
                    </a>
                  </li>

                  <li>
                    <a
                      href="https://bisjhintus.com/bisjhintus-for-business"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      {" "}
                      Bisjhintus For Buisness
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/whiteboard"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      {" "}
                      White Board
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://verifyinternshipcertificate.bisjhintus.com/"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      {" "}
                      Verify internship
                    </a>
                  </li>

                  <li
                    onClick={showBox}
                    className="  flex hover:text-cyan-500 whitespace-nowrap  text-gray-600"
                  >
                    More {greatersign}
                    {/* <PiGreaterThanLight className="ml-2 mt-[5px] text-cyan-500 " /> */}
                  </li>
                  {/* click the button showBox then show below dropdown */}
                  {/* done with link add */}
                  {isopen && (
                    <ul className="py-4 w-40 p-2  rounded-xl space-y- text-left whitespace-nowrap border border-gray-400">
                      <a
                        href="https://bisjhintus.com/more#exam-corner-blog"
                        className=""
                      >
                        <li className="mt-  text-sm text-gray-600 hover:text-cyan-500">
                          Exam corner blog
                        </li>
                      </a>
                      <a
                        href="https://bisjhintus.com/more#crash-course"
                        className=""
                      >
                        {" "}
                        <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                          Crash course
                        </li>
                      </a>

                      <a
                        href="https://bisjhintus.com/more#help-and-support"
                        className=""
                      >
                        {" "}
                        <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                          Help and support
                        </li>
                      </a>
                      <a
                        href="https://bisjhintus.com/professional-walkway"
                        className=""
                      >
                        {" "}
                        <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                          Professional Walkway
                        </li>
                      </a>
                      <a
                        href="https://bisjhintus.com/more#free-resources"
                        className=""
                      >
                        {" "}
                        <li className="mt-6 text-sm  text-gray-600 hover:text-cyan-500">
                          Free resources
                        </li>
                      </a>
                    </ul>
                  )}
                </ul>

                {/* </div> */}
              </div>
            </div>
          </div>

          {/* 4rth column  justify-center */}
          {/* done with add link */}
          <div className=" mt-12 w-[269.94px]">
            <div>
              <h3 className="text-lg font- mb-4 text-cyan-500">LEGAL</h3>
              {/* grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 */}
              <div className=" gap-4">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="https://bisjhintus.com/user-guidelines"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      User Guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/terms-and-conditions"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Terms and Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/privacy-policy"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/refund-policy"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Refund Policy & Cancellation Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/subscription-policy"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Subscription Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/live-mentorships-guidelines"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      1:1 Live mentorships guidelines
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/minor-child-safety-policy"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Child safety policy or Minor Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/refferal-policy"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Referral Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/B2B-terms-policies"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      B2B Terms & Policies
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://bisjhintus.com/coupon-policy"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Coupon Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://employerpolicy.bisjhintus.com/"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Employer Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://certificatepolicy.bisjhintus.com/"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Certificate Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://globalportalspolicy.bisjhintus.com/"
                      className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                    >
                      Global Portals Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* startup india */}
        {/* add  startupindia logo*/}
        {/* md:gap-52 xl:gap-42 */}
        {/* <div className="flex  items-center "> */}
        <div className="hidden lg:flex justify-center">
  <div className="flex justify-center items-center space-x-12 max-w-6xl w-full">
    {/* contact info */}
    <div className="text-left mr- text-lg font-semibold w-1/3">
      <h1>M/s BISJHINTUS PRIVATE LIMITED</h1> <br />
      <h1>CIN: U80904TR2021PTC013885</h1> <br />
      <h1>ISO:9001:2015, Certificate Number: 21IQGQ82</h1> <br />
      <p className="mt-10">
        All Rights Reserved | Copyright © BISJHINTUS | 2024
      </p>
    </div>

    {/* start up logo */}
    <div className="flex justify-center items-center w-1/3 hover-zoom">
      <img
        src="\startupIndia_vowlink_logo.png"
        alt="Logo"
        className="h-32 mb-4 sm:mb-0"
      />
    </div>

    {/* add address info */}
    <div className=" text-lg w-1/3 text-right ">
      <h1 className="text-cyan-500 mb-10 text-xl">CONTACT</h1>
      <ul className="space-y-4 block ">
        <li className="text-xl font-bold">Registered Office</li>
        <li>C/O Jhintu Baidya Adhikari,</li>
        <li>Ramakrishna Colony, Belonia,</li>
        <li>South Tripura, Tripura – 799155</li>
      </ul>

      <ul className="space-y-4 mt-10">
        <li className="text-xl font-bold">Corporate Office</li>
        <li>KUDCEMP Building, 2nd Floor,</li>
        <li>MCC Commercial Complex,</li>
        <li>Mallikatte, Kadri, Mangalore,</li>
        <li>Karnataka – 575002</li>
      </ul>

      <ul className="space-y-4 mt-10">
        <li>Ph: +91 9353383517</li>
        <li>Mail: adoreforgrowth@bisjhintus.com</li>
      </ul>
    </div>
  </div>
</div>
      {/* </div> */}
       

        {/*  *************************** mobile size ,tab size ******************************/}

        <footer className="font-type block lg:hidden  p-6">
          <div className="container mx-auto">
            <div className="flex flex-col   justify-between items-start sm:items-center">
              <div className="w-full mb-10">
                <button
                  className="w-full flex justify-between  items-center text-xl text-cyan-500
               font-semibold py-2 "
                  onClick={() => setIsLinksOpen(!isLinksOpen)}
                >
                  LINKS
                  <span>{isLinksOpen ? "▴" : "▾"}</span>
                </button>
                {isLinksOpen && (
                  <div className="mt-2 md:flex md:gap-10 ">
                    <ul className="space-y-4 mt-4">
                      <li>
                        <a
                          href="https://bisjhintus.com/"
                          className="text-gray-600 hover:text-cyan-400"
                        >
                          Home
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bisjhintus.com/about"
                          className="text-gray-600 hover:text-cyan-400"
                        >
                          About
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bisjhintus.com/contact"
                          className="text-gray-600 hover:text-cyan-400"
                        >
                          Contact
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://pricing.bisjhintus.com/"
                          className="text-gray-600 hover:text-cyan-400"
                        >
                          Subscription
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://learn.bisjhintus.com/register"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Learn Portal
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://exam.bisjhintus.com/register"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Test Portal
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://community.bisjhintus.com/user/register"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Community Portal
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://blog.bisjhintus.com/register"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Blog Portal
                        </a>
                      </li>

                      <li>
                        <a
                          href="#newsportal"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          News Portal
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://enterprise.bisjhintus.com/"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Enterprise LMS
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://jobscorporate.bisjhintus.com/register"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Job Portal
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://profilebuilder.bisjhintus.com/registration/step-1/regular/31"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Profile Builder
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://expert.bisjhintus.com/plan"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Expert Portal
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://webbuilder.bisjhintus.com/register"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Web Builder
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://forms.bisjhintus.com/request/create/eyJpdiI6InFZbzFNcWZoQndVaGJQd3gxM2hHT1E9PSIsInZhbHVlIjoiQ0VQWktEM3JRR05HNGZkdzNCemF5K0svUzFYVHlMOTFDZm1RckNOSUJ3Yz0iLCJtYWMiOiIyMTQwYmZkZjY3ZmJkNTViZGU2MTlhMmQxYmMxZDRlZjZmMmQyM2ZkNmNjMzg4MmFhZDU3OTM2ZTg2Y2JlMDI2IiwidGFnIjoiIn0="
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Form Builder
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://podcast.bisjhintus.com/user/register"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Podcast Portal
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://charitycsr.bisjhintus.com/register"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          CSR Contribute
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://bisjhintus.com/instructor"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Teach
                        </a>
                      </li>
                    </ul>

                    <ul className="space-y-4 mt-4 ">
                      <li>
                        <a
                          href="https://franchising.bisjhintus.com/"
                          className="text-gray-600hover:text-cyan-400"
                        >
                          Franchise
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://worklife.bisjhintus.com/"
                          className="text-gray-600 hover:text-cyan-400"
                        >
                          Career
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bisjhintus.com/teachers-module"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Teacher's Module
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bisjhintus.com/our-initiatives"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Our Initiatives
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://bisjhintus.com/partner-with-us"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Partner with us
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bisjhintus.com/find-me-a-teacher"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Find me a teacher
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bisjhintus.com/FAQ"
                          className="text-gray-600 hover:text-cyan-400"
                        >
                          FAQ
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bisjhintus.com/future-with-bisjhintus"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          Future with Bisjhintus
                        </a>
                      </li>

                      <li>
                        <a
                          href="https://bisjhintus.com/bisjhintus-for-business"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          {" "}
                          Bisjhintus For Buisness
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://bisjhintus.com/whiteboard"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          {" "}
                          White Board
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://verifyinternshipcertificate.bisjhintus.com/"
                          className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                        >
                          {" "}
                          Verify internship
                        </a>
                      </li>

                      <li
                        onClick={showBox}
                        className="  flex hover:text-cyan-500 whitespace-nowrap  text-gray-600"
                      >
                        More {greatersign}
                        {/* <PiGreaterThanLight className="ml-2 mt-[5px] text-cyan-500 " /> */}
                      </li>
                      {/* click the button showBox then show below dropdown */}
                      {/* done with link add */}
                      {isopen && (
                        <ul className="py-4 w-40 p-2  rounded-xl space-y- text-left whitespace-nowrap border border-gray-400">
                          <a
                            href="https://bisjhintus.com/more#exam-corner-blog"
                            className=""
                          >
                            <li className="mt-  text-sm text-gray-600 hover:text-cyan-500">
                              Exam corner blog
                            </li>
                          </a>
                          <a
                            href="https://bisjhintus.com/more#crash-course"
                            className=""
                          >
                            {" "}
                            <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                              Crash course
                            </li>
                          </a>

                          <a
                            href="https://bisjhintus.com/more#help-and-support"
                            className=""
                          >
                            {" "}
                            <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                              Help and support
                            </li>
                          </a>
                          <a
                            href="https://bisjhintus.com/professional-walkway"
                            className=""
                          >
                            {" "}
                            <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                              Professional Walkway
                            </li>
                          </a>
                          <a
                            href="https://bisjhintus.com/more#free-resources"
                            className=""
                          >
                            {" "}
                            <li className="mt-6 text-sm  text-gray-600 hover:text-cyan-500">
                              Free resources
                            </li>
                          </a>
                        </ul>
                      )}
                    </ul>
                  </div>
                )}
                <hr className="text-gray-500 mt-10" />
              </div>

              {/* legal dropdown */}
              <div className="w-full mb-4 ">
                <button
                  className="w-full flex justify-between text-cyan-500
               items-center text-xl font-semibold py-2 "
                  onClick={() => setIsLegalOpen(!isLegalOpen)}
                >
                  LEGAL
                  {/* <span>{isLegalOpen ? '▴' : '▾'}</span> */}
                </button>
                {isLegalOpen && (
                  <div className="mt-2">
                    <div className=" gap-4">
                      <ul className="space-y-4">
                        <li>
                          <a
                            href="https://bisjhintus.com/user-guidelines"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            User Guidelines
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/terms-and-conditions"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Terms and Conditions
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/privacy-policy"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Privacy Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/refund-policy"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Refund Policy & Cancellation Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/subscription-policy"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Subscription Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/live-mentorships-guidelines"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            1:1 Live mentorships guidelines
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/minor-child-safety-policy"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Child safety policy or Minor Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/refferal-policy"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Referral Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/B2B-terms-policies"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            B2B Terms & Policies
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://bisjhintus.com/coupon-policy"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Coupon Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://employerpolicy.bisjhintus.com/"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Employer Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://certificatepolicy.bisjhintus.com/"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Certificate Policy
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://globalportalspolicy.bisjhintus.com/"
                            className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"
                          >
                            Global Portals Policy
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
                <hr className="text-gray-500 mt-10" />
              </div>
            </div>

            {/* social media icon with link */}
            <div className="mt-6 flex flex-col  justify-between items-center">
             <a href="https://bisjhintus.com/">
             <img
                src="\bisjhintus_logos_vowlink.png"
                alt="Logo"
                className="h- w-[200px] mb-4 sm:mb-0"
              />
             </a>
              <div className="flex flex-col space-x- w-full mb-12 items-center">
                <div className="space-x-3 whitespace-nowrap">
                  <a
                    href="https://www.facebook.com/BISJHINTUS"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-facebook-f bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://twitter.com/BISJHINTUS_lst"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-twitter   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/BISJHINTUS"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-instagram   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/bisjhintu-s-let-s-succeed-together/"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-linkedin   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                </div>

                {/* 2nd row icon */}
                {/* done with add link */}
                <div className="space-x-2 mt-3  whitespace-nowrap">
                  <a
                    className=""
                    href="https://www.quora.com/profile/BISJHINTUS-Lets-Succeed-Together"
                  >
                    <i className="fab fa-quora  bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://in.pinterest.com/bisjhintus/"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-pinterest  bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCq9vBOTqYP3R5h-ELeBx8Hg"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-youtube bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                  <a
                    href="https://bisjhintus.medium.com/"
                    className="text-gray-600 hover:text-cyan-400"
                  >
                    <i className="fab fa-medium bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
                  </a>
                </div>
              </div>
            </div>

            {/*cin number and certificate number  */}

            <div className="text-center text-lg font-semibold">
              <h1>M/s BISJHINTUS PRIVATE LIMITED</h1> <br />
              <h1>CIN: U80904TR2021PTC013885</h1> <br />
              <h1>ISO:9001:2015, Certificate Number: 21IQGQ82</h1> <br />
              <p className="mt-10">
                All Rights Reserved | Copyright © BISJHINTUS | 2024
              </p>
            </div>

            {/* add  startupindia logo*/}
            <div
              className="flex justify-center items-center w-full mt-10 hover-zoom"
            >
              <img
                src="\startupIndia_vowlink_logo.png"
                alt="Logo"
                className="h-29 mb-4 sm:mb-0"
              />
            </div>

            {/* Contact dropdown */}
            <div className="w-full mb-4  mt-10">
              <button
                className="w-full flex justify-between text-cyan-500
               items-center text-xl font-semibold py-2 "
                onClick={() => setIsLegalOpen(!isLegalOpen)}
              >
                CONTACT
                <span>{isLegalOpen ? "▴" : "▾"}</span>
              </button>
              {isLegalOpen && (
                <div className="mt-2">
                  <div className=" gap-4">
                    {/* first paragraph */}
                    <ul className="space-y-4 mt-10 text-lg">
                      <li className="text-xl font-bold">Registered Office</li>
                      <li>C/O Jhintu Baidya Adhikari,</li>
                      <li>Ramakrishna Colony, Belonia,</li>
                      <li>South Tripura, Tripura – 799155</li>
                    </ul>

                    {/* second paragraph */}
                    <ul className="space-y-4 mt-10 text-lg">
                      <li className="text-xl font-bold">Corporate Office</li>
                      <li>KUDCEMP Building, 2nd Floor,</li>
                      <li>MCC Commercial Complex,</li>
                      <li>Mallikatte, Kadri, Mangalore,</li>
                      <li>Karnataka – 575002</li>
                    </ul>

                    {/* third paragraph */}
                    <ul className="space-y-4 mt-10 text-lg">
                      <li>Ph: +91 9353383517</li>
                      <li>Mail: adoreforgrowth@bisjhintus.com</li>
                    </ul>
                  </div>
                </div>
              )}
              <hr className="text-gray-500 mt-10" />
            </div>
          </div>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
