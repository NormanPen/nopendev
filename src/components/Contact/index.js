import {Trans} from 'react-i18next';

function Contact() {
    return (
        <section className='Contact bg-nope-mellow dark:bg-nope-grey-middle dark:text-white mt-6 rounded-lg drop-shadow-2xl shadow-2xl pb-8'>
            <div className='grid grid-cols-5 bg-no-repeat bg-bottom bg-contact bg-[length:117.75px_105.09px] md:bg-[length:260.88px_226.02px] lg:bg-[length:374.91px_324.81px]'>
                <h1 className='col-span-5 text-2xl tracking-wiidest uppercase font-Noto md:text-4xl pl-6 mt-11'>
                    <Trans i18nKey='contact.heading'>Kontakt</Trans>
                </h1>
                <p className='col-span-5 pl-6 mt-16'>
                    <Trans i18nKey='contact.text1'>
                        Neugierig geworden, dann kontaktieren Sie mich doch
                        einfach.
                    </Trans>
                </p>
                <a
                    className='col-span-5 pl-6 mt-8'
                    href='mailto:normanpendzich@gmail.com'
                >
                    normanpendzich@gmail.com
                </a>
                <div className='col-span-5 px-6'>
                    <form
                        action='https://formsubmit.co/normanpendzich@gmail.com'
                        method='POST'
                        class='pt-11 col-span-5'
                    >
                        <div>
                            <label for='email' class='block text-lg pb-2 mt-8'>
                                Email-Adresse
                            </label>
                            <input
                                type='email'
                                name='email'
                                required
                                className='appearance-none  px-5 h-12 focus:border-base-orange w-full bg-nope-mellow-dark dark:bg-nope-grey dark:text-black rounded-lg drop-shadow-xl shadow-xl'
                            />
                        </div>
                        <div>
                            <label for='name' class='block text-lg pb-2 mt-8'>
                                Name
                            </label>
                            <input
                                type='text'
                                name='name'
                                className='appearance-none  px-5 h-12 focus:border-base-orange w-full bg-nope-mellow-dark dark:bg-nope-grey dark:text-black rounded-lg drop-shadow-xl shadow-xl'
                                required
                            />
                        </div>
                        <div>
                            <label for='text' class='block text-lg pb-2 mt-8'>
                                Text
                            </label>
                            <textarea
                                type='text'
                                name='text'
                                cols='30'
                                rows='10'
                                className='appearance-none  px-5  focus:border-base-orange w-full bg-nope-mellow-dark dark:bg-nope-grey dark:text-black justify-self-end rounded-lg drop-shadow-xl shadow-xl'
                                required
                            />
                        </div>
                        <input
                            type='hidden'
                            name='_next'
                            value='https://normanpendzich.dev'
                        />
                        <div class='flex justify-end pb-12 md:pb-48'>
                            <button
                                type='submit'
                                className='bg-nope-lachs px-6 py-3 mt-6 mb-20 inline-block w-20 rounded-lg  drop-shadow-xl shadow-xl '
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
