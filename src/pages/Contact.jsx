import React from 'react';

import ContactMe from '../components/ContactMe';


const Contact = () => {
    return (
        <div className='min-h-screen'>

            <main className="flex-1 flex flex-col justify-center max-w-5xl w-full mx-auto md:px-6">
                <ContactMe />
            </main>

        </div>
    );
};

export default Contact;
