import React from "react";

interface NiceBlockComponentProps {
    name: String
}

/**
 * Test component to show a name in a nice box.
 * 
 * @param {String} name Name to show. 
 * @returns React.FC
 */
const NiceBlockComponent: React.FC<NiceBlockComponentProps> = ({name}) => {
    return (
        <div
            style={{ padding: '20px', border: '1px solid teal' }}
        >
            {name}
        </div>
    )
};

export default NiceBlockComponent;