
interface Props {
    children: React.ReactNode,
    contentStyle: React.CSSProperties,
    className?: string,
    contentArrowStyle: React.CSSProperties,
    date: string,
    iconStyle: React.CSSProperties,
    icon: React.ReactNode
}

export const VerticalTimelineElement = ({ children, contentStyle, className, contentArrowStyle, date, iconStyle, icon }: Props) => {
    return (
        <div>
            {children}
        </div>
    )
}
