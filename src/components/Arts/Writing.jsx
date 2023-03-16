import { useParams, Link } from 'react-router-dom';

export default function Writing({ writings }) {
  const { item } = useParams();
  const selected = writings.find(({ name }) => (name === item));
  return (
    <>
      <Link className="min-w-full text-xs m-6 md:m-12 subpixel-antialiased" to="/">back</Link>
      <h2 className="text-center text-xl py-8 md:text-3xl subpixel-antialiased">{ selected.title }</h2>
      <p className="text-center flex flex-col justify-center items-center subpixel-antialiased">{ selected.text }</p>
    </>
  );
}
