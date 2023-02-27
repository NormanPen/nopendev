import { Trans } from "react-i18next";
import { Link } from "react-router-dom";

import github from "../../images/github.png";
import linkedin from "../../images/linkedin.png";
import whatsapp from "../../images/whatsapp.png";

function Social() {
	return (
		<footer className="bg-nope-grey-middle dark:bg-nope-grey mt-6 rounded-t-lg">
			<h1
				className="text-2xl text-white dark:text-black tracking-wiidest uppercase font-Noto  md:text-4xl
                      col-span-5 pl-6 pt-11"
			>
				<Trans i18nKey="footer.heading">Social</Trans>
			</h1>

			<div className="flex mt-8 mb-6 justify-around ">
				<a href="https://github.com/NormanPen">
					<img
						src={github}
						alt="GitHub Logo"
						className="h-10 w-10 dark:invert"
					/>
				</a>
				<a href="https://github.com/NormanPen">
					<img
						src={whatsapp}
						alt="GitHub Logo"
						className="h-10 w-10 dark:invert"
					/>
				</a>
				<a href="https://github.com/NormanPen">
					<img
						src={linkedin}
						alt="GitHub Logo"
						className="h-10 w-10 dark:invert"
					/>
				</a>
			</div>

			<div class="flex justify-center pr-2 pb-2 ">
				<Link
					to="/dsgvo"
					className="text-black bg-nope-grey dark:bg-nope-grey-middle dark:text-white px-6 py-3 mt-6  inline-block w-30 rounded-lg  drop-shadow-xl shadow-xl"
				>
					Datenschutz
				</Link>
			</div>
		</footer>
	);
}

export default Social;
