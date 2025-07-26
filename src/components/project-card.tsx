import { FaGithubSquare } from 'react-icons/fa';
import { TbWorldWww } from 'react-icons/tb';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';

interface ProjectCardProps {
  url: string;
  img: string;
  github: string;
  title: string;
  text: string;
}

const ProjectCard = ({ url, img, github, title, text }: ProjectCardProps) => {
  return (
    <Card className="shadow-md hover:shadow-2xl">
      <CardHeader>
        <CardTitle>
          <Image
            src={img}
            alt=""
            width={800}
            height={800}
            className="w-full object-cover"
            priority
          />
        </CardTitle>
        <CardDescription className="capitalize pt-4 font-bold text-2xl tracking-wide">
          {title}
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4 leading-loose text-slate-700">
        <p>{text}</p>
      </CardContent>
      <CardFooter className="mt-4 flex gap-x-4">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-slate-800 duration-300" />
        </a>
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-800 duration-300" />
        </a>
      </CardFooter>
    </Card>
  );
};
export default ProjectCard;
