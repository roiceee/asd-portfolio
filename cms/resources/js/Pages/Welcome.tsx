import { Link, Head } from "@inertiajs/react";
import { PageProps } from "@/types";
import { Button } from "@/components/ui/button";

export default function Welcome({
    auth,
    laravelVersion,
    phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
    return (
        <main>
            <Head title="Roice Portfolio Admin" />
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">
                        Roice Portfolio - Admin
                    </h1>

                    {/* Sign in */}

                    <div className="mt-4">
                        <Link
                            href={route("register")}
                            className="text-blue-500 hover:underline"
                        >
                            <Button size={"lg"} className="text-xl">Sign in</Button>
                        </Link>
                    </div>
                </div>
            </div>
            <div></div>
        </main>
    );
}
