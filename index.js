const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search states.json and filter it
const searchStates = async searchText => {
    const res = await fetch('./capital.json');
    const states = await res.json();

    //console.log(res);
    // Get matches to current text input
    let matches = states.filter(state => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return state.name.match(regex);
    });

    if (searchText.length === 0) {
        matches = [];
        matchList.innerHTML = '';
    }
     //console.log(matches);
    outputHtml(matches);
}

// if (searchText.length === 0) {
//     matches = [];
//     outputHtml(matches);
// }
// show results in Html
const outputHtml = matches => {
    if (matches.length > 0) {
        const html = matches.map(
            match => `
            <div class = "card card-body mb-1">
              <h4>${match.name}</h4>
            </div>
            `
        ).join('');
       // console.log(html); 
        matchList.innerHTML = html;
    }
}

search.addEventListener('input', () => searchStates(search.value));