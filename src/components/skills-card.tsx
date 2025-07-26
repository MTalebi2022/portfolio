import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Skill {
  id: string;
  title: string;
  technologies: string[];
}

interface SkillsCardProps {
  skill: Skill;
}

const SkillsCard = ({ skill }: SkillsCardProps) => {
  const { title, technologies } = skill;
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      {technologies.map((tech) => (
        <CardContent key={tech}>{tech}</CardContent>
      ))}
    </Card>
  );
};
export default SkillsCard;
