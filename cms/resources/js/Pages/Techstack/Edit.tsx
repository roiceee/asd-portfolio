import NavLink from "@/Components/NavLink";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageProps } from "@/types";
import { Head, router, useForm } from "@inertiajs/react";
import { Label } from "@radix-ui/react-label";
import { FormEvent } from "react";

export default function Add({ auth, techstack }: PageProps) {
    const techobj = techstack as Techstack;
    const { data, setData, post, progress, processing } = useForm<{
        id: number;
        name: string;
        image_path: string;
        order: number;
        image: File | null;
    }>({
        id: techobj.id,
        name: techobj.name,
        image_path: techobj.image_path,
        order: techobj.order,
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
        router.post("/techstack/edit", {
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
                            <Label className="text-sm">Order</Label>
                            <Input
                                className="max-w-xs"
                                id="order"
                                type={"number"}
                                placeholder={"Enter Order"}
                                value={data.order}
                                onChange={(e) => setNewData(e)}
                                required
                                min={1}
                            />
                        </div>
                        <div className="mt-2">
                            <div className="mt-6">
                                <span>Current Image:</span>
                                <a href={data.image_path} target="_blank">
                                    <img
                                        src={data.image_path}
                                        className="w-16 h-16"
                                    />
                                </a>
                            </div>

                            <Label className="text-sm">Image</Label>
                            <Input
                                id="image"
                                type={"file"}
                                accept="image/*"
                                defaultValue={""}
                                onChange={(e) => setImage(e)}
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
