import { DocumentBuilder } from "./DocumentBuilder";

const header = "ACME Corporation — Report";
const body = "Quarterly performance increased by 12%.";
const footer = "--- Confidential ---";

const myDocument = new DocumentBuilder()
  .addHeader(header)
  .addBody(body)
  .addFooter(footer)
  .build();

console.log(myDocument);

// Output:
