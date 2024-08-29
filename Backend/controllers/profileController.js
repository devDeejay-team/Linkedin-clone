const { db } = require('../config/firebaseConfig');
const OpenAI = require('openai');

const openai = new OpenAI({
  apiKey:process.env.OPENAI_API_KEY
});

const sendToChatGPT = async (text) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {role: 'user', content:`Generate a LinkedIn profile based on the following information:
    ${text}

    Please provide a complete LinkedIn profile in the following JSON format:

    {{"personal_info": {{"first_name": "","last_name": "","email": "","location": "","headline": ""}},
        "about": "",
        "experience": [{{"designation": "","company": "","duration": "","location": "","description": "","job type": ""}}],
        "education": [ {{"institution": "","degree": "","graduation_year": ""}}],
        "certifications": [{{"Certificate name": "","issued by": "","issued date": ""}}],
        "skills": [],
        "languages": []
    }}

    Ensure all fields are filled based on the information provided in the input text.
    Follow the json for that i provided you, make linkedin profile in same structure as provided json.
    If any information is missing, use reasonable assumptions or leave the field empty.
    Make the profile compelling, achievement-oriented, and attractive to recruiters.
    `}
      ],
    });

    return JSON.parse(response.choices[0].message.content.trim());
  } catch (error) {
    console.error(error);
    throw new Error('Error communicating with ChatGPT');
  }
};

const updateProfile = async (req, res) => {
  const { profileData } = req.body;
  const userId = req.user.uid;

  try {
    const userProfileRef = db.collection('profiles').doc(userId);
    const userProfile = await userProfileRef.get();

    let combinedData = profileData;

    if (userProfile.exists) {
      const previousData = userProfile.data().profileData;
      combinedData = `${previousData}\n\nNew Info: ${profileData}`;
    }

    const generated_profile = await sendToChatGPT(combinedData);

    if (userProfile.exists) {
      await userProfileRef.update({
        profileData: generated_profile,
        updatedAt: new Date()
      });
    } else {
      await userProfileRef.set({
        profileData: generated_profile,
        createdAt: new Date()
      });
    }
    res.status(200).json({ message: 'Profile updated successfully!',generated_profile });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

const getProfile = async (req, res) => {
  const userId = req.user.uid;

  try {
    const userProfileRef = db.collection('profiles').doc(userId);
    const userProfile = await userProfileRef.get();

    if (!userProfile.exists) {
      return res.status(404).json({ message: 'Profile not found' });
    }

    res.status(200).json(userProfile.data());
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: error.message });
  }
};

module.exports = { updateProfile, getProfile };
