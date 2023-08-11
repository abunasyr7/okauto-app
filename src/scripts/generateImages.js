const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '../../assets/images'); // Путь до директории с изображениями
const outputFilePath = path.join(
  __dirname,
  '../resources/__generated__/images.gen.ts',
); // Путь до файла для вывода

// Функция для преобразования kebab-case в camelCase
const kebabToCamel = str => {
  return str.replace(/-([a-z])/g, (match, letter) => letter.toUpperCase());
};

// Считывание файлов из директории и генерация экспортов
const generateImagesExports = () => {
  const imageFiles = fs.readdirSync(imagesDir);
  const exportStatements = [];

  imageFiles.forEach(file => {
    if (file.match(/^(?!.*(@2x|@3x)).*\.png$/)) {
      const key = kebabToCamel(path.basename(file, '.png'));
      const imagePath = path.relative(
        path.dirname(outputFilePath),
        path.join(imagesDir, file),
      );
      const exportStatement = `export const ${key} = require('${imagePath}');`;
      exportStatements.push(exportStatement);
    }
  });

  return exportStatements.join('\n');
};

// Генерация кода и запись в файл
const outputCode = `// This file was automatically generated and should not be edited.
${generateImagesExports()}`;

fs.writeFileSync(outputFilePath, outputCode);

console.log('Images exports generated successfully!');
