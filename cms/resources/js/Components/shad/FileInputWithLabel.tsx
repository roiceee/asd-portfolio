import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Check, X } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
    id: string;
    label: string;
    setValue: (e: any) => void;
    className?: string;
    acceptType?: string;
}

export function FileInputWithLabel({
    id,
    label,
    setValue,
    className,
    acceptType,
}: Props) {
    return (
        <div
            className={twMerge("grid w-full items-center gap-1.5 " + className)}
        >
            <Label htmlFor={id}>{label}</Label>

            <Input
                accept={acceptType ? acceptType : ""}
                type={"file"}
                id={id}
                onChange={setValue}
                defaultValue={""}
            />
        </div>
    );
}
