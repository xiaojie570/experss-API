
/**
 * @api {post} /storage_location/queryNoGoods_id 查找没有货物的储位
 * @apiPermission none
 * @apiGroup goods
 *
 *
 * @apiSuccessExample {json} Success-Response :
 *[
 *     {
 *      "loc_id": 5
 *    },
 *    {
 *      "loc_id": 6
 *    }
 *]
 *
 */



/**
 * @api {post} /goods/queryAll 查询所有货物
 * @apiPermission none
 * @apiGroup goods
 *
 *
 * @apiSuccessExample {json} Success-Response :
 * [
 *    {
 *      "id": 1,
 *      "loc_id": 1,
 *      "count": 10,
 *      "goods_name": "锡纸金针菇"
 *    },
 *    {
 *      "id": 2,
 *      "loc_id": 1,
 *      "count": 10,
 *      "goods_name": "锡纸花甲粉"
 *    },
 * ]
 *
 */


/**
 * @api {post} /goods/addGoods 增加一个货物
 * @apiPermission none
 * @apiGroup goods
 *
 * @apiParam {String} loc_id 储位.
 * @apiParam {String} count 货物数量.
 * @apiParam {String} goods_name 货物名称.
 *
 *
 * @apiSuccessExample {json} Success-Response :
 * 显示刚刚增加的货物信息
 *[
 *    {
 *      "id": 18,
 *      "loc_id": 5,
 *      "count": 10,
 *      "goods_name": "大串"
 *    }
 *]
 *
 * @apiErrorExample {json} Error-Response:
 *1-->储位没有位置了，需要重新增加一个储位
 * {
 *   "status": "1"
 *}
 */



