'use client';

import type { Snippet } from '@prisma/client';
import Editor from '@monaco-editor/react';
import {useState} from 'react';

interface SnippetEditFormProps {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {
   const [code, setCode] = useState(snippet.Code);
   
    const handleEditorChange = (value: string = " ") => {
   console.log(value);
   };
   
    return (
        <div>
        <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.Code}
        options={{ minimap: { enabled: false}}}
        onChange={handleEditorChange}
        />
        </div>
    )
}