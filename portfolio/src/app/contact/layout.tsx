import PageContainer from "@/components/containers/page-container";

interface ContactPageLayoutProps {
    children: React.ReactNode
}

function ContactPageLayout({children}: ContactPageLayoutProps) {
    return ( 
        <PageContainer>
            {children}
        </PageContainer>
     );
}



export default ContactPageLayout;