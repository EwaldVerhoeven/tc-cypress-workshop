import { SchemaCollection, bind, combineSchemas } from "@cypress/schema-tools";

import { Response } from "./response";

export const schemas: SchemaCollection = combineSchemas(Response);

export const JsonSchemas = bind({ schemas });
