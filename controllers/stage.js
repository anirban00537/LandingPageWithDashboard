import StageModel from "../models/StageModel.js";

export const getStageContent = async (req, res) => {
  try {
    const Stage = await StageModel.find({ stageId: 1234 });

    res.status(200).json(Stage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createStageContent = async (req, res) => {
  const Stage = req.body;
  const newStageContent = new StageModel(Stage);
  try {
    await newStageContent.save();
    res.status(201).json(newStageContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

export const updateStageContent = async (req, res) => {
  //   const { StageId } = req.params;
  const post = req.body;

  const postMessages = await StageModel.findOneAndUpdate(
    { stageId: 1234 },
    post,
    {
      new: true,
    }
  );
  res.json(postMessages);
};
