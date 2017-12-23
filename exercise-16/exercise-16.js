//program cerita (bukan petualangan) interaktif
//story taken from ten night of dreams (yuume juuya) by soseki natsume (1908)

var opening = ['Cerita interaktif', 'Taken from ten night of dreams (yuume juuya) by soseki natsume (1908)', '.....' , 'chapter 3 : Grudge', 'This is the dream i dreamed.', 'I was walking, with six-year-old child on my back.', 'I was sure he was my son, but oddly enough, I did not know why he was blind and bald-headed like a bronze Priest'];

for (i = 0; i <opening.length; i++) {
  alert(opening[i]);
}

function randomScenario(number) {

  return Math.round(Math.random() * number)
}

var choice1 = ['I asked him when he had become blind', "i don't want to ask him at first, but in the end, i still asked him when he had become blind"];

alert(choice1[randomScenario(choice1.length - 1)] + ' and he answered that he had been so for a long time');

var storyScenario = ['His voice was childlike, but he spoke like a mature man with no respect to his father.', 'We were on a long footpath crossing a field of young rice. sometimes a snowy heron would glance against the darkness', '"We have come to the rice field, i guess," the boy on my back said', '"How do you know ?" I asked him, turning my head back towards him', '"I know by the heron shriek."', "Then a heron's cry sounded twice just as he had said.", 'I began to feel afraid of him even though he was my son. with this weird creature on my back, i felt something terrible was about to happen to me. I looked around for some good place to throw this creature away'];

for (j = 0; j < storyScenario.length; j++) {
  alert(storyScenario[j]);
}

var placeToThrow = ['a big wood', 'a big rock', 'a well'];

var choice2 = ["What was i'm thinking ? he's still my own son. to think that i was about to throw away my own son !,", "There was " + placeToThrow[Math.round(Math.random() * 2)] + " ahead in the darkness. I thought it might be a good place to do that,"];

alert(choice2[randomScenario(choice2.length - 1)] );

var storyPartThree = ['And then i heard a snicker from behind me.', '"Why are you laughing ?" I asked him. There was no answer to my question. Instead he said, "Am i heavy for you, father ?"', 'I answered no. And he said, "I think I will be heavier soon."', 'I kept walking, aiming worldlessly at the woods. The path kept winding through the fields, so it was difficult to get out. After a while I came to the point where the lane forked. I stopped there to take a little rest.', '"you better go to the left," the boy told me. I looked over to the left and saw the woods i was aiming at casting dark shadows over us. I hesistated a little.', '"What are you waiting for ?" the boy urged me again.'];

for (k = 0; k < storyPartThree.length; k++) {
  alert(storyPartThree[k]);
}

var choice3 = '';

function laneForked() {
  var leftRight = Math.random() * 2;
  if (leftRight === 0) {
    choice3 = 'I reluctantly took the way in the direction of the woods';
  } else if (leftRight > 0) {
    choice3 = "At first, i don't want to follow him, but in the end, I still reluctantly took the way in the direction of the wood ";
  }

  return choice3;
}

alert(laneForked());

var storyLastPart = ['I kept walking on and on along the lane leading to the woods, wondering how he could know everything in spite of his blindness.', '"I hate being blind. It so troublesome," he said at my back', '"That why i carry you on my back. That should make you feel better."', "I became disgusted with this boy and hurried to leave him in the woods as soon as possible", '"Why do you ask ? you know very well," the child answered scornfully. Then i felt i knew something, though I do not quite sure what it was. And i felt I knew it had actually happened on this sort on night. A little further might lead me to more certainity. But something warned me that I might be better off not knowing what it was. I had to get rid of him as soon as possible before I found out. I quickened my pace more.', 'it had been raining for quite some time. With each step, it got darker. I tried to concentrate on going forward. The boy struck to my back was reflecting, like a mirror, every tiny thing in my past, present, and future. And he was my own child, who was blind, I could not stand it anymore', 'Just then i heard, "Here! here, right at the bottom of that cedar tree!"', 'His voice sounded very clearly in the rain. I stopped unconciously. I had come into the woods before i knew it. There was something black about six feet ahead. It looked like a cedar tree, as he had said.', '"Father you did it at the bottom of that cedar tree, you remmember ?"', '"Yes, i did it there," I answered in spite of myself.', '"It was in the 5th year of bunka (1808), the year of dragon was it ?" I thought he was right.', '"So it is just 100 years since you killed me here!"', 'As soon as i heard these words, i knew suddenly I had killed a blind man on this sort of night at the bottom of that cedar tree 100 years ago, in the 5th years of bunka, year of the dragon.', 'And when I realized for the first time that i was a murderer, suddenly the little one on my back became much heavier than before, like a jizo stone child....'];

for (l = 0; l < storyLastPart.length; l++) {
  alert(storyLastPart[l]);
}


/* https://books.google.co.id/books?id=Wb6rTii5a9EC&pg=PA13&lpg=PA13&dq=soseki+natsume+ten+nights+of+dreams+jizo+stone+child&source=bl&ots=o2VhjVJFIV&sig=iVc8yPYXaWrb7Rw9D-622kpBSWI&hl=en&sa=X&ved=0ahUKEwjQm67l8J3YAhWJ6Y8KHXz8Bi0Q6AEINTAB#v=onepage&q=soseki%20natsume%20ten%20nights%20of%20dreams%20jizo%20stone%20child&f=false */
