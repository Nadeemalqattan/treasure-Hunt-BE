module.exports = (sequelize, DataTypes) => {
  const Thing = sequelize.define(
    "Thing",
    {
      name: { type: DataTypes.STRING, allowNull: false },
      description: { type: DataTypes.STRING },
      image: { type: DataTypes.STRING },
      isTreasure: { type: DataTypes.BOOLEAN },
    },
    { timestamps: false }
  );
  return Thing;
};
