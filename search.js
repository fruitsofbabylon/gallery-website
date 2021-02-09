document.getElementById('search-button').addEventListener('click',function() {
  let x = document.getElementById('search-box');
  if (x.classList.contains('animate')) {
    document.getElementById('search-box').classList.remove('animate');
  } else {
    document.getElementById('search-box').classList.add('animate');
  }
});