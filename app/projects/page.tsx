import Navigation from '@/components/Navigation';
import ProjectManager from '@/components/ProjectManager';
import SocialIcons from '@/components/SocialIcons';

export default function ProjectsPage() {
  return (
    <div className="h-screen max-w-screen-md mx-auto w-full flex flex-col justify-between items-center">
      <Navigation />
      <section className="max-w-96 md:max-w-screen-sm mx-auto p-6">
        <ProjectManager />
      </section>
      <SocialIcons />
    </div>
  );
}
