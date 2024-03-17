import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

interface Props {
    title: string;
    description: string;

    setNewExpData: (e: any) => void;
    setImage: (e: any) => void;
    imageSrc?: string;
    imagePath?: string;
    imageRequired?: boolean;
}

export default function CommunityExpForm({
    title,
    description,

    setNewExpData,
    setImage,
    imageSrc,
    imagePath,
    imageRequired,
}: Props) {
    return (
        <div>
            <div className="mt-2">
                <Label className="text-sm">Name</Label>
                <Input
                    id="title"
                    type={"text"}
                    placeholder={"Enter Title"}
                    value={title}
                    onChange={(e) => setNewExpData(e)}
                    required
                />
            </div>

            <div className="mt-2">
                {imageSrc && (
                    <div className="mt-6">
                        <span>Current Image:</span>
                        <a href={imagePath} target="_blank">
                            <img src={imageSrc} className="w-16 h-16" />
                        </a>
                    </div>
                )}
                <Label className="text-sm">Image (1:1)</Label>
                <Input
                    id="demo_link"
                    type={"file"}
                    accept="image/*"
                    defaultValue={""}
                    onChange={(e) => setImage(e)}
                    required={imageRequired}
                />
            </div>

            <div className="mt-2">
                <Label className="text-sm">Description</Label>
                <Textarea
                    id="description"
                    placeholder={"Description"}
                    value={description}
                    onChange={(e) => setNewExpData(e)}
                    required
                />
            </div>

        </div>
    );
}
