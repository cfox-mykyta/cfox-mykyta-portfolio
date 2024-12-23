// src/app/contacts/head.tsx
import Head from 'next/head';

const ContactHead: React.FC = () => {
    return (
        <Head>
            <title>Contacts | My Portfolio</title>
            <meta
                name="description"
                content="Get in touch with me for collaborations, questions, or opportunities. Check out my email, GitHub, and LinkedIn links here."
            />
            <meta name="keywords" content="Contacts, Portfolio, Email, GitHub, LinkedIn" />
            <meta name="author" content="Mykyta" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
}

export default ContactHead;

