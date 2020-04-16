import fs from 'fs';
import path from 'path';

// import polishSvg from './polish-svg';

const IN_DIR = path.resolve(__dirname, '../icons');

console.log(`Processing SVGs in ${IN_DIR}...`);

// fs
//     .readdirSync(IN_DIR, (data) => console.log(data))
    // .filter(file => path.extname(file) == '.svg')
    // .forEach(svgFile => {
    //     const svg = fs.readFileSync(path.join(IN_DIR, svgFile));
    //     polishSvg(svg).then(svg =>
    //         fs.writeFileSync(path.join(IN_DIR, svgFile), svg),
    //     );
    // });