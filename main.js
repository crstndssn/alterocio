const synth = new Tone.Synth();
synth.toMaster();

// synth.triggerAttackRelease('c4', '8n');
const notes = [
    'c4', 'd4', 'e4'
    // 'f4', 'g4', 'a4', 'b4',
    // 'a4', 'g4', 'f4', 'e4', 'd4', 'c4'
];

var index = 0;

Tone.Transport.scheduleRepeat(time => {
    repeat(time); 
}, '4n');

console.log(Tone.Transport.bpm.value);

function repeat(time) {
    let note = notes[index % notes.length];
    synth.triggerAttackRelease(note, '4n', time);
    index++;
}

Tone.Transport.start();

setTimeout(() => {
    Tone.Transport.stop();
}, 10000)
