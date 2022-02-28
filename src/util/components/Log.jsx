import React from "react";

export function Log({children, console = window.console}) {
    console && console.log(children);
    return <pre>{JSON.stringify(children, null, 4)}</pre>

}