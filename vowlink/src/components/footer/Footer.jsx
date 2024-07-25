// import React, { useState } from "react";
// import { SocialIcon } from "react-social-icons";
// import { PiGreaterThanLight } from "react-icons/pi";
// const Footer = () => {
//   const [isopen, setopen] = useState(false);

//   const showBox = () => {
//     setopen(!isopen);
//   };
//   return (
//     // bg-gray-900 
//     <footer className="bg-[#fff] p-8">
//       <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-64">
//         {/* bisjhintus logo and social media Links Section */}
//         <div className="space-y-3">
//           {/* <h3 className="font-bold text-lg mb-4">Quick Links</h3> */}
//           <img
//             className="h-[200px]"
//             src="https://bisjhintus.com/assets/images/logo-full.png"
//             alt=""
//           />
//           <ul className="px- space-x-2">
//             {/* add bisjhintus all link of social-media */}

//             <a href="">
//               <SocialIcon url="https://www.facebook.com/BISJHINTUS" />
//             </a>
//             <a href="" className="">
//               <SocialIcon
//                 className=""
//                 url="https://twitter.com/BISJHINTUS_lst"
//               />
//             </a>

//             <a href="">
//               <SocialIcon url="https://www.instagram.com/BISJHINTUS" />
//             </a>
//             <a href="">
//               <SocialIcon url="https://www.linkedin.com/company/bisjhintu-s-let-s-succeed-together/" />
//             </a>
//           </ul>

//           <ul className="px- space-x-2">
//             <a href="">
//               <SocialIcon url="https://www.quora.com/profile/BISJHINTUS-Lets-Succeed-Together" />
//             </a>
//             <a href="">
//               <SocialIcon url="https://in.pinterest.com/bisjhintus/" />
//             </a>
//             <a href="">
//               <SocialIcon url="https://www.youtube.com/channel/UCq9vBOTqYP3R5h-ELeBx8Hg" />
//             </a>
//             <a href="">
//               <SocialIcon url="https://bisjhintus.medium.com/" />
//             </a>
//           </ul>
//         </div>

//         {/* Link Section */}
//         <div className="w-[407.61px] flex justify-center gap-10">
//           {/* <h3 className="text-xl mb-4  text-cyan-500">Links</h3> */}

//           <ul className="py-4 space-y-5">
//             <h3 className="text-xl mb-4  text-cyan-500">Links</h3>
//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/faq" className="hover:">
//                 Home
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600 ">
//               <a href="/terms" className="hover:text-cyan-500">
//                 About
//               </a>
//             </li>

//             <li className="mb-2  text-lg text-gray-600 ext-gray-600">
//               <a href="/privacy" className="hover:text-cyan-500">
//                 Contact
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600 ">
//               <a href="/help" className="hover:text-cyan-500">
//                 Subscription
//               </a>
//             </li>

//             <li className="mb-2  text-lg text-gray-600 ">
//               <a href="/faq" className="hover:text-cyan-500">
//                 Learn Portal
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600 ">
//               <a href="/terms" className="hover:text-cyan-500">
//                 Test Portal
//               </a>
//             </li>

//             <li className="mb-2  text-lg text-gray-600 ">
//               <a href="/privacy" className="hover:text-cyan-500">
//                 Community Portal
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600 ">
//               <a href="/help" className="hover:text-cyan-500">
//                 Blog Portal
//               </a>
//             </li>

//             <li className="mb-2  text-lg text-gray-600 ">
//               <a href="/faq" className="hover:text-cyan-500">
//                 News Portal
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/terms" className="hover:text-cyan-500">
//                 Enterprise LMS
//               </a>
//             </li>

//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/privacy" className="hover:text-cyan-500">
//                 Job Portal
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/help" className="hover:text-cyan-500">
//                 Profile Builder
//               </a>
//             </li>

//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/faq" className="hover:text-cyan-500">
//                 Expert Portal
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/terms" className="hover:text-cyan-500">
//                 Web Builder
//               </a>
//             </li>

//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/privacy" className="hover:text-cyan-500">
//                 Form Builder
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/help" className="hover:text-cyan-500">
//                 Podcast Portal
//               </a>
//             </li>

//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/privacy" className="hover:text-cyan-500">
//                 CSR Contribute
//               </a>
//             </li>
//             <li className="mb-2  text-lg text-gray-600">
//               <a href="/help" className="hover:text-cyan-500">
//                 Teach
//               </a>
//             </li>
//           </ul>

//           {/*3rd column  */}
//           <div className="mt-12">
//             {/* <h3 className="font-bold text-lg mb-4">Follow Us</h3> */}
//             <ul className="sm:flex-col py-4  space-y-5">
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500  text-lg text-gray-600"
//                 >
//                   Franchise
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500   text-lg text-gray-600"
//                 >
//                   Career
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500  text-lg text-gray-600"
//                 >
//                   Teacher's Module
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500   text-lg text-gray-600"
//                 >
//                   Partner with us
//                 </a>
//               </li>

//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500   text-lg text-gray-600"
//                 >
//                   Find me a teacher
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500  text-lg text-gray-600"
//                 >
//                   Our Initiatives
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500  text-lg text-gray-600"
//                 >
//                   FAQ
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500  text-lg text-gray-600"
//                 >
//                   Future with Bisjhintus
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500  text-lg text-gray-600"
//                 >
//                   Bisjhintus for Business
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500  text-lg text-gray-600"
//                 >
//                   White Board
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   className="hover:text-cyan-500  text-lg  text-gray-600"
//                 >
//                   Verify Internship
//                 </a>
//               </li>

//               {/* dropdown */}
//               <li
//                 onClick={showBox}
//                 className="  flex hover:text-cyan-500  text-gray-600"
//               >
//                 More{" "}
//                 <PiGreaterThanLight className="ml-2 mt-[5px] text-cyan-500 " />
//               </li>
//               {/* click the button showBox then show beloq dropdown */}
//               {isopen && (
//                 <div className="ml- w-52">
//                   <ul className="py-4 px-4 rounded-xl space-y- text-left whitespace-nowrap border border-gray-400">
//                     <a href="" className="">
//                       <li className="mt-  text-lg text-gray-600 hover:text-cyan-500">
//                         Exam corner blog
//                       </li>
//                     </a>
//                     <a href="" className="">
//                       {" "}
//                       <li className="mt-6 text-lg text-gray-600 hover:text-cyan-500">
//                         Crash course
//                       </li>
//                     </a>
//                     <a href="" className="">
//                       {" "}
//                       <li className="mt-6 text-lg text-gray-600 hover:text-cyan-500">
//                         Help and support
//                       </li>
//                     </a>
//                     <a href="" className="">
//                       {" "}
//                       <li className="mt-6 text-lg text-gray-600 hover:text-cyan-500">
//                         Professional Walkway
//                       </li>
//                     </a>
//                     <a href="" className="">
//                       {" "}
//                       <li className="mt-6 text-lg text-gray-600 hover:text-cyan-500">
//                         Free resources
//                       </li>
//                     </a>
//                   </ul>
//                 </div>
//               )}
//             </ul>
//           </div>
//         </div>

//         <div className="block w-[269.94px] ">
//           <h2 className="text-cyan-500 text-xl">LEGAL</h2>
//           {/* <h3 className="font-bold text-lg mb-4">Follow Us</h3> */}
//           <ul className="sm:flex-col py-4  space-y-5">
//             <li>
//               <a
//                 href="#"
//                 className=" text-lg hover:text-cyan-500 text-gray-600"
//               >
//                 User Guidlines
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500   text-lg text-gray-600"
//               >
//                 Terms and Conditions
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg text-gray-600"
//               >
//                 Privacy Policy
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg  text-gray-600"
//               >
//                 refund Policy & Cancellation Policy
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg  text-gray-600"
//               >
//                 Subscription Policy
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg text-gray-600"
//               >
//                 1.1 Live mentorships guidlines
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500   text-lg text-gray-600"
//               >
//                 Child safety policy or Minor Policy
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg text-gray-600"
//               >
//                 Refferal Policy
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg text-gray-600"
//               >
//                 Coupon Policy
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg text-gray-600"
//               >
//                 Employer Policy
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg text-gray-600"
//               >
//                 Certificate Policy
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#"
//                 className="hover:text-cyan-500  text-lg text-gray-600"
//               >
//                 Global Portals Policy
//               </a>
//             </li>
//           </ul>
//         </div>

//       </div>

//       {/* Bottom Section */}
//       <div className="mt-8 border-t border-gray-700 pt-4 text-center">
//         <p>
//           &copy; {new Date().getFullYear()} Your Organization Name. All rights
//           reserved.
//         </p>
//         <p className="text-sm">Powered by Your Educational Platform.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;








import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { PiGreaterThanLight } from "react-icons/pi";
const greatersign=">"
const Footer = () => {
const [isopen ,setopen]=useState(false)
const showBox=()=>{
  setopen(!isopen)
}

  return (
    <footer className="bg-gray-50 text-gray-600 py-12">
      <div className="container mx-auto px-4">
       


<div className='lg:flex justify-center lg:justify-between lg:px-40'>
  {/* left side */}
  <div className='lg:flex justify-center items-center text-center lg:text-left'>
  <div className='mx-auto lg:text-left shadow-xl bg-[#fff] p-3 h-[70px] w-[70px] rounded-full text-center'>
  <img 
    className='mx-auto ml-1 mt-2' 
    src="https://bisjhintus.com/assets/images/graphics/mail.svg" 
    alt="Newsletter" 
  />
</div>

  <div className='ml-4 mt- lg:mt-0 py-6 '> {/* Adjust margin for spacing */}
    <h3 className='text-lg font-bold'>Join our newsletter</h3>
    <p>Subscribe to get the latest updates from BISJHINTUS.</p>
  </div>
</div>

  {/* right side */}
  <div className='md:flex justify-center md:mt-4'>
    <div className=''>
    <form action="https://bisjhintus.com/newsletter">
       <input
                id="email"
                type="email"
                className="input newsletter w-full h-14 sm:w-auto 
                border border-gray-300 rounded py-2 px-4 mb-4 sm:mb-0 sm:mr-2"
                maxLength="256"
                name="email"
                data-name="email"
                placeholder="Enter your email"
                required=""
              />
       </form>
    </div>
      <div>
        <button className='w-full rounded-sm bg-cyan-500 p-4 px-10 text-white'>SUBSCRIBE</button>
      </div>
  </div>
</div>
<hr className='mx-0 mt-10 lg:mx-5 xl:mx-36' />

{/*all column  show lg size and hidden less than lg size  */}
{/* desktop */}
        <div className="hidden lg:flex  justify-center h-[895.99px]   mt- md:gap-52 xl:gap-42">
        {/* items-center */}

        {/* logo and icons social media */}
        <div className='flex gap-0 md:gap-20'>
          <div className="flex flex-col  ">
            <a href="#top" className="mb-4 ">
              <img
                src="https://bisjhintus.com/assets/images/logo-full.png"
                alt="BISJHINTUS Logo"
                className="w-48 "
              />
            </a>
            {/* add link done */}
            <div className="flex flex-col space-x- w-full mb-12 items-center">
              <div className='space-x-3 whitespace-nowrap'>
              <a href="https://www.facebook.com/BISJHINTUS" className="text-gray-600 hover:text-cyan-400">
                <i className="fab fa-facebook-f bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
              </a>
              <a href="https://twitter.com/BISJHINTUS_lst" className="text-gray-600 hover:text-cyan-400">
                <i className="fab fa-twitter   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
              </a>
              <a href="https://www.instagram.com/BISJHINTUS" className="text-gray-600 hover:text-cyan-400">
                <i className="fab fa-instagram   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
              </a>
              <a href="https://www.linkedin.com/company/bisjhintu-s-let-s-succeed-together/" className="text-gray-600 hover:text-cyan-400">
                <i className="fab fa-linkedin   bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
              </a>  
              </div>
              
             {/* 2nd row icon */}
             {/* done with add link */}
             <div className='space-x-2 mt-3  whitespace-nowrap'>
             <a
             className=""
             href="https://www.quora.com/profile/BISJHINTUS-Lets-Succeed-Together" >
                <i className="fab fa-quora  bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
              </a>
              <a href="https://in.pinterest.com/bisjhintus/" className="text-gray-600 hover:text-cyan-400">
                <i className="fab fa-pinterest  bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCq9vBOTqYP3R5h-ELeBx8Hg" className="text-gray-600 hover:text-cyan-400">
                <i className="fab fa-youtube bg-slate-50 p-2  border  border-gray-200 hover:bg-cyan-500 coursor-pointer hover:text-white rounded-full"></i>
              </a>
              <a href="https://bisjhintus.medium.com/" className="text-gray-600 hover:text-cyan-400">
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
                <li><a href="https://bisjhintus.com/" className="text-gray-600 hover:text-cyan-400">Home</a></li>
                <li><a href="https://bisjhintus.com/about" className="text-gray-600 hover:text-cyan-400">About</a></li>
                <li><a href="https://bisjhintus.com/contact" className="text-gray-600 hover:text-cyan-400">Contact</a></li>
                <li><a href="https://pricing.bisjhintus.com/" className="text-gray-600 hover:text-cyan-400">Subscription</a></li>
                <li><a href="https://learn.bisjhintus.com/register" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Learn Portal</a></li>
               
                <li><a href="https://exam.bisjhintus.com/register" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Test Portal</a></li>
               
                <li><a href="https://community.bisjhintus.com/user/register"
                 className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Community Portal</a></li>
                
                <li><a href="https://blog.bisjhintus.com/register"
                 className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Blog Portal</a></li>
               
                <li><a href="#newsportal" 
                className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">News Portal</a></li>
                
                <li><a href="https://enterprise.bisjhintus.com/"
                 className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Enterprise LMS</a></li>

                <li><a href="https://jobscorporate.bisjhintus.com/register" 
                className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Job Portal</a></li>
                
                <li><a href="https://profilebuilder.bisjhintus.com/registration/step-1/regular/31" 
                className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Profile Builder</a></li>
              
                <li><a href="https://expert.bisjhintus.com/plan"
                 className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Expert Portal</a></li>

                <li><a href="https://webbuilder.bisjhintus.com/register"
                 className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Web Builder</a></li>
               
                <li><a href="https://forms.bisjhintus.com/request/create/eyJpdiI6InFZbzFNcWZoQndVaGJQd3gxM2hHT1E9PSIsInZhbHVlIjoiQ0VQWktEM3JRR05HNGZkdzNCemF5K0svUzFYVHlMOTFDZm1RckNOSUJ3Yz0iLCJtYWMiOiIyMTQwYmZkZjY3ZmJkNTViZGU2MTlhMmQxYmMxZDRlZjZmMmQyM2ZkNmNjMzg4MmFhZDU3OTM2ZTg2Y2JlMDI2IiwidGFnIjoiIn0=" 
                className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Form Builder</a></li>
             
                <li><a href="https://podcast.bisjhintus.com/user/register"
                 className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Podcast Portal</a></li>
             
                <li><a href="https://charitycsr.bisjhintus.com/register"
                 className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">CSR Contribute</a></li>
             
              <li><a href="https://bisjhintus.com/instructor"
               className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Teach</a></li>
            </ul>

{/* done with add link */}
              <ul className="space-y-4 ">
                <li><a href="https://franchising.bisjhintus.com/" className="text-gray-600hover:text-cyan-400">Franchise</a></li>
                <li><a href="https://worklife.bisjhintus.com/" className="text-gray-600 hover:text-cyan-400">Career</a></li>
                <li><a href="https://bisjhintus.com/teachers-module" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Teacher's Module</a></li>
                <li><a href="https://bisjhintus.com/our-initiatives" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Our Initiatives</a></li>

                <li><a href="https://bisjhintus.com/partner-with-us" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Partner with us</a></li>
                <li><a href="https://bisjhintus.com/find-me-a-teacher" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Find me a teacher</a></li>
                <li><a href="https://bisjhintus.com/FAQ" className="text-gray-600 hover:text-cyan-400">FAQ</a></li>
                <li><a href="https://bisjhintus.com/future-with-bisjhintus" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Future with Bisjhintus</a></li>

                <li><a href="https://bisjhintus.com/bisjhintus-for-business" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"> Bisjhintus For Buisness</a></li>
                <li><a href="https://bisjhintus.com/whiteboard" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"> White Board</a></li>
                <li><a href="https://verifyinternshipcertificate.bisjhintus.com/" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap"> Verify internship</a></li>

              
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
                    <a href="https://bisjhintus.com/more#exam-corner-blog" className="">
                      <li className="mt-  text-sm text-gray-600 hover:text-cyan-500">
                        Exam corner blog
                      </li>
                    </a>
                    <a href="https://bisjhintus.com/more#crash-course" className="">
                      {" "}
                      <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                        Crash course
                      </li>
                    </a>

                    <a href="https://bisjhintus.com/more#help-and-support" className="">
                      {" "}
                      <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                        Help and support
                      </li>
                    </a>
                    <a href="https://bisjhintus.com/professional-walkway" className="">
                      {" "}
                      <li className="mt-6 text-sm text-gray-600 hover:text-cyan-500">
                        Professional Walkway
                      </li>
                    </a>
                    <a href="https://bisjhintus.com/more#free-resources" className="">
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
                <li><a href="https://bisjhintus.com/user-guidelines" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">User Guidelines</a></li>
                <li><a href="https://bisjhintus.com/terms-and-conditions" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Terms and Conditions</a></li>
                <li><a href="https://bisjhintus.com/privacy-policy" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Privacy Policy</a></li>
                <li><a href="https://bisjhintus.com/refund-policy" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Refund Policy & Cancellation Policy</a></li>
                <li><a href="https://bisjhintus.com/subscription-policy" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Subscription Policy</a></li>
                <li><a href="https://bisjhintus.com/live-mentorships-guidelines" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">1:1 Live mentorships guidelines</a></li>
                <li><a href="https://bisjhintus.com/minor-child-safety-policy" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Child safety policy or Minor Policy</a></li>
                <li><a href="https://bisjhintus.com/refferal-policy" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Referral Policy</a></li>
                <li><a href="https://bisjhintus.com/B2B-terms-policies" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">B2B Terms & Policies</a></li>
                <li><a href="https://bisjhintus.com/coupon-policy" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Coupon Policy</a></li>
                <li><a href="https://employerpolicy.bisjhintus.com/" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Employer Policy</a></li>
                <li><a href="https://certificatepolicy.bisjhintus.com/" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Certificate Policy</a></li>
                <li><a href="https://globalportalspolicy.bisjhintus.com/" className="text-gray-600 hover:text-cyan-400 whitespace-nowrap">Global Portals Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        </div>

       


       {/* mobile size ,tab size */}
      
      </div>
    </footer>
  );
};

export default Footer;


