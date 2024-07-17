import {FaAws, FaGithub, FaJava, FaJs, FaPython, FaReact} from "react-icons/fa";
import {SiCloudflare, SiDigitalocean, SiMongodb, SiMysql, SiNextdotjs, SiSpring} from "react-icons/si";

export const skillCategories = [
    {
        name: 'Languages',
        skills: [
            { name: 'Java', color: '#007396', icon: FaJava, url: 'https://www.java.com/en/' },
            { name: 'Python', color: '#3776AB', icon: FaPython, url: 'https://www.python.org/' },
            { name: 'JavaScript', color: '#F7DF1E', icon: FaJs, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
        ],
    },
    {
        name: 'Frameworks',
        skills: [
            { name: 'Next.js', color: '#000000', icon: SiNextdotjs, url: 'https://nextjs.org/' },
            { name: 'React.js', color: '#61DAFB', icon: FaReact, url: 'https://reactjs.org/' },
            { name: 'Spring', color: '#6DB33F', icon: SiSpring, url: 'https://spring.io/' },
        ],
    },
    {
        name: 'Databases & VCS',
        skills: [
            { name: 'MongoDB', color: '#47A248', icon: SiMongodb, url: 'https://www.mongodb.com/' },
            { name: 'MySQL', color: '#4479A1', icon: SiMysql, url: 'https://www.mysql.com/' },
            { name: 'GitHub', color: '#181717', icon: FaGithub, url: 'https://github.com/' },
        ],
    },
    {
        name: 'Cloud & DevOps',
        skills: [
            { name: 'AWS', color: '#232F3E', icon: FaAws, url: 'https://aws.amazon.com/' },
            { name: 'DigitalOcean', color: '#0080FF', icon: SiDigitalocean, url: 'https://www.digitalocean.com/' },
            { name: 'Cloudflare', color: '#F38020', icon: SiCloudflare, url: 'https://www.cloudflare.com/' },
        ],
    },
];