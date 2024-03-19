import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { PageProps } from "@/types";
import { Head, useForm, router, Link } from "@inertiajs/react";
import { Edit, Trash2 } from "lucide-react";
import { useCallback, useState } from "react";

export default function Get({ auth, techstacks }: PageProps) {
    const techstackArray = techstacks as Techstack[];

    const deleteTech = useCallback((id: number) => {
        router.delete("/techstack/delete", {
            data: { id: id },
        });
    }, []);

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
            <Head title="Techstacks" />

            <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                    <h2 className="text-lg mb-4">Techstack</h2>

                    <section className="flex flex-wrap gap-4">
                        {techstackArray.length === 0 && (
                            <div>
                                <h3 className="text-lg font-bold">
                                    No Data found
                                </h3>

                                <a
                                    className=" text-blue-500"
                                    href={route("techstack/add")}
                                >
                                    Add a new techstack
                                </a>
                            </div>
                        )}
                        {techstackArray.length !== 0 &&
                            techstackArray.map((techstack) => (
                                <section
                                    key={techstack.id}
                                    className="w-full border shadow-sm rounded-md p-4 flex justify-between"
                                >
                                    <div className="w-full flex gap-4">
                                        <div>
                                            <img
                                                src={techstack.image_path}
                                                className="w-16 h-16"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold">
                                                {techstack.name}
                                            </h3>
                                            <div>Order: {techstack.order}</div>
                                        </div>
                                    </div>
                                    <div className="w-[60px]">
                                        {/* edit and delete button */}
                                        <section className="flex flex-col gap-2 items-end">
                                            <a
                                                href={
                                                    "techstack/edit/" +
                                                    techstack.id
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
                                                    deleteTech(techstack.id);
                                                }}
                                            >
                                                <Trash2 />
                                            </Button>
                                        </section>
                                    </div>
                                </section>
                            ))}
                    </section>
                </section>
                {/* <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm"></section> */}
            </section>
        </AuthenticatedLayout>
    );
}
