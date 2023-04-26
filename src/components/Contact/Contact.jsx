import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  SlSocialFacebook, 
  SlSocialGithub, 
  SlSocialSpotify, 
  SlSocialLinkedin } from 'react-icons/sl';

export default function Contact() {
  return (
    <>
      <NavLink to="/" className="text-sm md:text-md m-10 absolute top-0 left-0">home</NavLink>
      <section className="">
        <h2
          className="subtitle max-w-max mx-auto text-center text-xl md:text-2xl my-16 p-2 subpixel-antialiased underline"
        >
         contact
        </h2>
        <p className="text-center text-md md:text-xl subpixel-antialiased">
          feel free to reach out & happy coding!
        </p>
        <article className="flex flex-col items-center justify-evenly my-10">
          <ul className="">
            <li className="text-center">
              <Link
                to="https://github.com/Adam-Robson">
                <SlSocialGithub className="contact project_icon mt-4" size="9em"></SlSocialGithub>
                <label className="label">github</label>
              </Link>
            </li>
            <li className="text-center">
              <Link to="https://facebook.com/adamrayrobson">
                <SlSocialFacebook className="contact project_icon mt-4" size="9em"></SlSocialFacebook>
                <label className="label">facebook</label>
              </Link>
            </li>
            <li className="text-center">
              <Link to="https://spoti.fi/3QNqMuE">
                <SlSocialSpotify className="contact project_icon mt-4" size="9em"></SlSocialSpotify>
                <label className="label">spotify</label>
              </Link>
            </li>
            <li className="text-center">
              <Link to="https://linkedin.com/in/adamrayrobson">
                <SlSocialLinkedin className="contact project_icon mt-4" size="9em"></SlSocialLinkedin>
                <label className="label">linkedin</label>
              </Link>
            </li>
          </ul>
        </article>
      </section>
    </>
  );
}
