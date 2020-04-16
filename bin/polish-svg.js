import Svgo from 'svgo';
import cheerio from 'cheerio';
import { format } from 'prettier';

import DEFAULT_ATTRS from '../src/default-attrs.json';

function polishSvg(svg) {
  return (
    optimize(svg)
    .then(setAttrs)
    .then(format)
    // remove semicolon inserted by prettier
    // because prettier thinks it's formatting JSX not HTML
    .then(svg => svg.replace(/;/g, ''))
  );
}

function optimize(svg) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
      { removeTitle: true },
    ],
  });

  return new Promise(resolve => {
    svgo.optimize(svg, ({ data }) => resolve(data));
    
    console.log('optimized...')
  });
}

function setAttrs(svg) {
  
  console.log('setting Attributes...')
  
  const $ = cheerio.load(svg);
  Object.keys(DEFAULT_ATTRS).forEach(key =>
    $('svg').attr(key, DEFAULT_ATTRS[key]),
  );

  return $('body').html();
}

export default polishSvg;