import {Trans} from 'react-i18next';

import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';
import whatsapp from '../../images/whatsapp.png';

function Social() {
    return (
        <section className='bg-nope-grey-middle dark:bg-nope-grey mt-6 rounded-t-lg'>
            <h1
                className='text-2xl text-white dark:text-black tracking-wiidest uppercase font-Noto  md:text-4xl
                      col-span-5 pl-6 pt-11'
            >
                <Trans i18nKey='footer.heading'>Social</Trans>
            </h1>

            <div className='flex mt-8 pb-6 justify-around '>
                <a href='https://github.com/NormanPen'>
                    <img
                        src={github}
                        alt='GitHub Logo'
                        className='h-10 w-10 dark:invert'
                    />
                </a>
                <a href='https://api.whatsapp.com/send?phone=+4915161449132'>
                    <img
                        src={whatsapp}
                        alt='GitHub Logo'
                        className='h-10 w-10 dark:invert'
                    />
                </a>
                <a href='https://de.linkedin.com/in/norman-pendzich-4425a9240?original_referer=https%3A%2F%2Fwww.google.com%2F'>
                    <img
                        src={linkedin}
                        alt='GitHub Logo'
                        className='h-10 w-10 dark:invert'
                    />
                </a>
            </div>
        </section>
    );
}

export default Social;
