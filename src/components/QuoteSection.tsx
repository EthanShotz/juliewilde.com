import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

const quotes = [
  { text: "Stop hating yourself for everything you aren't. Start loving yourself for everything that you are.", author: null },
  { text: "When we can talk about our feelings, they become less overwhelming, less upsetting, and less scary.", author: "Fred Rogers" },
  { text: "Don't close the book when bad things happen in our life, just turn the page and begin a new chapter.", author: null },
  { text: "When little people are overwhelmed by big emotions, it's our job to share our calm, not join their chaos.", author: "L.R. Knost" },
  { text: "Courage doesn't always roar. Sometimes courage is the quiet voice at the end of the day, saying, 'I will try again tomorrow.'", author: "Mary Anne Radmacher" },
  { text: "Run when you can, walk when you have to, crawl if you must, just never give up.", author: "Dean Karnazes" },
  { text: "Strength doesn't come from what you can do. It comes from overcoming the things you once thought you couldn't.", author: "Rikki Rogers" },
  { text: "So often, children are punished for being human. They are not allowed to have grumpy moods, bad days, disrespectful tones, or bad attitudes, yet we adults have them all the time. None of us are perfect. We must stop holding our children to a higher standard of perfection than we can attain ourselves.", author: "Rebecca Eanes" },
  { text: "Your feelings are your deep inside signals of your soul, and they need you to listen to them.", author: null },
  { text: "Remember how far you've come, not just how far you have to go. You are not where you want to be, but neither are you where you used to be.", author: "Rick Warren" },
  { text: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.", author: "L.B. Johnson" },
  { text: "When the world says, 'give up,' Hope whispers, 'try it one more time.'", author: null },
  { text: "Fall in love with taking care of yourself. Fall in love with the path of deep healing. Fall in love with becoming the best version of yourself but with patience, with compassion and respect to your own journey.", author: "S. McNutt" },
  { text: "Breathe, darling. This is just a chapter, not your whole story.", author: "S.C. Lourie" },
  { text: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.", author: "Martin Luther King, Jr." },
  { text: "It's okay to be brave and afraid at the same time.", author: null },
  { text: "To that one soul reading this: I know you're tired, you're fed up, you're close to breaking but there's strength within you, even when you feel weak. Keep fighting.", author: null },
  { text: "Courage doesn't mean you don't get afraid. Courage means you don't let fear stop you.", author: null },
  { text: "Even if we disagree about everything, we can still be kind to each other.", author: null },
  { text: "I have decided to stick with love. Hate is too great a burden to bear.", author: "Martin Luther King, Jr." },
  { text: "You can't go back and change the beginning, but you can start where you are and change the ending.", author: "C.S. Lewis" },
  { text: "Healing doesn't mean the damage never existed. It means the damage no longer controls our lives.", author: null },
  { text: "Sometimes you just need to talk about something - not to get sympathy or help but just to kill its power by allowing the truth of things to hit the air.", author: "Karen Salmansohn" },
  { text: "No one can go back in time to change what has happened. So work on your present to make yourself a wonderful future.", author: null },
  { text: "Hope is being able to see the light despite all the darkness.", author: "Desmond Tutu" },
  { text: "When God pushes you to the edge of difficulty trust Him fully because two things can happen. Either He'll catch you when you fall, or He will teach you how to fly.", author: null },
  { text: "Self-esteem is the ability to see yourself as a flawed individual and still hold yourself in high regard.", author: "Esther Perel" },
  { text: "Sometimes the smallest step in the right direction ends up being the biggest step of your life. Tip toe if you must, but take the step.", author: null },
  { text: "If you can't fly then run, if you can't walk then crawl, but whatever you do you have to keep moving forward.", author: "Martin Luther King Jr." },
  { text: "Your feelings are your signals of deep truth inside of your soul, they're the language of your soul, and they need you to listen to them.", author: null }
];

const QuoteSection = () => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <section className="bg-[#ffd166] py-8 md:py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <QuoteIcon 
            className="absolute -top-4 -left-4 w-12 h-12 text-primary-navy/10" 
            style={{ transform: 'scale(-1, 1)' }}
          />
          <QuoteIcon 
            className="absolute -bottom-4 -right-4 w-12 h-12 text-primary-navy/10"
          />
          <div className="text-center relative z-10">
            <p className="text-xl md:text-2xl font-serif text-primary-navy mb-4 leading-relaxed">
              {randomQuote.text}
            </p>
            {randomQuote.author && (
              <p className="text-lg text-primary-navy/80 font-medium">
                — {randomQuote.author}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;