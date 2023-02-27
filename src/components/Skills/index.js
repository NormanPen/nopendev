import { Trans } from "react-i18next";

function Skills() {
	return (
		<section className="Skills bg-nope-lachs dark:bg-nope-grey mt-6 rounded-lg drop-shadow-2xl shadow-2xl pb-8">
			<div className="grid grid-cols-5 pb-8  bg-no-repeat bg-bottom bg-skills bg-[length:280px_150px] md:bg-[length:636px_342px]">
				<h1
					className="text-2xl tracking-wiidest uppercase font-Noto  md:text-4xl
                  col-span-5 pl-6 mt-11"
				>
					<Trans i18nKey="skills.heading">Skills</Trans>
				</h1>
				<p className="font-medium tracking-somemwide col-span-5 pl-6 mt-16">
					<Trans i18nKey="skills.text1">
						"Das Fluchen ist die einzige Sprache, die jeder Programmierer
						beherrscht."
					</Trans>
				</p>
				<ul className="text-base tracking-wiiidest uppercase col-span-5 pl-6 mb-48 md:mb-80 mt-16 md:text-center">
					<li class="pb-7">HTML 5</li>
					<li class="pb-7">CSS/ SCSS</li>
					<li class="pb-7">Tailwind</li>
					<li class="pb-7">Java Script/ Typescript</li>
					<li class="pb-7">React</li>
					<li class="pb-7">Node.js</li>
					<li class="pb-7">MongoDb</li>
				</ul>
			</div>
		</section>
	);
}

export default Skills;
