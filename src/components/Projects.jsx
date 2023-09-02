import { Link } from 'react-router-dom';
import { projects } from '../services/data';

export default function Projects() {

      return (
        <>
          <section className="mx-auto fadein px-6">
            <h1 className="text-6xl subpixel-antialiased">projects</h1>
            <div className="h-full w-full">
              <article
                className="max-w-lg flex flex-col items-start justify-center">
                <div className="project text-2xl">
                  <Link
                    to="https://pantry-pal-colab.herokuapp.com/"
                    target="blank"
                    className=""
                  >
                    Pantry Pal
                    <label className="label">{
                      projects[0]
                    }</label>
                  </Link>
                </div>

                <div className="project text-2xl">
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
                <div className="project mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
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
                <div className="project mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
                  <Link
                    to="https://collabomusic.co/"
                    target="blank"
                    className=""
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
                    className=""
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
                    className=""
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
