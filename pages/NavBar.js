import Link from 'next/link';

function NavBar() {
    return (
        <nav>
            <ul>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;