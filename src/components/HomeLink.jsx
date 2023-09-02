import { NavLink, useLocation } from 'react-router-dom';



export default function HomeLink() {
  let location = useLocation();

  const homePage = () => location.pathname === '/';

  const goBack = () => location.back();

  return (
    <>
      <NavLink
        to='/'
        className="text-xl absolute top-6 right-8 subpixel-antialiased"
      >home</NavLink>
    </>
  )
}
