import {Visibility} from '@mui/icons-material';
import './WidgetSm.css'

const WidgetSm = () => {
  return (
    <div className='widget-sm'>
      <span className="title">Recently added users</span>
      <ul className="list">
        <li className="list-item">
          <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="user" className="image" />
          <div className="user">
            <span className="username">Joesoft</span>
            <span className="role">Owner</span>
          </div>
          <button className="btn">
            <Visibility className='w-icon' /> Display
          </button>
        </li>
        <li className="list-item">
          <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="user" className="image" />
          <div className="user">
            <span className="username">Lisa</span>
            <span className="role">Sales</span>
          </div>
          <button className="btn">
            <Visibility className='w-icon'/> Display
          </button>
        </li>
        <li className="list-item">
          <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="user" className="image" />
          <div className="user">
            <span className="username">Harrison</span>
            <span className="role">Sales</span>
          </div>
          <button className="btn">
            <Visibility className='w-icon'/> Display
          </button>
        </li>
        <li className="list-item">
          <img src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" alt="user" className="image" />
          <div className="user">
            <span className="username">MJ Mwai</span>
            <span className="role">Sales</span>
          </div>
          <button className="btn">
            <Visibility className='w-icon'/> Display
          </button>
        </li>
      </ul>
    </div>
  )
}

export default WidgetSm