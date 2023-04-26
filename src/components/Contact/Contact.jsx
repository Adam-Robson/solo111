import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SlSocialFacebook, 
  SlSocialGithub, 
  SlSocialSpotify, 
  SlSocialLinkedin } from 'react-icons/sl';
  
export default function Contact() {
  return (
    <>
      <section className="w-screen min-h-screen mx-auto my-20">
        <h2 className="my-10 text-2xl md:text-3xl underline">contact</h2>
        <p className="">feel free to reach out & happy coding!</p>
        <article className="">
          <ul className="flex flex-col items-center justify-evenly my-10">
            <li className="">
              <Link
                to="https://github.com/Adam-Robson">
                <SlSocialGithub className="feather-icon mt-4"></SlSocialGithub>
                <span className="label">github</span>
              </Link>
            </li>
            <li className="">
              <Link to="https://facebook.com/adamrayrobson">
                <SlSocialFacebook className="feather-icon mt-4"></SlSocialFacebook>
                <span className="label">facebook</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="https://spoti.fi/3QNqMuE">
                <SlSocialSpotify className="feather-icon mt-4"></SlSocialSpotify>
                <span className="label">spotify</span>
              </Link>
            </li>
            <li className="mb-4">
              <Link to="https://linkedin.com/in/adamrayrobson">
                <SlSocialLinkedin className="feather-icon mt-4"></SlSocialLinkedin>
                <span className="label">linkedin</span>
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
