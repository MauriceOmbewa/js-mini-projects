function RNA(strand) {
    const complement = {
        'G': 'C',
        'C': 'G',
        'T': 'A',
        'A': 'U'
    };

    return strand.split('').map(base => complement[base] || base).join('');
}

function DNA(strand) {
    const complement = {
        'C': 'G',
        'G': 'C',
        'A': 'T',
        'U': 'A'
    };
    
    return strand.split('').map(base => complement[base] || base).join('');
}

const dna = "ATCG";
const rna = RNA(dna);
console.log(`RNA: ${rna}`); // Output: RNA: UAGC

const rnaStrand = "UAGC";
const dnaStrand = DNA(rnaStrand);
console.log(`DNA: ${dnaStrand}`); // Output: DNA: ATCG
