import 'pdf.js';
import 'pdf.worker.js';

console.log('pdfjsLib', pdfjsLib)

export default function pdfToImage(pdfUrl) {
    pdfjsLib.getDocument('https://obs-mes.obs.cn-east-2.myhuaweicloud.com/elecpdf/khgx.pdf').then(pdf => {
        console.log('pdf', pdf)
        totalPages = pdf.numPages; //获取pdf文件总页数
        for(var i = 1; i <= totalPages; i++) {
            pdf.getPage(i).then(page  => {
                var viewport = page.getViewport(2); // 页面缩放比例
                var canvas = document.createElement('canvas');
                canvas.id = "pageNum" + i;
                var context = canvas.getContext('2d');
                canvas.width = viewport.width;
                canvas.height = viewport.height;
                var renderContext = {
                    canvasContext: context,
        viewport: viewport
                };
                page.render(renderContext).then(v => {
                    console.log(canvas.toDataURL())
                });
            })
        }
    })
}