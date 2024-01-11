import React, { useEffect, useRef } from 'react';
import EasyMDE from 'easymde';
import StoryFooter from './Storyfooter';
import 'easymde/dist/easymde.min.css';

export default function AddStory() {
    const easyMDE = useRef(null);
    const markdownEditor = useRef(null);

    useEffect(() => {
        if (!easyMDE.current) {
            easyMDE.current = new EasyMDE({ element: markdownEditor.current });
        }
    }, []);

    const handleSave = () => {
        if (easyMDE.current) {
            const text = easyMDE.current.value();
            // Save the text to your backend here
            // make a post request to the backend
            
            
            console.log(text);
        }
    };

    return (
        <div style={{ marginTop: '50px' }}>
            <textarea ref={markdownEditor} />

            <button onClick={handleSave}>Save</button>
            <StoryFooter />
        </div>
    );
}