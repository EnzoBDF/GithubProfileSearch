function getProfile() {
    event.preventDefault();
    const username = document.getElementById('usernameInput').value;
    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const profileInfo = document.getElementById('profileInfo')
            if (username.message === "Not Found") {
                profileInfo.innerHTML = "<p>Not Found</p>"
            } else {
                profileInfo.innerHTML =
                    `<img src="${data.avatar_url}" class="imagem"><br><br><br>
                    <p class="paragrafo"> Nome: ${data.url}</p>
                    <p class="paragrafo"> Link: ${data.html}</p>
                    <p class="paragrafo"> Seguimores: ${data.followers}</p>
                    <p class="paragrafo"> Seguindo: ${data.following}</p>
                    <p class="paragrafo"> Gists: ${data.gists_url}</p>
                    <p class="paragrafo"> Events: ${data.events_url}</p>
                    <p class="paragrafo"> Repositórios: ${data.repos_url}</p>
                    <br>
                    <br>
                    `
            }
        })


}
/* 
function getProfile() {
    event.preventDefault();
    const username = document.getElementById('usernameInput').value;

    fetch(`https://api.github.com/users/${username}`)
        .then(res => res.json())
        .then(data => {
            const profile = document.getElementById('profileInfo');
            if (data.message === 'Not Found') {
                profile.innerHTML = "No profile";
            } else {
                profile.innerHTML = `
            <img src="${data.avatar_url}"><br> Nome: ${data.name}<br>
        
        `
            };
        });
} */