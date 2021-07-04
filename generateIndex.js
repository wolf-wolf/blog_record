const fs = require('fs');
const path = require('path');

const indexMap = {
    'a_theory': 'A、理论',
    'b_apply': 'B、应用',
    'c_algorithm': 'C、算法',
    'd_interview': 'D、面试',
    'e_tools': 'E、工具',
    'f_official': 'F、官方文档',
}

const host = 'https://wolf-wolf.github.io/blog_record'
const articleIndex = fs.readdirSync(path.resolve(__dirname, './article'))

let mainContent = '';

articleIndex.forEach(dirName => {
    let mdFilenameList = fs.readdirSync(path.resolve(__dirname, `./article/${dirName}`));
    let idxFileContent = `## [${indexMap[dirName]}](${host}/article/${dirName}/index)\n\n`;

    mdFilenameList.filter(filename => filename !== 'index.md').forEach(filename => {
        const realFileContent = fs.readFileSync(`./article/${dirName}/${filename}`);
        idxFileContent += `*${filename.split('.')[0].split('_').join('-')}*\n\n`
        idxFileContent += `${realFileContent}\n`;
    });

    mainContent += idxFileContent;

    idxFileContent = `[<< 返回首页](${host})\n\n` + idxFileContent;

    fs.writeFileSync(path.resolve(__dirname, `./article/${dirName}/index.md`), idxFileContent)
})

fs.writeFileSync(path.resolve(__dirname, './README.md'), mainContent)

