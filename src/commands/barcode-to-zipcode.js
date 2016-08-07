/**
 * Created by amber on 16-8-7.
 */

let {barcodeToZipcode} = require('../core/barcode-to-zipcode');

// module.exports=function(barcode){
//    let zipcode =barcodeToZipcode(barcode);
//     if(zipcode.startsWith('Invalid barcode')){
//         return {
//             error:'Please give me a right 1input',
//         }
//     }else{
//         return {
//             text:zipcode,
//             reset:true
//         }
//     }
// };

// let {barcodeToZipcode} = require('../core/zip-and-bar-exchange');

function barToZip(barcode) {
    let zipcode = barcodeToZipcode(barcode);
    if(zipcode === 'error!!!'){
        return{
            error: 'please input right zipcode'
        }
    }else {
        return{
            text: zipcode,
            reset: true
        }
    }
}

module.exports = barToZip;