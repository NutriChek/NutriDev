
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@nextui-org/navbar';
import Link from 'next/link';
import { Button } from '@nextui-org/button';



export default function NavBar() {
  return (
    <Navbar>
      <NavbarBrand>
        <img width={45} src={'/logo.png'} alt='Logo' className='m-5' />
        <p className='font-bold text-inherit'>NutriDev</p>
      </NavbarBrand>
      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        <NavbarItem>
          <Link href='#'>?</Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href='#' aria-current='page'>
            ?
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color='foreground' href='#'>
            ?
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='/login'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='/register' variant='flat'>
            Register
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
