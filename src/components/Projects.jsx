import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { pantryPal, tallyHo, buddystock, collabo, playground, myFavoriteBooks } from '../services/data';

export default function Projects() {
  const [project, setProject] = useState();

  useEffect(() => {
    const { projectId } = project = ({ id }) => (
      id
    );
    }, []);
  const projectList = toggleDescription = (projects) => {


  }

      return (
        <>
          <section className="mx-auto fadein px-6">
            <h1 className="text-8xl subpixel-antialiased">projects</h1>
            <div className="max-w-full border-red-200 border-2">
              <article
                className="max-w-fit flex flex-col md:flex-row md:no-wrap items-center justify-center border-red-600 border-2">
                <div className="flex">
                  <Link
                    to="https://pantry-pal-colab.herokuapp.com/"
                    target="blank"
                    className="project text-2xl border-red-600 border-5"
                  >
                    <button onClick={ toggleDescription} />
                    Pantry Pal
                    <label className="label">{
                      projects[0]
                    }</label>
                  </Link>
                </div>

                <div className="project text-2xl  border-red-600 border-3">
                  <Link
                    to="https://buddystockviii.com"
                    target="blank"
                    className=""
                  >
                    Buddystock VIII
                    <label className="label">{
                      projects[1]
                    }</label>
                  </Link>
                </div>
                <div className="project text-2xl">
                  <Link
                    to="tally-ho-road-trips.netlify.app/auth/sign-in"
                    target="blank"
                    className=""
                  >
                    Tally-Ho!
                    <label className="label">{
                      projects[2]
                    }</label>
                  </Link>
                </div>
                <div className="project text-2xl subpixel-antialiased">
                  <Link
                    to="https://collabomusic.co/"
                    target="blank"
                    className="subpixel-antialiased project text-2xl"
                  >
                    Collabo
                    <label className="label">{
                      projects[3]
                    }</label>
                  </Link>
                </div>

                <div className="project mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
                  <Link
                    to="https://adaamsfavoritebooks.netlify.app/"
                    target="blank"
                    className="project text-2xl subpixel-antialiased"
                  >
                    My Favorite Books
                    <label
                      className="label">{projects[4]}</label>
                  </Link>
                </div>

                <div className="project mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
                  <Link
                    to="https://tourmaline-lollipop-044f88.netlify.app/"
                    target="blank"
                    className="project text-2xl subpixel-antialiased"
                  >
                    Playground
                    <label
                      className="label">{projects[5]}</label>
                  </Link>
                </div>
              </article>
            </div>
          </section>
        </>
      );
    }
