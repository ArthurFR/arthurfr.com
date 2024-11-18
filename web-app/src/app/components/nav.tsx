"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

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
    const pathname = usePathname()
    // useEffect(() => {
    //     document.documentElement.classList.toggle(
    //         'dark',
    //         localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    //     )
    // }, [])

    return (
        <div className="w-full flex justify-between py-4 px-16 bg-neutral-200 dark:bg-slate-800 absolute top-0 border-b-[1px] border-gray-300 dark:border-sky-400">
            <nav className='mr-8 flex items-center'>
                <ul className='flex gap-8'>
                    {NAV_LINKS.map(({text, route}) => (
                            <li key={text}>
                                <Link href={route} className={clsx('font-semibold hover:text-sky-600 text-xl', { 'text-sky-400 dark:text-sky-400': pathname === route, 'text-gray-900 dark:text-slate-50': pathname !== route })}>
                                    {text}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
            {/* <Switch checked={false} onChange={(isDarkMode) => {
                if (isDarkMode) {
                    localStorage.theme = 'dark'
                } else {
                    localStorage.theme = 'light'
                }
                document.documentElement.classList.toggle(
                    'dark',
                    localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
                )
            }}/> */}
        </div>
    );
}
