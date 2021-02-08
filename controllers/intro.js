import IntroModel from "../models/IntroModel.js";

export const getIntroContent = async (req, res) => {
  try {
    const Intro = await IntroModel.find({ introId: 1234 });

    res.status(200).json(Intro);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createIntroContent = async (req, res) => {
  const Intro = req.body;
  const newIntroContent = new IntroModel(Intro);
  try {
    await newIntroContent.save();
    res.status(201).json(newIntroContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

export const updateIntroContent = async (req, res) => {
  //   const { IntroId } = req.params;
  const post = req.body;

  const postMessages = await IntroModel.findOneAndUpdate(
    { introId: 1234 },
    post,
    {
      new: true,
    }
  );
  res.json(postMessages);
};
