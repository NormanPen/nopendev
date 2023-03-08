import {useTranslation} from 'react-i18next';
import {useState, useRef} from 'react';
import {Link} from 'react-scroll';

import pfeil from '../../images/Pfeil.svg';
import DSGVO from '../DSGVO';

function Footer() {
    const {t} = useTranslation();
    const [DSGVOisOpen, DSGVOsetIsOpen] = useState(false);
    const DSGVOtoggle = () => DSGVOsetIsOpen(!DSGVOisOpen);
    const [ImprintIsOpen, ImprintSetIsOpen] = useState(false);
    const ImprintToggle = () => ImprintSetIsOpen(!ImprintIsOpen);

    const myRef = useRef(null);

    const executeScroll = () => myRef.current.scrollIntoView();

    return (
        <div className='grid  pt-8 bg-nope-grey-middle dark:bg-nope-grey  '>
            <div className='flex pl-6 pb-8'>
                <button
                    className='flex text-white dark:text-black'
                    onClick={() => {
                        executeScroll();
                        ImprintToggle();
                    }}
                >
                    {t('imprint')}
                    <img src={pfeil} alt='Pfeil' className='pt-1 pl-2 ' />
                </button>

                <Link
                    to='test'
                    className='flex pr-8 pl-6 text-white dark:text-black'
                    onClick={DSGVOtoggle}
                >
                    {t('privacy')}
                    <img src={pfeil} alt='Pfeil' className='pt-1 pl-2' />
                </Link>
            </div>

            <article
                className={ImprintIsOpen ? 'block' : 'hidden'}
                onClick={ImprintToggle}
            >
                <address className='text-white dark:text-black pt-9 pl-6'>
                    <a
                        className=''
                        href='https://www.google.com/maps/place/Horner+Weg+205,+22111+Hamburg/@53.555247,10.0745182,17z/data=!3m1!4b1!4m5!3m4!1s0x47b18c19de42fb6f:0x967465a135005944!8m2!3d53.555247!4d10.0767069'
                        target='blank'
                    >
                        Norman Pendzich
                        <br />
                        Horner Weg 205b
                        <br />
                        22111 Hamburg
                    </a>

                    <h3 className='mt-4'>Email:</h3>

                    <a href='mailto:normanpendzich@gmail.com'>
                        normanpendzich@gmail.com
                    </a>
                    <h3 className='mt-4'>Phone:</h3>
                    <a className='text-web-grau' href='tel:+4915161449132'>
                        +49 15161449132
                    </a>
                    <div ref={myRef}></div>
                </address>
            </article>

            <article
                className={DSGVOisOpen ? 'inline-block' : 'hidden'}
                onClick={DSGVOtoggle}
            >
                <section className='text-white dark:text-black pl-6 pr-6 pb-6'>
                    <DSGVO />
                </section>
            </article>

            <div></div>
        </div>
    );
}

export default Footer;
