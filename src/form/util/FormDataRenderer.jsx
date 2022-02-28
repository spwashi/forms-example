import React from "react";

const doShowData = !false;
export const FormDataRenderer = (data) => doShowData && data
    ? <pre>{JSON.stringify(data, null, 3)}</pre>
    : null;