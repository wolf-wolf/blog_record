const fs = require('fs');
const path = require('path');

const indexMap = {
    'apply': '应用',
    'tools': '工具',
    'theory': '理论',
    'interview': '面试',
}

const articleIndex = fs.readdirSync(path.resolve(__dirname, './article'))

let content = '';

articleIndex.forEach(dirName => {
    let mdFilenameList = fs.readdirSync(path.resolve(__dirname, `./article/${dirName}`));
    content += `## ${indexMap[dirName]}\n\n`;
    mdFilenameList.forEach(filename => {
        const realFileContent = fs.readFileSync(`./article/${dirName}/${filename}`);
        content += `*${filename.split('.')[0].split('_').join('-')}*\n\n`
        content += `${realFileContent}\n`;
    });
})

fs.writeFileSync(path.resolve(__dirname, './README.md'), content)

