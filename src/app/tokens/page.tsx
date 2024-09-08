import { Button, Textarea } from "@nextui-org/react";


export default function Token() {
     return(
        <div className="flex flex-col items-center gap-2 pt-10">
            <div className="flex flex-row gap-2">
                <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500  text-white shadow-lg px-12">
                    Generate token
                </Button>
                <Button radius="full" className="bg-red-700  text-white shadow-lg px-12">
                    Delete token
                </Button>
            </div>
            <div>
                <Textarea
                    isReadOnly
                    variant="bordered"
                    labelPlacement="outside"
                    placeholder={'token'}
                    defaultValue="Generate a token"
                    className="w-96 h-10"
                />
            </div>
        </div>
     );
}