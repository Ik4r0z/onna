import { Image, ImageProps } from "react-native"

import clsx from "clsx"

type AvatarProps  = ImageProps & {
    size?: "small" | "medium" | "large"
}

export function Avatar( { size = "medium", ...rest }: AvatarProps ) {
    return (
        <Image className={clsx("rounded-full", {
            "w-10 h-10": size === "small",
            "w-12 h-12": size === "medium",
            "w-[200px] h-[200px]": size === "large"
        })}
        {...rest}
        />
    )
}