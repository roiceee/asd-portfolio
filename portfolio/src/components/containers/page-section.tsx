
interface PageSectionProps {
    title: string;
    children?: React.ReactNode;
    className?: string;
}

function PageSection({title, children, className}: PageSectionProps) {
    return ( 
        <section className={`py-16 ${className}`}>
            <h3 className="text-3xl md:text-4xl mb-8 font-bold">{title}</h3>
            {children}
        </section>
     );
}

export default PageSection;