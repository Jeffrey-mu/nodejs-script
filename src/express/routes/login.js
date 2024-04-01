import express from'express';
var router = express.Router();
router.get('/', function (req, res, next) {
  var data = {
    code: 200,
    msg: '修改成功！'
  }
  res.send(data);
})
export default router;
