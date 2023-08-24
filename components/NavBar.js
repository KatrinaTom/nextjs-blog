import Link from 'next/link';

function NavBar() {
    return (
        <nav class="NavBar">
            <ul>
                <Link href="/">
                    Home
                </Link>
            </ul>
            <ul>
                <Link href="/about">
                    About
                </Link>
            </ul>
        </nav>
    );
}

export default NavBar;