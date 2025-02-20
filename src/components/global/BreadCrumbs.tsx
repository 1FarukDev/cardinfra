"use client"

import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"


export default function Breadcrumb({ data }: { data: { name: string, url: string }[] }) {
    const { push } = useRouter()

    return (
        <div className="flex items-center gap-3 justify-start">
            {data.map((breadcrumb, index) => {
                return (
                    <div className="flex gap-3 items-center" key={index}>
                        {index === 0 && <Icon width={16} icon="meteor-icons:angle-left" />}
                        <button onClick={() => push(breadcrumb?.url)} className="text-sm hover:text-primary hover:underline transition-all">{breadcrumb?.name}</button>
                        {(index + 1) <= (data?.length - 1) && <Icon width={16} icon="mi:arrow-right" />}
                    </div>
                )
            })}
        </div>
    )
}