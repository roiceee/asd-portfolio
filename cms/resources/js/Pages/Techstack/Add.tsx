import NavLink from "@/Components/NavLink";
import AddProjectForm from "@/Components/shad/AddProjectForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageProps } from "@/types";
import { Head, useForm, router } from "@inertiajs/react";
import { Label } from "@radix-ui/react-label";
import { FormEvent, useState } from "react";

export default function Add({ auth }: PageProps) {
    const { data, setData, post, progress, processing } = useForm<{
        name: string;
        image: File | null;
    }>({
        name: "",
        image: null,
    });

    const setNewData = (e: any) => {
        setData({ ...data, [e.target.id]: e.target.value });
    };

    const setImage = (e: any) => {
        const uploadedFile = e.target.files?.[0];

        if (uploadedFile) {
            setData((data) => {
                return {
                    ...data,
                    image: uploadedFile,
                };
            });
        }
    };

    const saveData = (e: FormEvent) => {
        e.preventDefault();
        router.post("/techstack/add", {
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
                        href={route("techstack")}
                        active={route().current("techstack")}
                    >
                        Techstack
                    </NavLink>
                    <NavLink
                        href={route("techstack/add")}
                        active={route().current("techstack/add")}
                    >
                        Add Tech
                    </NavLink>
                </div>
            }
        >
            <Head title="Add Tech" />
            <form onSubmit={saveData}>
                <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                        <h2 className="text-lg mb-4">Add new Tech</h2>
                        <div className="mt-2">
                            <Label className="text-sm">Name</Label>
                            <Input
                                id="name"
                                type={"text"}
                                placeholder={"Enter Tech Name"}
                                value={data.name}
                                onChange={(e) => setNewData(e)}
                                required
                            />
                        </div>
                        <div className="mt-2">
                            <Label className="text-sm">Image</Label>
                            <Input
                                id="image"
                                type={"file"}
                                accept="image/*"
                                defaultValue={""}
                                onChange={(e) => setImage(e)}
                                required
                            />
                        </div>

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
