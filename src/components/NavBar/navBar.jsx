import Link from "../link/link";

const NavBar = () => {

    const routes = [
        { path: '/', name: 'Home', id: 1 },
        { path: '/about', name: 'About', id: 2 },
        { path: '/contact', name: 'Contact', id: 3 },
        { path: '/products', name: 'Products', id: 4 },
        { path: '/services', name: 'Services', id: 5 },
    ];

    return (
        <nav>
          
           
            <ul className="md:flex">
                {
                    routes.map(route  => <Link key={route.id} route ={route}> </Link> )
                }
            </ul>
        </nav>
    );
};

export default NavBar;