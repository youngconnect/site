import { CustomSVGProps } from "@src/shared/@types/svg";
import { getResponsiveSize } from "@src/utils";

export default function LogoApp(props: Partial<CustomSVGProps>) {
    const iconColor: string = props?.color || props?.fill || "var(--primary-900)";
    const responsiveSize = getResponsiveSize({ props: props, width: "2.778vw", height: "2.778vw" });
    
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            {...responsiveSize}
            fill="none"
            preserveAspectRatio="xMidYMid meet"
            {...props}
        >
            <path
                fill={iconColor}
                d="M35.473 7.836 30.6 12.71c-2.495 2.496-9.832 3.902-9.832 3.902s-.564-.83-1.284-2.061c-1.231-2.126-2.923-5.432-2.923-7.674V0h5.937v12.412l8.776-8.77 4.2 4.194ZM3.597 31.3l4.874-4.875c2.496-2.495 9.833-3.902 9.833-3.902s.564.83 1.283 2.061c1.232 2.126 2.923 5.432 2.923 7.674v6.877h-5.937V26.723L7.797 35.5l-4.2-4.2ZM31.306 35.454l-4.862-4.861c-2.495-2.496-3.901-9.833-3.901-9.833s.83-.564 2.06-1.283c2.127-1.232 5.432-2.923 7.675-2.923h6.877v5.937H26.743l8.763 8.763-4.2 4.2ZM7.836 3.584l4.874 4.874c2.496 2.496 3.902 9.833 3.902 9.833s-.83.564-2.061 1.283c-2.126 1.232-5.432 2.923-7.674 2.923H0V16.56h12.412L3.636 7.784l4.2-4.2Z"
            />
        </svg>
    );
}
