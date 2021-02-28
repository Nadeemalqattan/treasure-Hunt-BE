const { Thing } = require("../db/models");

exports.fetchThing = async (thingId, next) => {
  try {
    const foundThing = await Thing.findByPk(thingId);
    return foundThing;
  } catch (error) {
    next(error);
  }
};

exports.garbageList = async (req, res, next) => {
  const garbages = await Thing.findAll({
    where: {
      isTreasure: false,
    },
  });
  res.status(200).json(garbages);
};

exports.treasureList = async (req, res, next) => {
  const treasures = await Thing.findAll({
    where: {
      isTreasure: true,
    },
  });
  res.status(200).json(treasures);
};

exports.thingCreate = async (req, res, next) => {
  try {
    const newThing = await Thing.create(req.body);
    res.status(201).json(newThing);
  } catch (error) {
    next(error);
  }
};

exports.thingUpdate = async (req, res, next) => {
  const updatedThing = await req.thing.update(req.body);
  res.status(200).json(updatedThing);
};

exports.thingDelete = async (req, res, next) => {
  await req.thing.destroy();
  res.status(204).end();
};
