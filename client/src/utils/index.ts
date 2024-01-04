import { Model } from "../types";

export const generateCode = (model: Model): string => {
  let output = `
const mongoose = require("mongoose");

const ${model.name?.toLowerCase()}Schema = new mongoose.Schema(
    {
    ${model.attributes
      ?.map((attr: any) => {
        return `${attr.name}: {
            type: ${attr.type}
        }`;
      })
      .join(",\n\t\t")}
    }
);
    `;

  return output;
};
