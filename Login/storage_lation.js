/**
 * @api {post} /storage_location/queryAll 所有储位
 * @apiPermission none
 * @apiGroup storage
 *
 * 
 *  @apiSuccessExample {json} Success-Response :
 * [
 *  {
 *  "loc_id": 1,
 *  "size": 1000,
 *  "goods_id": 1,
 *  "surplus_size": 2870
 * },
 * {
 *  "loc_id": 2,
 *  "size": 1000,
 *  "goods_id": null,
 *  "surplus_size": 1000
 * },
 * {
 *  "loc_id": 3,
 *  "size": 100,
 *  "goods_id": null,
 *  "surplus_size": 90
 * }
 * ]
 */