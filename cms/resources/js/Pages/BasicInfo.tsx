import { TextInputWithLabel } from "@/Components/shad/InputWithLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { PageProps } from "@/types";
import { Head, useForm } from "@inertiajs/react";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { router } from "@inertiajs/react";
import { FileInputWithLabel } from "@/Components/shad/FileInputWithLabel";

export default function BasicInfo({ auth, basic_info }: PageProps) {
    const _data = basic_info as BasicInfo;
    const { data, setData, processing } = useForm({
        id: _data.id,
        user_id: _data.user_id,
        name: _data.name,
        title: _data.title,
        description: _data.description,
        linkedin: _data.linkedin,
        github: _data.github,
        mail: _data.mail,
        image_name: _data.image_name,
        image_path: _data.image_path,

        // has file on upload
    });

    const setBasicInfoValue = useCallback(
        (key: string, value: string) => {
            setData((data) => {
                return {
                    ...data,
                    [key]: value,
                };
            });
        },
        [data]
    );

    const setImageValue = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files![0];

            setData((data) => {
                return {
                    ...data,
                    image_name: file.name,
                    image_data: file,
                };
            });
        },
        [data]
    );

    const saveData = async (e: FormEvent) => {
        e.preventDefault();
        router.post("/basicinfo", { _method: "put", data: data });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-md text-gray-800 leading-tight">
                    Basic Info
                </h2>
            }
        >
            <Head title="Basic Information" />
            <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <form action="POST" onSubmit={saveData}>
                    <div className="md:flex w-full">
                        <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm w-full">
                            <h2 className="text-lg mb-4">Basic Information</h2>
                            <div>
                                <TextInputWithLabel
                                    id="name"
                                    label="Name"
                                    type="text"
                                    placeholder="Name"
                                    value={data.name}
                                    setValue={setBasicInfoValue}
                                    className="mt-4"
                                />
                                <TextInputWithLabel
                                    id="title"
                                    label="Title"
                                    type="text"
                                    placeholder="Title"
                                    value={data.title}
                                    setValue={setBasicInfoValue}
                                    className="mt-4"
                                />
                                <FileInputWithLabel
                                    acceptType="image/*"
                                    id="image"
                                    label="Image"
                                    setValue={setImageValue}
                                    className="mt-4 max-w-sm"
                                />
                                {data.image_path !== "" && (
                                    <div>
                                        <span>
                                            Current image:{" "}
                                            <a
                                                target="_blank"
                                                href={data.image_path}
                                                className=" text-blue-600"
                                            >
                                                View Image
                                            </a>
                                            <img src={data.image_path} className="max-h-52 w-auto"/>
                                        </span>
                                    </div>
                                )}
                                <TextInputWithLabel
                                    id="description"
                                    label="Description"
                                    type="textarea"
                                    placeholder="Description"
                                    value={data.description}
                                    setValue={setBasicInfoValue}
                                    className="mt-4"
                                />
                            </div>
                        </section>
                        <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm w-full">
                            <h2 className="text-lg mb-4">Social Media</h2>
                            <TextInputWithLabel
                                id="linkedin"
                                label="LinkedIn"
                                type="text"
                                placeholder="LinkedIn"
                                value={data.linkedin}
                                setValue={setBasicInfoValue}
                                className="mt-4"
                            />
                            <TextInputWithLabel
                                id="github"
                                label="Github"
                                type="text"
                                placeholder="Github"
                                value={data.github}
                                setValue={setBasicInfoValue}
                                className="mt-4"
                            />
                            <TextInputWithLabel
                                id="mail"
                                label="Mail"
                                type="text"
                                placeholder="Mail"
                                value={data.mail}
                                setValue={setBasicInfoValue}
                                className="mt-4"
                            />
                        </section>
                    </div>
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
                        <Button disabled={processing}>
                            {processing ? "Saving..." : "Save"}
                        </Button>
                    </section>
                </form>
            </section>
        </AuthenticatedLayout>
    );
}
