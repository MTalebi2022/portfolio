import SectionTitle from '@/components/section-title';
import SkillsCard from '@/components/skills-card';
import { nanoid } from 'nanoid';

const skills = [
  {
    id: nanoid(),
    title: 'Frontend Development',
    technologies: [
      'React',
      'Next.js',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'JavaScript',
    ],
  },
  {
    id: nanoid(),
    title: 'Backend & Programming Languages',
    technologies: ['Python', 'C++', 'Java', 'Node.js', 'FastAPI'],
  },
  {
    id: nanoid(),
    title: 'DevOps & Cloud Technologies',
    technologies: ['AWS', 'Docker', 'Kubernetes'],
  },
];

const About = () => {
  return (
    <>
      <section className="align-element py-24">
        <article className="text-center">
          <h1 className="text-xl font-bold tracking-wider md:text-3xl">
            Hey, I&apos;m Jawad — glad you&apos;re here.
          </h1>
          <p className="mt-4 text-2xl leading-relaxed">
            Since beginning my journey in software development, I&apos;ve been
            passionately building projects that blend creativity and technology.
            I&apos;ve contributed to collaborative teams and continuously
            explored new ways to solve problems with code. I&apos;m quietly
            confident, deeply curious, and always committed to sharpening my
            skills and delivering meaningful digital experiences.
          </p>
        </article>
      </section>
      <section className="py-20 align-element">
        <SectionTitle text="tech stack" />
        <div className="py-16 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <SkillsCard key={skill.id} skill={skill} />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
