import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
 return (
   <Html lang="en">
     <Head />
     <body>
       <div id="main-100sr">
       <script type="module" src="https://unpkg.com/@splinetool/viewer@1.2.4/build/spline-viewer.js"></script>
       <spline-viewer id="home-sr" url="https://prod.spline.design/yvm-aOKTS59TjTuc/scene.splinecode"></spline-viewer>
       </div>
       <Main />
       <NextScript />
      
     </body>
   </Html>
 )
}




