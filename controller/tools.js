const { ObjectId } = require("mongodb");
const { getDb } = require("../utils/dbConnect");

let tools = [
  {
    id: 1,
    name: "roki",
  },
  {
    id: 2,
    name: "moki",
  },
  {
    id: 3,
    name: "toki",
  },
];

module.exports.getAllTools = async (req, res, next) => {
  try {
    const { limit, page } = req.query;

    const db = getDb();
    const tool = await db
      .collection("tools")
      .find({})
      .skip(+page * limit)
      .limit(+limit)
      .toArray();
    res.status(200).json({ success: true, data: tool });
  } catch (error) {
    next(error);
  }
};
module.exports.saveATools = async (req, res, next) => {
  try {
    const db = getDb();
    const tool = req.body;
    const result = await db.collection("tools").insertOne(tool);
    console.log(result);
    if (!result.insertedId) {
      return res
        .status(400)
        .send({ status: false, error: "something is wrong!" });
    }

    res.send({
      success: true,
      message: `Tool added with id: ${result.insertedId}`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports.getIdTools = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, error: "not a valid tool id" });
    }
    const tool = await db.collection("tools").findOne({ _id: ObjectId(id) });
    if (!tool) {
      return res.status(400).json({ success: false, error: "Tool not found" });
    }
    res.status(200).json({ success: true, data: tool });
  } catch (error) {
    next(error);
  }
};
module.exports.updateTools = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, error: "not a valid tool id" });
    }
    const tool = await db
      .collection("tools")
      .updateOne({ _id: ObjectId(id) }, { $set: req.body });
    if (!tool.modifiedCount) {
      return res
        .status(400)
        .json({ success: false, error: "can't update the tools" });
    }
    res.status(200).json({ success: true, data: tool });
  } catch (error) {
    next(error);
  }
};
module.exports.deleteProduct = async (req, res, next) => {
  try {
    const db = getDb();
    const { id } = req.params;
    if (!ObjectId.isValid(id)) {
      return res
        .status(400)
        .json({ success: false, error: "not a valid tool id" });
    }
    const tool = await db.collection("tools").deleteOne({ _id: ObjectId(id) });
    if (!tool.deletedCount) {
      return res
        .status(400)
        .json({
          success: false,
          error: "can't delete the tools. already deleted",
        });
    }
    res.status(200).json({ success: true, data: tool });
  } catch (error) {
    next(error);
  }
};
