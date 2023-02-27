import ScrollToBtn from "../ScrollToBtn";
import "./Header.css";
import thinking from "../../images/thinking.png";
import { useTranslation } from "react-i18next";

function Header() {
	const { i18n } = useTranslation();
	const changeLanguage = (language) => {
		i18n.changeLanguage(language);
		window.location.reload();
	};
	return (
		<header
			className="bg-nope-flieder-dark text-white dark:bg-nope-grey-dark bg-circle dark:bg-circle-dark bg-right-top bg-no-repeat
        bg-[length:117.75px_105.09px] md:bg-[length:260.88px_226.02px] lg:bg-[length:374.91px_324.81px]"
		>
			<div className="flex justify-between cursor-pointer">
				<div className="ml-5 pt-2">
					<button onClick={() => changeLanguage("de")}>DE</button>
					<span> / </span>
					<button onClick={() => changeLanguage("en")}>EN</button>
				</div>
				<div className="hidden md:block pt-2 cursor-pointer">
					<ScrollToBtn to="About">About</ScrollToBtn>
					<ScrollToBtn to="Skills">Skills</ScrollToBtn>
					<ScrollToBtn to="Contact">Kontakt</ScrollToBtn>
				</div>
			</div>

			<div className="font-Lato pl-5 pt-11 pb-14 uppercase md:pb-52 md:pl-8 md:pt-20 ">
				<h1 className="text-lg tracking-wiidest md:text-heroText1 md:pb-5">
					Norman Pendzich
				</h1>
				<h2 className="text-xs tracking-wiiidest md:text-heroText2">
					Web Developer
				</h2>
			</div>

			<div>
				<img
					src={thinking}
					alt="thinking"
					className="h-24 md:h-36 float-right pr-6"
				/>
			</div>

			<div className="waves">
				<div className="wave wave1" />
				<div className="wave wave2" />
				<div className="wave wave3" />
				<div className="wave wave4" />
			</div>
		</header>
	);
}

export default Header;
