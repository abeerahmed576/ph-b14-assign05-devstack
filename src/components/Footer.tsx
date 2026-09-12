function LinkSection({ title, links }: { title: string; links: string[] }) {
  return (
    <ul className="space-y-1">
      <h4 className="mb-4 capitalize font-bold">{title}</h4>
      {links.map((link, index) => (
        <li key={index} className="capitalize text-(--color-para-500)">
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  );
}

function Footer() {
  return (
    <footer className="container mx-auto">
      <div className="pb-6 sm:pb-12 flex justify-between border-b border-b-(--color-divide)">
        <div className="space-y-6 sm:text-start flex flex-col items-center sm:items-start flex-1">
          <img src="/logo-text.png" alt="devstack logo" />
          <p className="text-(--color-para-500) text-center sm:text-start w-[95%] sm:w-3/4">
            Curated tools, technologies and resources for developers building
            modern software
          </p>
          <ul className="text-sm sm:text-base flex items-center gap-4 sm:gap-6">
            <li>
              <a href="#">Github</a>
            </li>
            <span className="sm:hidden pt-1 text-[4px]">&#11044;</span>
            <li>
              <a href="#">Twitter</a>
            </li>
            <span className="sm:hidden pt-1 text-[4px]">&#11044;</span>
            <li>
              <a href="#">LinkedIn</a>
            </li>
          </ul>
        </div>

        <div className="mr-0 md:mr-20 lg:mr-50 hidden sm:flex flex-1 justify-between">
          <LinkSection
            title="products"
            links={["home", "technologies", "projects"]}
          />

          <LinkSection
            title="company"
            links={["about", "contact", "careers"]}
          />
          <LinkSection
            title="legal"
            links={["privacy policy", "terms of service"]}
          />
        </div>
      </div>
      <div className="mt-4 sm:mt-10 mb-10 sm:mb-16 mx-6 sm:mx-0 text-(--color-para-400) text-[11px] sm:text-base flex justify-between">
        <span>&copy; 2026 Dev Stack. All Rights Reserved.</span>
        <div>
          <ul className="space-x-4 sm:space-x-10 flex">
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
