import { useParams, Link } from 'react-router-dom';

export default function Writing({ writings }) {
  const { id } = useParams();
  const result = writings.find(({ name }) => name === id);
  return (
    <>
      <Link className="min-w-full text-xs m-6 md:text-md md:m-48 subpixel-antialiased" to="/arts">back</Link>
      <h2 className="text-center text-xl md:text-2xl py-8 subpixel-antialiased">{ result.title }</h2>
      <div className="text-center m-8">
        <p className="max-w-sm mx-auto flex justify-center text-center md:leading-loose subpixel-antialiased">{ result.text }</p>
      </div>
    </>
  );
}
