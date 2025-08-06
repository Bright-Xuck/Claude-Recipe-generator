# Claude-Recipe-generator

🧑‍🍳 Chef Claude
Chef Claude is my first React project — a simple app that takes your ingredients and generates an AI-powered recipe suggestion.

Chef Claude is a beginner-friendly React app that helps users generate recipe ideas based on the ingredients they have. Users can add ingredients through a form, and once enough items are added, the app uses AI to suggest a full recipe. This project was built to explore React fundamentals like components, props, and state

📌 Description
Users can type in ingredients, and once they’ve added at least 4, the app sends them to an AI model (via Hugging Face) to generate a recipe. The output is rendered in clean Markdown format.

⚙️ Key Features
🧠 AI Integration — Uses getRecipeFromMistral() to fetch a recipe from a Hugging Face model.

🧩 React Fundamentals — Built entirely with React using components, props, and useState().

🔄 Conditional Rendering — Only shows the recipe button after 3+ ingredients are added.

🧾 Markdown Display — Renders the AI’s response with react-markdown.

🛠️ Run Locally
bash
Copy
Edit
git clone https://github.com/Bright-Xuck/Claude-Recipe-generator.git
cd chef-claude
npm install
npm start
You’ll also need to configure getRecipeFromMistral() in ai.js to connect to your Hugging Face endpoint or other AI API.

🧪 What I Learned
My first hands-on experience with React!

Learned how to manage state, pass props, render conditionally, and fetch data from an AI API.
