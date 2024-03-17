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
    type: string;
    placeholder: string;
    value: string;
    setValue: (key: string, value: string) => void;
    className?: string;
}

export function TextInputWithLabel({
    id,
    label,
    type,
    placeholder,
    value,
    setValue,
    className,
}: Props) {
    return (
        <div
            className={twMerge(
                "grid w-full max-w-sm items-center gap-1.5 " + className
            )}
        >
            <Label htmlFor={id}>{label}</Label>
            {type !== "textarea" && (
                <Input
                    required
                    type={type}
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(id, e.target.value)}
                />
            )}
            {type === "textarea" && (
                <Textarea
                    required
                    id={id}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => setValue(id, e.target.value)}
                />
            )}
        </div>
    );
}
