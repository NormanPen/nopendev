import {Link} from 'react-scroll';

function ScrollToBtn(props) {
    return (
        <Link
            to={props.to}
            smooth={true}
            duration={500}
            className=' text-white font-bold py-2 px-4 rounded-full'
        >
            {props.children}
        </Link>
    );
}

export default ScrollToBtn;
