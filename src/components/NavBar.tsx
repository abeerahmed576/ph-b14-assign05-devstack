import { useState, type Dispatch } from "react";

interface ILiProps {
  label: string;
  currentPage: string;
  setCurrentPage: Dispatch<React.SetStateAction<string>>;
}
function Li({ label, currentPage, setCurrentPage }: ILiProps) {
  const handlePageClick = () => {
    setCurrentPage(label);
  };

  return (
    <li
      onClick={handlePageClick}
      className={`cursor-pointer capitalize ${currentPage === label ? "text-(--color-primary)" : ""}`}
    >
      <a href="#">{label}</a>
    </li>
  );
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
  const [currentPage, setCurrentPage] = useState<string>("home");

  return (
    <div className="bg-white border- border-b-(--color-divide) sticky top-0 z-50">
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
          <Li
            label="home"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Li
            label="technologies"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Li
            label="projects"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Li
            label="about"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <Li
            label="contact"
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </ul>

        <div className="space-x-1">
          <Button label="sign in" extraClasses="btn-ghost" />
          <Button
            label="sign up"
            extraClasses="shadow-none text-white bg-(--color-primary)"
          />
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
