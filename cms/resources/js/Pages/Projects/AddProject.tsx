import NavLink from "@/Components/NavLink";
import AddProjectForm from "@/Components/shad/AddProjectForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { PageProps } from "@/types";
import { Head, useForm, router } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function AddProject({ auth }: PageProps) {
    const {
        data: newProject,
        setData: setNewProject,
        post,
        progress,
        processing,
    } = useForm<{
        title: string;
        description: string;
        demo_link: string;
        github_link: string;
        image: File | null;
    }>({
        title: "",
        description: "",
        demo_link: "",
        github_link: "",
        image: null,
    });

    const setNewProjectData = (e: any) => {
        setNewProject({ ...newProject, [e.target.id]: e.target.value });
    };

    const setImage = (e: any) => {
        const uploadedFile = e.target.files?.[0];

        if (uploadedFile) {
            setNewProject((data) => {
                return {
                    ...data,
                    image: uploadedFile,
                };
            });
        }
    };

    const saveData = (e: FormEvent) => {
        e.preventDefault();
        router.post("/projects/add", {
            _method: "put",
            data: newProject,
        });
    };

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
            <Head title="Add Project" />
            <form onSubmit={saveData}>
                <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                        {/* add new project */}

                        <h2 className="text-lg mb-4">Add new Project</h2>

                        <AddProjectForm
                            title={newProject.title}
                            description={newProject.description}
                            demo_link={newProject.demo_link}
                            github_link={newProject.github_link}
                            setNewProjectData={setNewProjectData}
                            setImage={setImage}
                            imageRequired
                        />
                    </section>
                    <section className="w-full md:max-w-80 md:ml-auto flex flex-col gap-2 px-2 mt-4">
                        <Button
                            variant={"outline"}
                            className=" border-2"
                            onClick={() => {
                                location.reload();
                            }}
                        >
                            Refresh
                        </Button>
                        <Button type="submit" disabled={processing}>
                            {processing ? "Saving..." : "Save"}
                        </Button>
                    </section>
                </section>
            </form>
        </AuthenticatedLayout>
    );
}
