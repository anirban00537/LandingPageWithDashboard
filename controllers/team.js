import TeamModel from "../models/TeamModel.js";
export const getTeamContent = async (req, res) => {
  try {
    const Team = await TeamModel.find();

    res.status(200).json(Team);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTeamContent = async (req, res) => {
  const Team = req.body;
  const newTeamContent = new TeamModel(Team);
  try {
    await newTeamContent.save();
    res.status(201).json(newTeamContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

export const deleteTeamPost = async (req, res) => {
  const { id } = req.params;

  await TeamModel.findByIdAndRemove(id);

  res.json({ message: "Post deleted successfully" });
};
