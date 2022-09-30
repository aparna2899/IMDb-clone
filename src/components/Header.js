const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Add Movie', href: '/add-movie' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-indigo-600">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="flex w-full items-center justify-end border-b border-indigo-500 py-6 lg:border-none">
            <div className="flex items-center">
              <div className="ml-10 hidden space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-start space-x-6 py-4 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }
  