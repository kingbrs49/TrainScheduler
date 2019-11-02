// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoIvFneuQ6nC8jhBp6r-8tGv-mbe8GnMw",
    authDomain: "horoscope-generator.firebaseapp.com",
    databaseURL: "https://horoscope-generator.firebaseio.com",
    projectId: "horoscope-generator",
    storageBucket: "horoscope-generator.appspot.com",
    messagingSenderId: "786467389755",
    appId: "1:786467389755:web:2cdc8f7b3c36109198f71e",
    measurementId: "G-78T2XMGS16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

$("#input-birthday").on("click", function (event) {
    event.preventDefault();
    var name = $("#name-input").val();
    var age = $("#age-input").val();
    var birthday = $("#birthday").val();
    console.log(name);
    console.log(age);
    console.log(birthday)


    birthday = moment(birthday).format('l');

    var newObj = getHoroscopeSign(birthday)

    database.ref().push({
        "name": name,
        "age": age,
        "birthday": birthday,
        "sign": newObj.sign,
        "horoscope": newObj.horoscope
    });
});

var signs = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"]



// Returns corresponding sign by month
// expects yyyy-mm-dd
function getHoroscopeSign(birthday) {

    console.log(birthday);
    var newArray = birthday.split("/");
    var sign = "";
    console.log(newArray);

    var newObj = {};


    //a serires of checks for the date;
    if (newArray[0] === "1") {
        newObj.sign = "Aquarius";
        newObj.horoscope = "You wanna know how I got these scars? My father was a drinker. And a fiend. So one night, he goes off crazier than usual. Mommy gets the kitchen knife to defend herself. He doesn't like that. Not ... one ... bit. So, me watching, he takes the knife to her, laughing while he does it. He looks at me, and he says, 'Why so serious?!' He comes at me with the knife. 'Why so serious? Let's put a smile on that face!' And ... Why so serious?"
    }
    if (newArray[0] === "2") {
        newObj.sign = "Pisces";
        newObj.horoscope = "Get busy living or get busy dying. That's goddamn right. For the second time in my life, I'm guilty of committing a crime. Parole violation. Course, I doubt they're going to throw up any road blocks for that. Not for an old crook like me. I find I'm so excited I can barely sit still or hold a thought in my head. I think it's the excitement only a free man can feel. A free man at the start of a long journey whose conclusion is uncertain. I hope I can make it across the border. I hope to see my friend and shake his hand. I hope the Pacific is as blue as it has been in my dreams. I hope."
    }
    if (newArray[0] === "3") {
        newObj.sign = "Aries";
        newObj.horoscope = "The world ain't all sunshine and rainbows. It's a very mean and nasty place and I don't care how tough you are it will beat you to your knees and keep you there permanently if you let it. You, me, or nobody is gonna hit as hard as life. But it ain't about how hard ya hit. It's about how hard you can get it and keep moving forward. How much you can take and keep moving forward. That's how winning is done! Cause if you're willing to go through all the battling you got to go through to get where you want to get, who's got the right to stop you?"
    }
    if (newArray[0] === "4") {
        newObj.sign = "Taurus";
        newObj.horoscope = "You can't handle the truth! Son, we live in a world that has walls. And those walls have to be guarded by men with guns. Who's going to do it? You? You, Lt. Weinberg? I have a greater responsibility than you can possibly fathom. You weep for Santiago and you curse the Marines. You have that luxury. You have the luxury of not knowing what I know: that Santiago's death, while tragic, probably saved lives. And my existence, while grotesque and incomprehensible to you, saves lives. You don't want the truth. Because deep down, in places you don't talk about at parties, you WANT me on that wall. You NEED me on that wall. We use words like 'Honor', 'Code', 'Loyalty'. We use these words as the backbone to a life spent defending something. You use them as a punchline. I have neither the time nor the inclination to explain myself to a man who rises and sleeps under the blanket of the very freedom I provide, then questions the manner in which I provide it! I'd rather you just said 'thank you,' and went on your way. Otherwise, I suggest you pick up a weapon and stand a post. Either way, I don't give a DAMN what you think you're entitled to!"
    }
    if (newArray[0] === "5") {
        newObj.sign = "Gemini";
        newObj.horoscope = "The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who attempt to poison and destroy my brothers. And you will know my name is the Lord when I lay my vengeance upon you."
    }
    if (newArray[0] === "6") {
        newObj.sign = "Cancer";
        newObj.horoscope = "I don't know who you are. I don't know what you want. If you are looking for ransom, I can tell you I don't have money. But what I do have are a very particular set of skills; skills I have acquired over a very long career. Skills that make me a nightmare for people like you. If you let my daughter go now, that'll be the end of it. I will not look for you, I will not pursue you. But if you don't, I will look for you, I will find you, and I will kill you."
    }
    if (newArray[0] === "7") {
        newObj.sign = "Leo";
        newObj.horoscope = "Hold your ground, hold your ground! Sons of Gondor, of Rohan, my brothers! I see in your eyes the same fear that would take the heart of me. A day may come when the courage of men fails, when we forsake our friends and break all bonds of fellowship, but it is not this day. An hour of wolves and shattered shields, when the age of men comes crashing down! But it is not this day! This day we fight! By all that you hold dear on this good Earth, I bid you stand, Men of the West!"
    }
    if (newArray[0] === "8") {
        newObj.sign = "Virgo";
        newObj.horoscope = "That you are a slave, Neo. Like everyone else, you were born into bondage, born inside a prison that you cannot smell, taste, or touch. A prison for your mind. Unfortunately, no one can be told what the Matrix is. You have to see it for yourself. This is your last chance. After this, there is no turning back. You take the blue pill and the story ends. You wake in your bed and believe whatever you want to believe. You take the red pill and you stay in Wonderland and I show you how deep the rabbit-hole goes. Remember: all I am offering is the truth. Nothing more."
    }
    if (newArray[0] === "9") {
        newObj.sign = "Libra";
        newObj.horoscope = "The inches we need are everywhere around us. They’re in every break of the game, every minute, every second. On this team, we fight for that inch. On this team, we tear ourselves and everyone else around us to pieces for that inch. We claw with our fingernails for that inch, because we know when we add up all those inches that’s gonna make the f---in' difference between winning and losing! Between livin' and dyin'!"
    }
    if (newArray[0] === "10") {
        newObj.sign = "Scorpio";
        newObj.horoscope = "We've got serious problems, and we need serious people. And if you want to talk about character, Bob, you'd better come at me with more than a burning flag and a membership card. If you want to talk about character and American values, fine. Just tell me where and when, and I'll show up. This a time for serious people, Bob, and your fifteen minutes are up. My name is Andrew Shepherd and I AM the President."
    }
    if (newArray[0] === "11") {
        newObj.sign = "Sagittarius";
        newObj.horoscope = "Rehabilitated? Well, now let me see. You know, I don't have any idea what that means. I know what you think it means, sonny. To me it's just a made up word. A politician's word, so young fellas like yourself can wear a suit and a tie, and have a job. What do you really want to know? Am I sorry for what I did? There's not a day goes by I don't feel regret. Not because I'm in here, or because you think I should. I look back on the way I was then: a young, stupid kid who committed that terrible crime. I want to talk to him. I want to try and talk some sense to him, tell him the way things are. But I can't. That kid's long gone and this old man is all that's left. I got to live with that. Rehabilitated? It's just a bulls--t word. So you go on and stamp your form, sonny, and stop wasting my time. Because to tell you the truth, I don't give a s--t."
    }
    if (newArray[0] === "12") {
        newObj.sign = "Capricorn";
        newObj.horoscope = "You just couldn’t let me go could you? This is what happens when an unstoppable force meets an immovable object. You truly are incorruptible aren’t you? You won’t kill me out of some misplaced sense of self-righteousness, and I won’t kill you, because you’re just too much fun. I think you and I are destined to do this forever."
    }


    return newObj;

}

database.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val().sign)
    $("#h-name").text(childSnapshot.val().name);
    $("#h-birthday").text(childSnapshot.val().birthday);
    $("#h-sign-display").text(childSnapshot.val().sign);
    $("#horoscope-description").text(childSnapshot.val().horoscope)
})
