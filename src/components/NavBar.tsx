function Li({ label }: { label: string }) {
  return <li className="hover:text-(--color-primary) capitalize">{label}</li>;
}

function Button({
  label,
  extraClasses,
}: {
  label: string;
  extraClasses?: string;
}) {
  return (
    <button
      className={`h-7 sm:h-10 p-2 sm:p-4 text-[12px] sm:text-[16px] capitalize btn rounded-full ${extraClasses ? extraClasses : ""} hover:bg-none`}
    >
      {label}
    </button>
  );
}

function NavBar() {
  return (
    <div className="border-b border-b-(--color-divide)">
      <nav
        className="
        h-14 sm:h-18 px-4 sm:px-0
        container mx-auto
        flex justify-between items-center"
      >
        <img className="sm:hidden" src="/hamburger.png" alt="hamburger menu" />
        <img
          className="ml-14 sm:ml-0 scale-70 sm:scale-100"
          src="/logo-text.png"
          alt="devstack logo"
        />
        <ul className="hidden justify-between items-center space-x-8 sm:flex">
          <Li label="home" />
          <Li label="technologies" />
          <Li label="projects" />
          <Li label="about" />
          <Li label="contact" />
        </ul>

        <div>
          <Button label="sign in" extraClasses="btn-ghost" />
          <Button
            label="sign up"
            extraClasses="text-white bg-(--color-primary)"
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
