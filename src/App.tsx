import React from 'react';

function App() {
    const onCreate = () => {
        parent.postMessage({ pluginMessage: { type: 'create-rect', count: 5 } }, '*');
    };

    return (
        <div className="p-4">
            <h1 className="text-xl font-bold mb-4">shadcn/ui kit</h1>
            <p className="mb-4">Welcome to the shadcn/ui kit Figma plugin.</p>
            <button
                onClick={onCreate}
                className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
            >
                Create Rectangles
            </button>
        </div>
    );
}

export default App;
