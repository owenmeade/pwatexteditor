
const butInstall = document.getElementById('buttonInstall');
let defPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';
    defPrompt = event;
});

butInstall.addEventListener('click', async () => {
    if (defPrompt) {
        defPrompt.prompt();
        defPrompt.userChoice.then((choiceRes) => {
            if (choiceRes.outcome === 'accepted') {
                butInstall.setAttribute('disabled', true);
                butInstall.textContent = 'Successfully Installed';
            } else {
                console.log('Did not install')
            }
        })
    }
});

window.addEventListener('appinstalled', (event) => {
    butInstall.textContent = 'App Installed';
    console.log('App Installed', event);
});
