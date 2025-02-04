// Type definitions for local-dynamo 0.5
// Project: https://github.com/Medium/local-dynamo
// Definitions by: Matt Rollins <https://github.com/Sicilica>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node"/>

import { ChildProcess } from "child_process";

export interface Options {
    port: number;
    dir?: string | undefined;
    heap?: string | undefined;
    detached?: boolean | undefined;
    stdio?: string | undefined;
    cors?: string | string[] | undefined;
    sharedDb?: boolean | undefined;
}

export function launch(options?: Options | string, port?: number): ChildProcess;
