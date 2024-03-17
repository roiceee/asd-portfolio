import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, X } from "lucide-react";
import { useState } from "react";

interface Props {
    project: Project;
    index: number;
}

export default function ProjectForm({ project, index }: Props) {
    const [projectTitle, setProjectTitle] = useState(project.title);
    const [projectImage, setProjectImage] = useState(project);
    const [projectDescription, setProjectDescription] = useState(
        project.description
    );
    const [projectDemoLink, setProjectDemoLink] = useState(project.demo_link);
    const [projectGithubLink, setProjectGithubLink] = useState(
        project.github_link
    );

    return (
        <div>
            <div>
                <Label className="text-md">{"Project " + index}</Label>
                <div className="mt-2">
                    <Label className="text-sm">Name</Label>
                    <Input
                        type={"text"}
                        id={"title-" + project.id}
                        placeholder={"Enter Project Name"}
                        value={projectTitle}
                        onChange={(e) => setProjectTitle(e.currentTarget.value)}
                    />
                </div>
            </div>
            <div className="mt-2">
                <Label className="text-sm">Image</Label>
                <Input
                    type={"file"}
                    id={"image-" + project.id}
                    defaultValue={""}
                    // onChange={(e) => setProjectImage(e.currentTarget.value)}
                />
            </div>
            <div className="mt-2">
                <Label className="text-sm">Description</Label>
                <Textarea
                    id={"description-" + project.id}
                    placeholder={"Enter Project Description"}
                    value={projectDescription}
                    onChange={(e) =>
                        setProjectDescription(e.currentTarget.value)
                    }
                />
            </div>
            <div className="mt-2">
                <Label className="text-sm">Demo Link</Label>
                <Input
                    type={"text"}
                    id={"demo-" + project.id}
                    value={projectDemoLink}
                    placeholder="Enter Project Demo Link"
                    onChange={(e) => setProjectDemoLink(e.currentTarget.value)}
                />
            </div>
            <div className="mt-2">
                <Label className="text-sm">Github Link</Label>
                <Input
                    type={"text"}
                    id={"github-" + project.id}
                    value={projectGithubLink}
                    placeholder="Enter Project Github Link"
                    onChange={(e) =>
                        setProjectGithubLink(e.currentTarget.value)
                    }
                />
            </div>
        </div>
    );
}
