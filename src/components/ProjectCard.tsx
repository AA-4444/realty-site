import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
}

const ProjectCard = ({ id, title, location, image, category }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="group block">
      <div className="img-zoom aspect-[4/5] bg-muted relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
      <div className="mt-5">
        <p className="text-caption uppercase text-muted-foreground mb-2">
          {category}
        </p>
        <h3 className="text-display-sm font-display group-hover:opacity-60 transition-opacity duration-300">
          {title}
        </h3>
        <p className="text-body-sm text-muted-foreground mt-1">{location}</p>
      </div>
    </Link>
  );
};

export default ProjectCard;
