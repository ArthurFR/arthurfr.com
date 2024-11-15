import Link from 'next/link'

const NAV_LINKS: Array<{text: string, route: string}> = [
    {
        text: 'Home',
        route: '/'
    },
    {
        text: 'About me',
        route: 'about'
    },
    {
        text: 'Projects',
        route: 'projects'
    },
    {
        text: 'Blog',
        route: 'blog'
    },
    
]

export default function Nav() {
    return (
        <div className="w-full flex justify-end py-8 px-16">
            <nav>
                <ul className='flex gap-8'>
                    {NAV_LINKS.map(({text, route}) => (
                            <li key={text}>
                                <Link href={route} className='text-gray-900 dark:text-slate-50 font-semibold hover:text-orange-500 text-xl'>
                                    {text}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    );
}
