import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand href="#">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            React App
          </span>
        </Navbar.Brand>

        <Navbar.Collapse className="">
          <Link to="/home">Home</Link>
          <Link to="/welcome-quiz">Quiz</Link>
        </Navbar.Collapse>
        <div className="flex ml-5"></div>
      </Navbar>
    </div>
  );
}
