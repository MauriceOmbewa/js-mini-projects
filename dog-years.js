function dogYears(planet, age){
    if (planet === 'earth'){
        const ans = age / 31557600
        return Number((ans * 7).toFixed(2))
    } else if (planet === 'mercury'){
        const temp = age / 31557600
        const temp2 = temp / 0.2408467
        return Number((temp2 * 7).toFixed(2))
    }  else if (planet === 'venus'){
        const temp = age / 31557600
        const temp2 = temp / 0.61519726
        return Number((temp2 * 7).toFixed(2))
    } else if (planet === 'mars'){
        const temp = age / 31557600
        const temp2 = temp / 1.8808158
        return Number((temp2 * 7).toFixed(2))
    } else if (planet === 'jupiter'){
        const temp = age / 31557600
        const temp2 = temp / 11.862615
        return Number((temp2 * 7).toFixed(2))
    } else if (planet === 'saturn'){
        const temp = age / 31557600
        const temp2 = temp / 29.447498
        return Number((temp2 * 7).toFixed(2))
    } else if (planet === 'uranus'){
        const temp = age / 31557600
        const temp2 = temp / 84.016846
        return Number((temp2 * 7).toFixed(2))
    } else if (planet === 'neptune'){
        const temp = age / 31557600
        const temp2 = temp / 164.79132
        return Number((temp2 * 7).toFixed(2))
    }
}
