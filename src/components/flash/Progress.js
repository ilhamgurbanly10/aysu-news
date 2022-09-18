import '../../assets/css/flash/progress.css';
import {favIcon} from '../Images';

function FlashProgress() {

    return ( 
        <div className="fl-progress">
            <img src={favIcon} className="progress-img rotate-animation" />
            <div className="fl-progress-copyright">© CODING BY ILHAM GURBANLY</div>		         
        </div>
    )

}

export function endProgress() { document.querySelector('.fl-progress').classList.add('fl-progress-is-ended'); }

export default FlashProgress;