import React from "react";
/**
 * Test component to show a name in a nice box.
 *
 * @param {String} name Name to show.
 * @returns React.FC
 */
var NiceBlockComponent = function (_a) {
    var name = _a.name;
    return (React.createElement("div", { style: { padding: '20px', border: '1px solid teal' } }, name));
};
export default NiceBlockComponent;
