const fs = require('fs');
const path = require('path');

const imagesDirectory = path.join(__dirname, '../../assets/images');

const outputLines = [];
const imageFiles = fs.readdirSync(imagesDirectory);

imageFiles.forEach(filename => {
  if (!filename.includes('@2') && !filename.includes('@3')) {
    const extension = path.extname(filename);
    const imageName = path.basename(filename, extension);
    const camelCaseName = imageName.replace(/-([a-z])/g, (match, letter) =>
      letter.toUpperCase(),
    );

    const imagePath = path.join('../../assets/images', filename);

    outputLines.push(`  ${camelCaseName}: require('${imagePath}'),`);
  }
});

const outputFile = path.join(
  __dirname,
  '../resources/__generated__/images.gen.ts',
);
const outputContent = `
// This file was automatically generated and should not be edited.
export const images = {
${outputLines.join('\n')}
};
`;

fs.writeFileSync(outputFile, outputContent);
console.log('Images file generated successfully.');
