const fs = require('fs');
const path = require('path');

const indexMap = {
    'apply': '应用',
    'tools': '工具',
    'theory': '理论',
    'interview': '面试',
}

const host = 'https://wolf-wolf.github.io/blog_record/article'
const articleIndex = fs.readdirSync(path.resolve(__dirname, './article'))

let mainContent = '';

articleIndex.forEach(dirName => {
    let mdFilenameList = fs.readdirSync(path.resolve(__dirname, `./article/${dirName}`));
    let idxFileContent = `## [${indexMap[dirName]}](${host}/${dirName}/index)\n\n`;

    mdFilenameList.filter(filename => filename !== 'index.md').forEach(filename => {
        const realFileContent = fs.readFileSync(`./article/${dirName}/${filename}`);
        idxFileContent += `*${filename.split('.')[0].split('_').join('-')}*\n\n`
        idxFileContent += `${realFileContent}\n`;
    });

    fs.writeFileSync(path.resolve(__dirname, `./article/${dirName}/index.md`), idxFileContent)

    mainContent += idxFileContent;
})

fs.writeFileSync(path.resolve(__dirname, './README.md'), mainContent)

