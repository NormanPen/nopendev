import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./navigation.css";

import menuBg from "../../images/Menu.svg";
import menuBgDark from "../../images/MenuDark.svg";

function Navigation({ isOpen, toggle }) {
	const { t } = useTranslation();

	return (
		<div className="md:hidden">
			<img
				src={menuBg}
				alt="Menu Button"
				className={`dark:hidden menu ${isOpen ? "active" : "menu"}`}
			/>
			<img
				src={menuBgDark}
				alt="Menu Button"
				className={`hidden dark:block menu ${isOpen ? "active" : "menu"}`}
			/>

			<div className={isOpen ? "menu-bg " : "hidden"} />
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div onClick={toggle} className="menu-btn">
				<div className={`burger-item ${isOpen ? "active" : ""}`}>
					<div className="burger-line" />
					<div className="burger-line" />
					<div className="burger-line" />
				</div>
			</div>
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<nav className={isOpen ? "" : "hidden"} onClick={toggle}>
				<ul className="menu-list">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/impressum">{t("imprint")}</Link>
					</li>
					<li>
						<Link to="/dsgvo">DSGVO</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navigation;