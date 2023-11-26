import { IconStyle } from '@fortawesome/fontawesome-svg-core';

export interface Admin {
  experiences: {
    title: string;
    company: string;
    location: string;
    startDate: Date;
    endDate: Date;
    description: string;
  };
  formations: {
    school: string;
    startDate: Date;
    endDate: Date;
    description: string;
  };
  skills: {
    label: string;
    title: string;
    logo: string;
  };
  hobbies: {
    title: string;
    logo: string;
    description: string;
    dates: Date;
  };
  socialnetworks: {
    link: string;
    logo: string;
  };
  profil: {
    firstname: string;
    lastname: string;
    email: string;
    title: string;
    objective: string;
  };
  recommendation: {
    author: string;
    position: string;
    text: string;
  };
  message: {
    name: string;
    message: string;
    email: string;
  };
}
