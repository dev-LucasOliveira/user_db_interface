import MenuIcon from '@mui/icons-material/Menu';
import './styles.css';

function Header() {

  const renderMenuSection = () => {
    return (
      <div className=''>
        <MenuIcon fontSize='large' style={{ color: '#2D3047' }}/>
      </div>
    )
  }

  const renderLogoSection = () => {
    return (
      <div className=''>
        <span className='logoTitle'>CORPORATE</span>
      </div>
    )
  }

  return (
    <div className='headerBox'>
      {renderLogoSection()}
      {renderMenuSection()}
    </div>
  )
}

export default Header;