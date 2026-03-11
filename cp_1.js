// Select elements
const form = document.getElementById('feedback-form');
const comments = document.getElementById('comments');
const charCount = document.getElementById('char-count');
const feedbackDisplay = document.getElementById('feedback-display');
const validationMessage = document.getElementById('validation-message');
// Character count in real time
comments.addEventListener('input', function(){
    let length = comments.value.length;
    charCount.textContent = length + ' characters';
});
// EVENT DELEGATION for mouseover and mouseout
form.addEventListener('mouseover', function(e){
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA'){
        let tooltip = e.target.nextElementSibling;
        if(tooltip && tooltip.classList.contains('tooltip')){
            tooltip.style.display = 'block';
        }
    }
});
form.addEventListener('mouseout', function(e){
    if(e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA'){
        let tooltip = e.target.nextElementSibling;
        if(tooltip && tooltip.classList.contains('tooltip')){
            tooltip.style.display = 'none';
        }
    }
});
// FORM VALIDATION
form.addEventListener('submit', function(e){
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const feedback = comments.value.trim();
    if(name === '' || email === '' || feedback === ''){
        validationMessage.textContent = 'Please fill in all fields.';
        return;
    }
    validationMessage.textContent = '';
    // Create feedback entry
    const entry = document.createElement('div');
    entry.classList.add('feedback-entry');
    entry.innerHTML =
    '<strong>' + name + '</strong> (' + email + ')<br>' +
    comment;
    feedbackDisplay.appendChild(entry);
    // Reset form
    form.reset();
    charCount.textContent = '0 characters';
});
// STOP PROPAGATION example
document.body.addEventListener('click', function(){
    console.log('Background clicked');
});
form.addEventListener('click', function(e){
    e.stopPropagation();
});
