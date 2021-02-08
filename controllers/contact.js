import ContactModel from "../models/ContactModel.js";

export const getContactContent = async (req, res) => {
  try {
    const Contact = await ContactModel.find({ contactId: 1234 });

    res.status(200).json(Contact);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createContactContent = async (req, res) => {
  const Contact = req.body;
  const newContactContent = new ContactModel(Contact);
  try {
    await newContactContent.save();
    res.status(201).json(newContactContent);
  } catch (error) {
    res.status(409).send(error.message);
  }
};

export const updateContactContent = async (req, res) => {
  //   const { ContactId } = req.params;
  const post = req.body;

  const postMessages = await ContactModel.findOneAndUpdate(
    { contactId: 1234 },
    post,
    {
      new: true,
    }
  );
  res.json(postMessages);
};
