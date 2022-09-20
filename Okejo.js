/**
 * @api {get} {/tools All tools}
 * @apiDescription Get the all tools
 * @apiPermission admin
 *
 * @apiHeader {string} Authorization User's Access token
 * @apiParam {Number 10 to 100} limit The maximum number of 10 user's per page
 * @apiSuccess {Object[]} all the tools
 *
 * @apiError {unAuthorizedError:- 401} Only authenticate user can access the data
 * @apiError  {Forbidden 403} forbidden only admin can access the data
 *
 */

/**
 * @api {post} {/tools All tools}
 * @apiDescription Get the all tools
 * @apiPermission admin
 *
 * @apiHeader {string} Authorization User's Access token
 * @apiParam {Number 10 to 100} limit The maximum number of 10 user's per page
 * @apiSuccess {Object[]} all the tools
 *
 * @apiError {unAuthorizedError:- 401} Only authenticate user can access the data
 * @apiError  {Forbidden 403} forbidden only admin can access the data
 */

// .get("/:id", (req, res) => {
//   /**
//    * @api {get the single tools}
//    * @apiDescription Get the all tools
//    * @apiPermission admin
//    *
//    * @apiHeader {string} Authorization User's Access token
//    * @apiParam {Number 10 to 100} limit The maximum number of 10 user's per page
//    * @apiSuccess {Object[]} all the tools
//    *
//    * @apiError {unAuthorizedError:- 401} Only authenticate user can access the data
//    * @apiError  {Forbidden 403} forbidden only admin can access the data
//    */
//   res.send("product id finding successfully");
// })
// .delete("/:id", (req, res) => {
//   /**
//    * @api {delete the single product}
//    * @apiDescription Get the all tools
//    * @apiPermission admin
//    *
//    * @apiHeader {string} Authorization User's Access token
//    * @apiParam {Number 10 to 100} limit The maximum number of 10 user's per page
//    * @apiSuccess {Object[]} all the tools
//    *
//    * @apiError {unAuthorizedError:- 401} Only authenticate user can access the data
//    * @apiError  {Forbidden 403} forbidden only admin can access the data
//    */
//   res.send("delete product successfully");
// });
/* router.get("/", (req, res) => {
  res.send("Hallo bangladesh");
}); */

// router.route("/").get(allTools.getAllTools).post(allTools.saveATools);

