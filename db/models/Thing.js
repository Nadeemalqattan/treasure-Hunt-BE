module.exports = (sequelize, DataTypes) => {
  const Thing = sequelize.define(
    "Thing",
    {
      name: {
        type: DataTypes.STRING,
        unique: {
          args: true,
          msg: "Name must be unique",
        },
        allowNull: false,
        validate: {
          len: {
            args: [2, 20],
            msg: "Name length must be between 2 and 20 characters",
          },
        },
      },
      isTreasure: { type: DataTypes.BOOLEAN, defaultValue: false },
    },
    { timestamps: false }
  );
  return Thing;
};
