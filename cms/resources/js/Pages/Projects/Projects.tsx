import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { PageProps } from "@/types";
import { Head, useForm, router, Link } from "@inertiajs/react";
import { Edit, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";

export default function Projects({ auth, projects }: PageProps) {
    const projectArray = projects as Project[];

    const deleteProject = useCallback((id: number) => {
        router.delete("/projects", {
            data: { id: id },
        });
    }, []);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex gap-4">
                    <NavLink
                        href={route("projects")}
                        active={route().current("projects")}
                    >
                        Projects
                    </NavLink>
                    <NavLink
                        href={route("projects/add")}
                        active={route().current("projects/add")}
                    >
                        Add Project
                    </NavLink>
                </div>
            }
        >
            <Head title="Projects" />

            <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                    <h2 className="text-lg mb-4">Projects</h2>

                    <section className="flex flex-wrap gap-4">
                        {projectArray.length === 0 && (
                            <div>
                                <h3 className="text-lg font-bold">
                                    No projects found
                                </h3>

                                <a
                                    className=" text-blue-500"
                                    href={route("projects/add")}
                                >
                                    Add a new project
                                </a>
                            </div>
                        )}
                        {projectArray.length !== 0 &&
                            projectArray.map((project) => (
                                <section className="w-full border shadow-sm rounded-md p-4">
                                    <div>
                                        <img
                                            src={project.image_path}
                                            className="w-16 h-16"
                                        />
                                    </div>
                                    <section
                                        key={project.id}
                                        className="flex justify-between"
                                    >
                                        <div className="w-full flex gap-4">
                                            <div>
                                                <h3 className="text-lg font-bold">
                                                    {project.title}
                                                </h3>
                                                <p>{project.description}</p>
                                                <section className="flex gap-4 mt-4">
                                                    <a
                                                        href={project.demo_link}
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        Demo
                                                    </a>
                                                    <a
                                                        href={
                                                            project.github_link
                                                        }
                                                        target="_blank"
                                                        className="text-blue-500"
                                                    >
                                                        Github
                                                    </a>
                                                </section>
                                            </div>
                                        </div>
                                        <div className="w-[60px]">
                                            {/* edit and delete button */}
                                            <section className="flex flex-col gap-2 items-end">
                                                <a
                                                    href={
                                                        "projects/edit/" +
                                                        project.id
                                                    }
                                                >
                                                    <Button
                                                        variant={"outline"}
                                                        size={"icon"}
                                                    >
                                                        <Edit />
                                                    </Button>
                                                </a>
                                                <Button
                                                    variant={"destructive"}
                                                    size={"icon"}
                                                    onClick={() => {
                                                        deleteProject(
                                                            project.id
                                                        );
                                                    }}
                                                >
                                                    <Trash2 />
                                                </Button>
                                            </section>
                                        </div>
                                    </section>
                                </section>
                            ))}
                    </section>
                </section>
                {/* <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm"></section> */}
            </section>
        </AuthenticatedLayout>
    );
}
