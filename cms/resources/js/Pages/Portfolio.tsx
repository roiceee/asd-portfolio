import { FileInputWithLabel } from "@/Components/shad/FileInputWithLabel";
import ProjectForm from "@/Components/shad/ProjectForm";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { PageProps } from "@/types";
import { Head, router, useForm } from "@inertiajs/react";
import { FormEvent, useState } from "react";


export default function Portfolio({ auth, portfolio }: PageProps) {
    const port = portfolio as Portfolio | null;
    const { data, setData, post, progress, processing } = useForm({
        id: port ? port.id : null,
        user_id: port ? port.user_id : null,
        path: port ? port.path : null,
        name: port ? port.name : null,
        //has file on upload
    });


    const handlePortfolioFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const uploadedFile = e.target.files?.[0];

        if (uploadedFile) {
            setData((data) => {
                return {
                    ...data,
                    name: uploadedFile.name,
                    file: uploadedFile,
                };
            });
        }
    };

    const saveData = (e: FormEvent) => {
        e.preventDefault();

        router.post("/portfolio", { _method: "put", data: data });
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-md text-gray-800 leading-tight">
                    Portfolio
                </h2>
            }
        >
            <Head title="Portfolio" />

            <section className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <form onSubmit={saveData}>
                    <section className="mt-4 px-1 bg-white py-4 rounded-md shadow-sm">
                        <h2 className="text-lg mb-4">Portfolio</h2>
                        {port && (
                            <div>
                                <span>Current portfolio file: </span>
                                <a
                                    href={port.path}
                                    target="_blank"
                                    className="text-blue-600"
                                >
                                    {port.name}
                                </a>
                            </div>
                        )}
                        <FileInputWithLabel
                            acceptType="application/pdf"
                            id="image"
                            label="Porfolio PDF file"
                            setValue={handlePortfolioFile}
                            className="mt-2"
                        />
                        {progress && (
                            <Progress
                                value={progress.percentage}
                                className="mt-2"
                            />
                        )}
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
                </form>
            </section>
        </AuthenticatedLayout>
    );
}
