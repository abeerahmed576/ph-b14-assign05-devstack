function Li({ label }: { label: string }) {
  return <li className="hover:text-(--color-primary) capitalize">{label}</li>;
}

function NavBar() {
  return (
    <div className="border-b border-b-(--color-divide)">
      <nav
        className="
        h-18
        container
        mx-auto flex justify-between items-center"
      >
        <img src="/logo-text.png" alt="devstack logo" />
        <ul className="flex justify-between items-center space-x-8">
          <Li label="home" />
          <Li label="technologies" />
          <Li label="projects" />
          <Li label="about" />
          <Li label="contact" />
        </ul>

        <div>
          <button className="capitalize btn btn-ghost rounded-full">
            sign in
          </button>
          <button className="capitalize text-white bg-(--color-primary) btn rounded-full">
            sign up
          </button>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
