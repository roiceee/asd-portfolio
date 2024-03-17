// a project has an image, description, link to demo, link to github url

interface Project {
    id: number;
    user_id: number;
    title: string;
    description: string;
    demo_link: string;
    github_link: string;
    image_path: string;
    image_name: string;
}
