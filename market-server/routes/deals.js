const { response } = require('express');
var express = require('express');
var router = express.Router();
var dbAbstractionLayer=require('../public/javascripts/DBAbstractionLayer')

/* GET users listing. */
router.get('/', function (req, res, next) {
//   setTimeout(() => {
//     let jsonResponce = {
//       "handsetCards": [
//         {imageName:'offer1',title:'10% Off on personal cares', cols: 2, rows: 1 },
//         {imageName:'offer2',title: 'Flash sales in footweares', cols: 2, rows: 1 },
//         {imageName:'offer3',title: 'Extended warrenty for Apple products', cols: 2, rows: 1 },
//         {imageName:'offer4',title: '5% discount for grocery', cols: 2, rows: 1 }
//       ],
//       "webCards": [
//         {imageName:'offer1',title: '10% Off on personal cares', cols: 2, rows: 1 },
//         {imageName:'offer2',title: 'Flash sales in footweares', cols: 1, rows: 1 },
//         {imageName:'offer3',title: 'Extended warrenty for Apple products', cols: 1, rows: 2 },
//         {imageName:'offer4',title: '5% discount for grocery', cols: 1, rows: 1 }
//       ]
//     }
//     res.json(jsonResponce);//return json object

//   }, 3000);
  dbAbstractionLayer.queryDealsCollection().then(response => {
  res.json(response)
  }).catch(error => {
    res.status(500).json({});
})

});



module.exports = router;
