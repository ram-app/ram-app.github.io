export type PortfolioProject = {
  id: number;
  title: string;
  description: string;
  /** Optional period label shown on project cards */
  period?: string;
  /** Achievement bullets for richer project cards */
  highlights?: string[];
  image: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};
