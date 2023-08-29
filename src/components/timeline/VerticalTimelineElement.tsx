
import './vertical-line-element.css';
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
        <div className="vertical-line-element-bg ml-[60px] px-4 py-5 relative rounded-[.25em]">
            <span className='px-[.8em] opacity-[.7] inline-block text-[.8125rem]'>{date}</span>
            {children}
        </div>
    )
}
