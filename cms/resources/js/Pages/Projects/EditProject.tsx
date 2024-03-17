import NavLink from "@/Components/NavLink";
import AddProjectForm from "@/Components/shad/AddProjectForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { PageProps } from "@/types";
import { Head, useForm, router } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function EditProject({ auth, project }: PageProps) {
    const proj = project as Project;
    const { data, setData, post, progress, processing } = useForm<{
        id: number;
        user_id: number;
        title: string;
        description: string;
        demo_link: string;
        github_link: string;
        image: File | null;
        image_path: string;
    }>({
        id: proj.id,
        user_id: proj.user_id,
        title: proj.title,
        description: proj.description,
        demo_link: proj.demo_link,
        github_link: proj.github_link,
        image_path: proj.image_path,
        image: null,
    });

    const setNewProjectData = (e: any) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const setImage = (e: any) => {
        setData({ ...data, image: e.target.files[0] });
    };

    const saveData = (e: FormEvent) => {
        e.preventDefault();
        router.post("/projects/edit", {
            _method: "put",
            data: data,
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
            <Head title="Edit Project" />
            <form onSubmit={saveData}>
                <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                        {/* add new project */}
                        <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                            <h2 className="text-lg mb-4">Edit Project</h2>
                            <AddProjectForm
                                title={data.title}
                                description={data.description}
                                demo_link={data.demo_link}
                                github_link={data.github_link}
                                setNewProjectData={setNewProjectData}
                                setImage={setImage}
                                imageSrc={proj.image_path}
                            />
                        </section>
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
