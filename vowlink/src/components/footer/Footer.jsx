import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { PiGreaterThanLight } from "react-icons/pi";
const Footer = () => {
  const [isopen, setopen] = useState(false);

  const showBox = () => {
    setopen(!isopen);
  };
  return (
    // bg-gray-900 text-white
    <footer className="bg-[#fff] p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-64">
        {/* bisjhintus logo and social media Links Section */}
        <div className="space-y-3">
          {/* <h3 className="font-bold text-lg mb-4">Quick Links</h3> */}
          <img
            className="h-[200px]"
            src="https://bisjhintus.com/assets/images/logo-full.png"
            alt=""
          />
          <ul className="px- space-x-2">
            {/* add bisjhintus all link of social-media */}

            <a href="">
              <SocialIcon url="https://www.facebook.com/BISJHINTUS" />
            </a>
            <a href="" className="">
              <SocialIcon
                className=""
                url="https://twitter.com/BISJHINTUS_lst"
              />
            </a>

            <a href="">
              <SocialIcon url="https://www.instagram.com/BISJHINTUS" />
            </a>
            <a href="">
              <SocialIcon url="https://www.linkedin.com/company/bisjhintu-s-let-s-succeed-together/" />
            </a>
          </ul>

          <ul className="px- space-x-2">
            <a href="">
              <SocialIcon url="https://www.quora.com/profile/BISJHINTUS-Lets-Succeed-Together" />
            </a>
            <a href="">
              <SocialIcon url="https://in.pinterest.com/bisjhintus/" />
            </a>
            <a href="">
              <SocialIcon url="https://www.youtube.com/channel/UCq9vBOTqYP3R5h-ELeBx8Hg" />
            </a>
            <a href="">
              <SocialIcon url="https://bisjhintus.medium.com/" />
            </a>
          </ul>
        </div>

        {/* Link Section */}
        <div className="w-[407.61px] flex justify-center gap-10">
          {/* <h3 className="text-xl mb-4  text-cyan-500">Links</h3> */}

          <ul className="py-4 space-y-5">
            <h3 className="text-xl mb-4  text-cyan-500">Links</h3>
            <li className="mb-2  text-lg text-gray-600">
              <a href="/faq" className="hover:">
                Home
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600 ">
              <a href="/terms" className="hover:text-cyan-500">
                About
              </a>
            </li>

            <li className="mb-2  text-lg text-gray-600 ext-gray-600">
              <a href="/privacy" className="hover:text-cyan-500">
                Contact
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600 ">
              <a href="/help" className="hover:text-cyan-500">
                Subscription
              </a>
            </li>

            <li className="mb-2  text-lg text-gray-600 ">
              <a href="/faq" className="hover:text-cyan-500">
                Learn Portal
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600 ">
              <a href="/terms" className="hover:text-cyan-500">
                Test Portal
              </a>
            </li>

            <li className="mb-2  text-lg text-gray-600 ">
              <a href="/privacy" className="hover:text-cyan-500">
                Community Portal
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600 ">
              <a href="/help" className="hover:text-cyan-500">
                Blog Portal
              </a>
            </li>

            <li className="mb-2  text-lg text-gray-600 ">
              <a href="/faq" className="hover:text-cyan-500">
                News Portal
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600">
              <a href="/terms" className="hover:text-cyan-500">
                Enterprise LMS
              </a>
            </li>

            <li className="mb-2  text-lg text-gray-600">
              <a href="/privacy" className="hover:text-cyan-500">
                Job Portal
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600">
              <a href="/help" className="hover:text-cyan-500">
                Profile Builder
              </a>
            </li>

            <li className="mb-2  text-lg text-gray-600">
              <a href="/faq" className="hover:text-cyan-500">
                Expert Portal
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600">
              <a href="/terms" className="hover:text-cyan-500">
                Web Builder
              </a>
            </li>

            <li className="mb-2  text-lg text-gray-600">
              <a href="/privacy" className="hover:text-cyan-500">
                Form Builder
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600">
              <a href="/help" className="hover:text-cyan-500">
                Podcast Portal
              </a>
            </li>

            <li className="mb-2  text-lg text-gray-600">
              <a href="/privacy" className="hover:text-cyan-500">
                CSR Contribute
              </a>
            </li>
            <li className="mb-2  text-lg text-gray-600">
              <a href="/help" className="hover:text-cyan-500">
                Teach
              </a>
            </li>
          </ul>

          {/*3rd column  */}
          <div className="mt-12">
            {/* <h3 className="font-bold text-lg mb-4">Follow Us</h3> */}
            <ul className="sm:flex-col py-4  space-y-5">
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500  text-lg text-gray-600"
                >
                  Franchise
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500   text-lg text-gray-600"
                >
                  Career
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500  text-lg text-gray-600"
                >
                  Teacher's Module
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500   text-lg text-gray-600"
                >
                  Partner with us
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500   text-lg text-gray-600"
                >
                  Find me a teacher
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500  text-lg text-gray-600"
                >
                  Our Initiatives
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500  text-lg text-gray-600"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500  text-lg text-gray-600"
                >
                  Future with Bisjhintus
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500  text-lg text-gray-600"
                >
                  Bisjhintus for Business
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500  text-lg text-gray-600"
                >
                  White Board
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-cyan-500  text-lg  text-gray-600"
                >
                  Verify Internship
                </a>
              </li>

              {/* dropdown */}
              <li
                onClick={showBox}
                className="  flex hover:text-cyan-500  text-gray-600"
              >
                More{" "}
                <PiGreaterThanLight className="ml-2 mt-[5px] text-cyan-500 " />
              </li>
              {/* click the button showBox then show beloq dropdown */}
              {isopen && (
                <div className="ml- w-52">
                  <ul className="py-4 px-4 rounded-xl space-y- text-left whitespace-nowrap border border-gray-400">
                    <a href="" className="">
                      <li className="mt-  text-lg text-gray-600 hover:text-cyan-500">
                        Exam corner blog
                      </li>
                    </a>
                    <a href="" className="">
                      {" "}
                      <li className="mt-6 text-lg text-gray-600 hover:text-cyan-500">
                        Crash course
                      </li>
                    </a>
                    <a href="" className="">
                      {" "}
                      <li className="mt-6 text-lg text-gray-600 hover:text-cyan-500">
                        Help and support
                      </li>
                    </a>
                    <a href="" className="">
                      {" "}
                      <li className="mt-6 text-lg text-gray-600 hover:text-cyan-500">
                        Professional Walkway
                      </li>
                    </a>
                    <a href="" className="">
                      {" "}
                      <li className="mt-6 text-lg text-gray-600 hover:text-cyan-500">
                        Free resources
                      </li>
                    </a>
                  </ul>
                </div>
              )}
            </ul>
          </div>
        </div>

        <div className="block w-[269.94px] ">
          <h2 className="text-cyan-500 text-xl">LEGAL</h2>
          {/* <h3 className="font-bold text-lg mb-4">Follow Us</h3> */}
          <ul className="sm:flex-col py-4  space-y-5">
            <li>
              <a
                href="#"
                className=" text-lg hover:text-cyan-500 text-gray-600"
              >
                User Guidlines
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-cyan-500   text-lg text-gray-600"
              >
                Terms and Conditions
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg text-gray-600"
              >
                Privacy Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg  text-gray-600"
              >
                refund Policy & Cancellation Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg  text-gray-600"
              >
                Subscription Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg text-gray-600"
              >
                1.1 Live mentorships guidlines
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-500   text-lg text-gray-600"
              >
                Child safety policy or Minor Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg text-gray-600"
              >
                Refferal Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg text-gray-600"
              >
                Coupon Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg text-gray-600"
              >
                Employer Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg text-gray-600"
              >
                Certificate Policy
              </a>
            </li>

            <li>
              <a
                href="#"
                className="hover:text-cyan-500  text-lg text-gray-600"
              >
                Global Portals Policy
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Your Organization Name. All rights
          reserved.
        </p>
        <p className="text-sm">Powered by Your Educational Platform.</p>
      </div>
    </footer>
  );
};

export default Footer;





// import React from "react";

// const Footer = () => {
//   return (
//     <footer
//       data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cda3"
//       className="footer"
//       style={{
//         transform:
//           "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
//         transformStyle: "preserve-3d",
//         opacity: 1,
//       }}
//     >
//       <div className="container-default-1209px w-container">
//         <div
//           data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cdf2"
//           className="container-newsletter"
//           style={{
//             transform:
//               "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
//             transformStyle: "preserve-3d",
//             opacity: 1,
//           }}
//         >
//           <div className="split-content newsletter-left">
//             <div className="newsletter-icon-wrapper">
//               <img
//                 src="https://bisjhintus.com/assets/images/graphics/mail.svg"
//                 alt=""
//                 className="newsletter-icon"
//               />
//             </div>
//             <div className="newsletter-content">
//               <div className="title newsletter">Join our newsletter</div>
//               <div>Subscribe to get latest updates from BISJHINTUS.</div>
//             </div>
//           </div>
//           <div className="form-block newsletter w-form">
//             <form
//               action="https://bisjhintus.com/newsletter"
//               method="post"
//               id="newsletter-form"
//               className="form-newsletter"
//             >
//               <input
//                 type="hidden"
//                 name="_token"
//                 value="ErA5zxjy8Lo44altDmZWfw2N5OIlAA1VUMhrl3NB"
//                 autoComplete="off"
//               />
//               <input
//                 id="email"
//                 type="email"
//                 className="input newsletter w-input"
//                 maxLength="256"
//                 name="email"
//                 data-name="email"
//                 placeholder="Enter your email"
//                 required=""
//               />
//               <input
//                 id="subscribe_letter"
//                 type="submit"
//                 value="Subscribe"
//                 data-wait="Please wait..."
//                 className="button-primary w-button"
//               />
//             </form>
//             <div className="success-message w-form-done">
//               <div>Thank you! You are now subscribed!</div>
//             </div>
//             <div className="error-message w-form-fail">
//               <div>Oops! Something went wrong.</div>
//             </div>
//           </div>
//         </div>
//         <div className="footer-links-block">
//           <div
//             data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cda6"
//             className="links-block footer-links"
//             style={{
//               transform:
//                 "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
//               transformStyle: "preserve-3d",
//               opacity: 1,
//             }}
//           >
//             <a href="#top" className="brand w-inline-block">
//               <img
//                 src="https://bisjhintus.com/assets/images/logo-full.png"
//                 alt=""
//                 style={{ width: 200 }}
//               />
//             </a>
//             <div className="social-media-wrapper footer-fine-print">
//               <a
//                 href="https://www.facebook.com/BISJHINTUS"
//                 className="social-media-icon-wrapper w-inline-block"
//               >
//                 <div className="social-media-icon-footer"></div>
//               </a>
//               <div className="spacer social-media-footer"></div>
//               <a
//                 href="https://twitter.com/BISJHINTUS_lst"
//                 className="social-media-icon-wrapper w-inline-block"
//               >
//                 <div className="social-media-icon-footer twitter"></div>
//               </a>
//               <div className="spacer social-media-footer"></div>
//               <a
//                 href="https://www.instagram.com/BISJHINTUS"
//                 className="social-media-icon-wrapper w-inline-block"
//               >
//                 <div className="social-media-icon-footer"></div>
//               </a>
//               <div className="spacer social-media-footer"></div>
//               <a
//                 href="https://www.linkedin.com/company/bisjhintu-s-let-s-succeed-together/"
//                 className="social-media-icon-wrapper w-inline-block"
//               >
//                 <div className="social-media-icon-footer"></div>
//               </a>
//             </div>
//             <div className="social-media-wrapper footer-fine-print">
//               <a
//                 href="https://www.quora.com/profile/BISJHINTUS-Lets-Succeed-Together"
//                 className="social-media-icon-wrapper w-inline-block"
//               >
//                 <div className="fa fa-quora"></div>
//               </a>
//               <div className="spacer social-media-footer"></div>
//               <a
//                 href="https://in.pinterest.com/bisjhintus/"
//                 className="social-media-icon-wrapper w-inline-block"
//               >
//                 <div className="fa fa-pinterest"></div>
//               </a>
//               <div className="spacer social-media-footer"></div>
//               <a
//                 href="https://www.youtube.com/channel/UCq9vBOTqYP3R5h-ELeBx8Hg"
//                 className="social-media-icon-wrapper w-inline-block"
//               >
//                 <div className="fa fa-youtube-play"></div>
//               </a>
//               <div className="spacer social-media-footer"></div>
//               <a
//                 href="https://bisjhintus.medium.com/"
//                 className="social-media-icon-wrapper w-inline-block"
//               >
//                 <div className="fa fa-medium"></div>
//               </a>
//             </div>
//           </div>
//           <div
//             data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cda9"
//             style={{
//               zIndex: 1,
//               transform:
//                 "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
//               transformStyle: "preserve-3d",
//               opacity: 1,
//             }}
//             className="links-block _2"
//           >
//             <div
//               data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cdaa"
//               className="footer-mobile-title"
//             >
//               <h3 className="footer-title">
//                 Links{" "}
//                 <span className="dropdown-icon-footer">
//                   
//                 </span>
//               </h3>
//             </div>
//             <div className="footer-mobile-content" >
//               <div className="footer-content-links">
//                 <ul role="list" className="list-footer w-list-unstyled">
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com"
//                       aria-current="page"
//                       className="footer-link active"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/about"
//                       className="footer-link"
//                     >
//                       About
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/contact"
//                       className="footer-link"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://pricing.bisjhintus.com/"
//                       className="footer-link"
//                     >
//                       Subscription
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://learn.bisjhintus.com/register"
//                       className="footer-link"
//                     >
//                       Learn Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://exam.bisjhintus.com/register"
//                       className="footer-link"
//                     >
//                       Test Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://community.bisjhintus.com/user/register"
//                       className="footer-link"
//                     >
//                       Community Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://blog.bisjhintus.com"
//                       className="footer-link"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/our-achievers"
//                       className="footer-link"
//                     >
//                       Our Achievers
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/become-an-instructor"
//                       className="footer-link"
//                     >
//                       Become an Instructor
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/franchise"
//                       className="footer-link"
//                     >
//                       Franchise
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/newsletter"
//                       className="footer-link"
//                     >
//                       Newsletter
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/shop"
//                       className="footer-link"
//                     >
//                       Shop
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-content-links">
//                 <ul role="list" className="list-footer w-list-unstyled">
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/privacy-policy"
//                       className="footer-link"
//                     >
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/terms-conditions"
//                       className="footer-link"
//                     >
//                       Terms and Conditions
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/cookie-policy"
//                       className="footer-link"
//                     >
//                       Cookie Policy
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/sitemap"
//                       className="footer-link"
//                     >
//                       Sitemap
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div
//             data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cdab"
//             style={{
//               zIndex: 1,
//               transform:
//                 "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
//               transformStyle: "preserve-3d",
//               opacity: 1,
//             }}
//             className="links-block _2"
//           >
//             <div
//               data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cda6"
//               className="footer-content-links"
//             >
//               <div className="footer-legal">
//                 <a
//                   href="https://bisjhintus.com/imprint"
//                   className="footer-link"
//                 >
//                   Imprint
//                 </a>
//               </div>
//               <div className="footer-legal">
//                 <a
//                   href="https://bisjhintus.com/security"
//                   className="footer-link"
//                 >
//                   Security
//                 </a>
//               </div>
//               <div className="footer-legal">
//                 <a href="https://bisjhintus.com/trust" className="footer-link">
//                   Trust
//                 </a>
//               </div>
//             </div>
//             <div className="footer-mobile-content" >
//               <div className="footer-content-links">
//                 <ul role="list" className="list-footer w-list-unstyled">
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com"
//                       aria-current="page"
//                       className="footer-link active"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/about"
//                       className="footer-link"
//                     >
//                       About
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/contact"
//                       className="footer-link"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://pricing.bisjhintus.com/"
//                       className="footer-link"
//                     >
//                       Subscription
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://learn.bisjhintus.com/register"
//                       className="footer-link"
//                     >
//                       Learn Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://exam.bisjhintus.com/register"
//                       className="footer-link"
//                     >
//                       Test Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://community.bisjhintus.com/user/register"
//                       className="footer-link"
//                     >
//                       Community Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://blog.bisjhintus.com"
//                       className="footer-link"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/our-achievers"
//                       className="footer-link"
//                     >
//                       Our Achievers
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/become-an-instructor"
//                       className="footer-link"
//                     >
//                       Become an Instructor
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/franchise"
//                       className="footer-link"
//                     >
//                       Franchise
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/newsletter"
//                       className="footer-link"
//                     >
//                       Newsletter
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/shop"
//                       className="footer-link"
//                     >
//                       Shop
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-content-links">
//                 <ul role="list" className="list-footer w-list-unstyled">
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/privacy-policy"
//                       className="footer-link"
//                     >
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/terms-conditions"
//                       className="footer-link"
//                     >
//                       Terms and Conditions
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/cookie-policy"
//                       className="footer-link"
//                     >
//                       Cookie Policy
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/sitemap"
//                       className="footer-link"
//                     >
//                       Sitemap
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//           <div
//             data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cdad"
//             style={{
//               zIndex: 1,
//               transform:
//                 "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
//               transformStyle: "preserve-3d",
//               opacity: 1,
//             }}
//             className="links-block _2"
//           >
//             <div
//               data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cdae"
//               className="footer-mobile-title"
//             >
//               <h3 className="footer-title">
//                 Company{" "}
//                 <span className="dropdown-icon-footer" >
//                   
//                 </span>
//               </h3>
//             </div>
//             <div className="footer-mobile-content" >
//               <div className="footer-content-links">
//                 <ul role="list" className="list-footer w-list-unstyled">
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com"
//                       aria-current="page"
//                       className="footer-link active"
//                     >
//                       Home
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/about"
//                       className="footer-link"
//                     >
//                       About
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/contact"
//                       className="footer-link"
//                     >
//                       Contact
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://pricing.bisjhintus.com/"
//                       className="footer-link"
//                     >
//                       Subscription
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://learn.bisjhintus.com/register"
//                       className="footer-link"
//                     >
//                       Learn Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://exam.bisjhintus.com/register"
//                       className="footer-link"
//                     >
//                       Test Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://community.bisjhintus.com/user/register"
//                       className="footer-link"
//                     >
//                       Community Portal
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://blog.bisjhintus.com"
//                       className="footer-link"
//                     >
//                       Blog
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/our-achievers"
//                       className="footer-link"
//                     >
//                       Our Achievers
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/become-an-instructor"
//                       className="footer-link"
//                     >
//                       Become an Instructor
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/franchise"
//                       className="footer-link"
//                     >
//                       Franchise
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/newsletter"
//                       className="footer-link"
//                     >
//                       Newsletter
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/shop"
//                       className="footer-link"
//                     >
//                       Shop
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//               <div className="footer-content-links">
//                 <ul role="list" className="list-footer w-list-unstyled">
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/privacy-policy"
//                       className="footer-link"
//                     >
//                       Privacy Policy
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/terms-conditions"
//                       className="footer-link"
//                     >
//                       Terms and Conditions
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/cookie-policy"
//                       className="footer-link"
//                     >
//                       Cookie Policy
//                     </a>
//                   </li>
//                   <li className="footer-list-item">
//                     <a
//                       href="https://bisjhintus.com/sitemap"
//                       className="footer-link"
//                     >
//                       Sitemap
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="container w-container">
//           <div
//             data-w-id="5d3def44-2af0-a39e-d268-cb5e4a46cdb4"
//             style={{
//               zIndex: 1,
//               transform:
//                 "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
//               transformStyle: "preserve-3d",
//               opacity: 1,
//             }}
//             className="footer-content w-clearfix"
//           >
//             <a
//               href="https://bisjhintus.com/privacy-policy"
//               className="footer-link privacy-link"
//             >
//               Privacy Policy
//             </a>
//             <div className="footer-copyright">
//               &copy; 2023 Bisjhintus.com. All Rights Reserved.
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
