interface PageContainerProps {
    children: React.ReactNode;
    className?: string; 
}

function PageContainer({children, className}: PageContainerProps) {
    return ( 
        <div className={`container max-w-7xl ${className}`}>
            {children}
        </div>
     );
}

export default PageContainer;