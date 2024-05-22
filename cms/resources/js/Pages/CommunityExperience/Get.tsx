import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageProps } from "@/types";
import { Head, router } from "@inertiajs/react";
import { Edit, Trash2 } from "lucide-react";

export default function Get({ auth, communityExp }: PageProps) {
    const communityExpArray = communityExp as CommunityExperience[];

    const deleteExp = (id: number) => {
        router.delete("/community/delete", {
            data: { id: id },
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
            <Head title="Community Leadership Exp." />

            <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                    {communityExpArray.length === 0 && (
                        <div>
                            <p>No data found</p>
                            <a
                                href={route("community/add")}
                                className="text-blue-500 mt-2"
                            >
                                Add New
                            </a>
                        </div>
                    )}
                    {communityExpArray.length !== 0 &&
                        communityExpArray.map((obj) => (
                            <section className="w-full border shadow-sm rounded-md p-4">
                                <div>
                                    <a href={obj.image_path} target="_blank">
                                        <img
                                            src={obj.image_path}
                                            className="w-16 aspect-auto"
                                        />
                                    </a>
                                </div>
                                <section
                                    key={obj.id}
                                    className="flex justify-between"
                                >
                                    <div className="w-full flex gap-4">
                                        <div className="w-full">
                                            <h3 className="text-lg font-bold">
                                                {obj.title}
                                            </h3>
                                            <Textarea
                                                readOnly
                                                value={obj.description}
                                                className="w-full"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-[60px]">
                                        {/* edit and delete button */}
                                        <section className="flex flex-col gap-2 items-end">
                                            <a
                                                href={
                                                    "community/edit/" + obj.id
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
                                                    deleteExp(obj.id);
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
        </AuthenticatedLayout>
    );
}
