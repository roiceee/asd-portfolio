import NavLink from "@/Components/NavLink";
import AddProjectForm from "@/Components/shad/AddProjectForm";
import CommunityExpForm from "@/Components/shad/CommunityExpForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { PageProps } from "@/types";
import { Head, useForm, router } from "@inertiajs/react";
import { FormEvent, useState } from "react";

export default function AddCommunityExperience({ auth }: PageProps) {
    const {
        data: newExperience,
        setData: setNewExperience,
        post,
        progress,
        processing,
    } = useForm<{
        title: string;
        description: string;

        image: File | null;
    }>({
        title: "",
        description: "",

        image: null,
    });

    const setNewExpData = (e: any) => {
        setNewExperience({ ...newExperience, [e.target.id]: e.target.value });
    };

    const setImage = (e: any) => {
        const uploadedFile = e.target.files?.[0];

        if (uploadedFile) {
            setNewExperience((data) => {
                return {
                    ...data,
                    image: uploadedFile,
                };
            });
        }
    };

    const saveData = (e: FormEvent) => {
        e.preventDefault();
        router.post("/community/add", {
            _method: "put",
            data: newExperience,
        });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex gap-4">
                    <NavLink
                        href={route("community")}
                        active={route().current("community")}
                    >
                        Community Leadership Exp.
                    </NavLink>
                    <NavLink
                        href={route("community/add")}
                        active={route().current("community/add")}
                    >
                        Add Exp.
                    </NavLink>
                </div>
            }
        >
            <Head title="Add Community Leadership Exp." />
            <form onSubmit={saveData}>
                <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                        <h2 className="text-lg mb-4">Add new Exp.</h2>

                        <CommunityExpForm
                            title={newExperience.title}
                            description={newExperience.description}

                            setNewExpData={setNewExpData}
                            setImage={setImage}
                            imageSrc={""}
                            imagePath={""}
                            imageRequired={true}
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
