// 어케쓰는거지
import '../App.css';
const Top = (props) => {
    if(props.state === 'visible') {
      return <div className="top"></div>
    } else if (props.state === 'invisible') {
      return <div className="top_invisible"></div>
    }
  }

  export default Top;