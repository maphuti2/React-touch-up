import Button from "./Button"
import PropTypes from 'prop-types'

const Header = ({title= 'Task Tracker'}) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      < Button color='green' text='Add'/>
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
