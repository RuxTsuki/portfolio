'use client';

import { Button } from "@nextui-org/react"
import Link from "next/link";

export const GoHome = () => {
    return (
        <Link href={'/'}>
            <Button radius="full" className=" font-black text-white text-[1.25rem] bg-degrade-main px-[24px] ">
                Go Home
            </Button>
        </Link>
    )
}
