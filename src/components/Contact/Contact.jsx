import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SlSocialFacebook, 
  SlSocialInstagram, 
  SlSocialGithub, 
  SlSocialSpotify, 
  SlSocialLinkedin } from 'react-icons/sl';
  
export default function Contact() {
  return (
    <>
      <Link className="min-w-full text-xs m-6 md:text-md md:m-48 subpixel-antialiased" to="/">back</Link>
      <h2 className="text-center text-2xl md:text-3xl py-8 subpixel-antialiased">contact</h2>
      <section className="mx-auto text-center">
        <ul className="min-h-full flex flex-col items-center justify-between mt-12 md:mx-12 md:flex-row">
          <li>
            <a
              href="https://github.com/Adam-Robson">
              <SlSocialGithub className="feather-icon mt-4"></SlSocialGithub>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/this.is.le.fog/">
              <SlSocialInstagram className="feather-icon mt-4"></SlSocialInstagram>
            </a>
          </li>
          <li>
            <a href="https://facebook.com/adamrayrobson">
              <SlSocialFacebook className="feather-icon mt-4"></SlSocialFacebook>
            </a>
          </li>
          <li>
            <a href="https://spoti.fi/3QNqMuE">
              <SlSocialSpotify className="feather-icon mt-4"></SlSocialSpotify>
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/in/adamrayrobson">
              <SlSocialLinkedin className="feather-icon mt-4"></SlSocialLinkedin>
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
