
/**
 * @api {post} /users/login 登录
 * @apiPermission none
 * @apiGroup login-register
 *
 * @apiParam {String} username 用户名.
 * @apiParam {String} password  密码.
 * @apiParamExample Request-Example: 以下信息已在数据库内创建，可直接用来认证
 * {
 *    "username": "5"
 *    "password": "5"
 * }
 *
 * @apiSuccess {String} status 返回status值给客户端用于验证（0--> 用户名密码正确；1-->无此用户；2-->密码错误）
 * 
 * @apiSuccessExample {json} Success-Response :
 * 0-->用户名密码正确
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->用户名不存在
 * {
 *    "status": "1"
 * }
 *
 * 2-->密码错误
 * {
 *    "status": "2"
 * }
 */




/**
 * @api {post} /users/register_judgeUsername 注册(判断用户名)
 * @apiPermission none
 * @apiGroup login-register
 *
 * @apiParam {String} username 用户名.
 * @apiParamExample Request-Example: 以下信息已在数据库内创建，可直接用来认证
 * {
 *    "username": "2"
 * }
 *
 * @apiSuccess {String} status 返回status值给客户端用于验证（0--> 用户名不存在，可以进行注册；1-->用户名已存在）
 * 
 * @apiSuccessExample {json} Success-Response :
 * 0-->用户名不存在，可以进行注册
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->用户名已存在
 * {
 *    "status": "1"
 * }
 *
 *
 */


/**
 * @api {post} /users/registerUser 注册
 * @apiPermission none
 * @apiGroup login-register
 *
 * @apiParam {String} username 用户名.
 * @apiParam {String} password  密码.
 * @apiParamExample Request-Example: 以下信息已在数据库内创建，可直接用来认证
 * {
 *    "username": "2"
 *    "password": "2"
 * }
 *
 * @apiSuccess {String} status 返回status值给客户端用于验证（0--> 注册成功；1-->用户名已存在;2--->密码为空）
 * 
 * @apiSuccessExample {json} Success-Response :
 * 0-->注册成功
 * {
 *    "status": "0"
 * }
 *
 * @apiErrorExample {json} Error-Response:
 * 1-->用户名已存在
 * {
 *    "status": "1"
 * }
 * 2-->密码为空
 * {
 *    "status": "2"
 * }
 */



/**
 * @api {post} /employee/logout 注销
 * @apiPermission none
 * @apiGroup login-register
 *
 * @apiSuccessExample {json} Success-Response :
 * 0-->注销成功
 * {
 *    "status": "0"
 * }
 *
 */


