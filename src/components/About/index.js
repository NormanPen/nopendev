import { Trans } from "react-i18next";

import norman from "../../images/norman.png";

function About() {
	return (
		<section
			className="About bg-nope-mellow dark:bg-nope-grey-middle dark:text-white rounded-lg drop-shadow-2xl shadow-2xl px-6 pt-11
      bg-no-repeat bg-right-bottom bg-about-me bg-[length:117.75px_105.09px] md:bg-[length:260.88px_226.02px] lg:bg-[length:374.91px_324.81px]"
		>
			<h1 className="text-2xl tracking-wiidest uppercase font-Noto  md:text-4xl">
				<Trans i18nKey="about.text1">Über mich</Trans>
			</h1>

			<div className="mt-16 grid grid-cols-5">
				<img
					src={norman}
					alt="Foto von Norman Pendzich"
					className="col-span-2 "
				/>

				<p className="col-span-3 font-medium tracking-somemwide ml-3 md:ml-0">
					<Trans i18nKey="about.text2">
						Moin, ich bin ein Webentwickler aus Hamburg, der Perle Deutschlands.
					</Trans>
				</p>

				<p className="col-span-5 mt-16 md:w-96">
					<Trans i18nKey="about.text3">
						Seit ich das erste Mal das fiepende Geräusch eines 56k Modems gehört
						habe, war ich fasziniert vom Internet. Meine erste Seite habe ich
						mit 14 erstellt und Informatik war neben Kunst mein absolutes
						Lieblingsfach. Am Programmieren fasziniert mich, dass man als
						Entwickler immer etwas neues dazu lernt und im Team komplexe
						Probleme löst.
					</Trans>
				</p>

				<p className="col-span-3 mt-8 mb-16">
					<Trans i18nKey="about.text4">
						In meiner Freizeit ziehe ich mir am liebsten meine Nikes an und gehe
						laufen. Außerdem gehe ich gerne auf Konzerte und Festivals.
					</Trans>
				</p>
			</div>
		</section>
	);
}

export default About;
