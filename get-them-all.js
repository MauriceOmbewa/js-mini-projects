export const getArchitects = () => {
    const allPeople = Array.from(document.querySelectorAll('a, span')); // Select <a> and other elements (e.g., <span>)
    const architects = allPeople.filter(person => person.tagName === 'A');
    const nonArchitects = allPeople.filter(person => person.tagName !== 'A');
    
    return [architects, nonArchitects];
};


export const getClassical = () => {
    const [architects] = getArchitects(); // Get architects
    const classicalArchitects = architects.filter(architect => architect.classList.contains('classical'));
    const nonClassicalArchitects = architects.filter(architect => !architect.classList.contains('classical'));
    
    return [classicalArchitects, nonClassicalArchitects];
};


export const getActive = () => {
    const [classicalArchitects] = getClassical(); // Get classical architects
    const activeClassicalArchitects = classicalArchitects.filter(architect => architect.classList.contains('active'));
    const nonActiveClassicalArchitects = classicalArchitects.filter(architect => !architect.classList.contains('active'));
    
    return [activeClassicalArchitects, nonActiveClassicalArchitects];
};


export const getBonannoPisano = () => {
    const bonannoPisano = document.getElementById('BonannoPisano'); // Find Bonanno Pisano by ID
    const [activeClassicalArchitects] = getActive(); // Get active classical architects
    const remainingArchitects = activeClassicalArchitects.filter(architect => architect.id !== 'BonannoPisano'); // Exclude Bonanno Pisano
    
    return [bonannoPisano, remainingArchitects];
};

