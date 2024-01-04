import { Model } from "../types";

export const generateCode = (model: Model): string => {
  const modelName =
    model.name?.charAt(0).toUpperCase() + model.name?.slice(1).toLowerCase();
  let output = `const mongoose = require("mongoose");

const ${model.name?.toLowerCase()}Schema = new mongoose.Schema(
    {
\t\t${model.attributes
    ?.map((attr: any) => {
      return `${attr.name}: {
            type: ${attr.type}
        }`;
    })
    .join(",\n\t\t")}
    }
);

const ${modelName} = mongoose.model("${model.name?.toLowerCase()}Schema", ${model.name?.toLowerCase()}Schema);
module.exports = ${modelName};
`;

  return output;
};
