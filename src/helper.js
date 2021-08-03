import { saveAs } from 'file-saver';
export function downloadCv(e) {
     e.preventDefault();
    var oReq = new XMLHttpRequest();
// The Endpoint of your server
    var URLToPDF = "https://johnchafi.github.io/CV/jeanCV.pdf";

// Configure XMLHttpRequest
    oReq.open("GET", URLToPDF, true);

// Important to use the blob response type
    oReq.responseType = "blob";

    oReq.onload = function(){
        var file = new Blob([oReq.response], {
            type: 'application/pdf'
        });

        // Generate file download directly in the browser !
        saveAs(file, "jeanCV.pdf");
    };
     oReq.send();
}

export function test(){
    console.log("allo");
}



