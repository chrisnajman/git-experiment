import PropTypes from "prop-types"
// import { HiTemplate } from "react-icons/hi"
import { TfiGithub } from "react-icons/tfi"

function Header({ title }) {
  return (
    <header className="page-header">
      <h1>
        <TfiGithub /> <span>{title}</span>
      </h1>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
