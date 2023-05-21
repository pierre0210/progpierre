import Link from "next/link";
import Languages from "./Languages";

type param = {
	title: string;
	url: string;
	languages: string[];
};

const ProjectContainer = ({ title, url, languages }: param) => {
	return (
		<div className="block w-full mb-5 min-[576px]:px-3 md:w-1/2 lg:w-1/3 md:inline-flex md:mx-auto">
			<div className="block p-1 w-2/3">
				<h1 className="font-NotoSans font-bold text-3xl">{title}</h1>
				<Link href={url}>
					<a className="text-lg font-Roboto-Mono hover:underline hover:font-bold">Github</a>
				</Link>
			</div>
			<div className="lg:m-0 w-1/3 md:flex md:px-3">
				<Languages languages={languages} size={30} />
			</div>
		</div>
	);
};

export default ProjectContainer;