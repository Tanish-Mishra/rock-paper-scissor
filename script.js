     
             //  Rules Logic 
let rules = document.querySelector('.rules_btn');
let closeRules = document.querySelector('.close_btn');
function showRules() {
   document.querySelector('.rules').classList.toggle('rules_active');
}
function hideRules() {
    document.querySelector('.rules').classList.remove('rules_active');
}
rules.addEventListener('click',showRules);
closeRules.addEventListener('click',hideRules);