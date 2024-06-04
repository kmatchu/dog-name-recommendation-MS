
import express from 'express';
import 'dotenv/config';
import cors from 'cors';
// Cors implementation based on tutorial accessed 5/20/24 at:
// https://dev.to/speaklouder/how-to-configure-cors-in-nodejs-with-express-11h

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

const corsOptions = {
    origin: "http://localhost:8000"
}

app.use(cors(corsOptions))

app.get("/names", (req,res) => {
    console.log("Received a Request")
    const name_type = req.query.name_type
    famous_dog_name_array = [
        "Terry \n Toto - the dog from Wizard of Oz - was played by a Cairn Terrier named Terry. \n The name comes from the French Norman Thierry.",
        "Fido \n Abraham Lincoln's dog was named Fido. \n 'Fido' comes from Latin, meaning 'Trust' or 'Faithful.'",
        "Rover \n George Washington had a hound named Lady Rover. \n Originally an old English occupational surname for a roofer."
    ]
    popular_dog_names_array = [
        "Max \n The Jack Russell terrier from The Mask movie was played by a dog named Max. \n Max was the third most popular dog name in the US in 2023.",
        "Bella \n Likely popularized by the main character of the Twilight Series. \n Bella is the most popular dog name in the US in 2023.",
        "Charlie \n From a German origin meaning 'Free Man' or 'Warrior.' \n Charlie was the most popular dog name in Nebraska and North Dakota in 2023."
    ]
    if (name_type == "famous"){
        random_famous_index = Math.floor(Math.random() * famous_dog_name_array.length)
        res.send(famous_dog_name_array[random_famous_index])
    } else if (name_type == "popular"){
        random_popular_index = Math.floor(Math.random() * popular_dog_names_array.length)
        res.send(popular_dog_names_array[random_popular_index])
    } else {
        res.send("Error: Please make sure to request with an approved application.")
    }

})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});