// index.ts 

export interface Project {
    title: string,
    description: string,
    technologies: string[],
    githubLink: string,
    demoLink: string,
    image: string,
}

export interface Blog {
    title: string,
    excerpt: string,
    date:  string,
    readTime: string,
    slug: string,
}

//Section Title and subtitle

export interface TitleProps {
  heading: string
}

export interface SectionTitleProps {
  heading: string
  subHeading: string
}

//  Hero CountUp 
export interface StatItem {
  num: number;
  text: string;
}


// Service 
export interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}
// export interface ServicesCardProps {
//   icon: React.ElementType;
//   title: string;
//   description: string;
// };

