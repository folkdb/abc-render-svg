import path from 'path';
import jsdom from 'jsdom';

const vextabRenderSvg = (
  content,
  options = {},
) => new Promise((resolve, reject) => {
  const { JSDOM, VirtualConsole } = jsdom;
  const virtualConsole = new VirtualConsole();

  virtualConsole
    .on('error', (err) => { reject(err); })
    .on('jsdomError', (err) => { reject(err); });

  const { window } = new JSDOM(`
    <!DOCTYPE html>
    <body><div id="target"></div></body>
    <script id="abcjs"></script>
  `, {
    virtualConsole,
    runScripts: 'dangerously',
    resources: 'usable',
  });

  const { document, MutationObserver } = window;

  const observer = new MutationObserver((mutations) => {
    resolve(mutations[0].target.innerHTML);
  });
  
  const target = document.getElementById('target');
  observer.observe(target, { childList: true });

  window.eval(`
    const data = \`${content}\`;
    const script = document.getElementById('abcjs');
    script.onload = () => {
      try {
        ABCJS.renderAbc('target', data, ${JSON.stringify(options)});
      } catch (err) {
        console.error(err); 
      }
   };
   script.src = 'file://${path.resolve(process.cwd(), 'lib/abcjs_basic_5.12.0-min.js')}';
  `);
});

export default vextabRenderSvg;
