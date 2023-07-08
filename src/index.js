const baseURL = `http://localhost:3000/ramens`

fetch(baseURL)
      .then(res => {
        return res.json();
      })
      .then(function (ramenData) {
        var ramenMenu = document.getElementById('ramen-menu');
        ramenData.forEach(function (ramen) {
          var img = document.createElement('img');
          img.src = ramen.image;
          img.alt = ramen.name;
          img.addEventListener('click', function () {
            displayDetails(ramen);
          });
          ramenMenu.appendChild(img);
        });
      });
      function displayDetails(ramen) {
        var detailImage = document.querySelector('#ramen-detail .detail-image');
        var name = document.querySelector('#ramen-detail .name');
        var restaurant = document.querySelector('#ramen-detail .restaurant');
        var ratings = document.getElementById('rating-display');
        var comment = document.getElementById('comment-display');
        detailImage.src = ramen.image;
        detailImage.alt = ramen.name;
        name.textContent = ramen.name;
        restaurant.textContent = ramen.restaurant;
        ratings.textContent = ramen.rating;
        comment.textContent = ramen.comment;
    }
    var newRamenForm = document.getElementById('new-ramen');
    newRamenForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      var ramenName = document.getElementById('new-name').value;
      var restaurant = document.getElementById('new-restaurant').value;
      var ramenImage = document.getElementById('new-image').value;
      var ramenRating = document.getElementById('new-rating').value;
      var ramenComment = document.getElementById('new-comment').value;
  
      var newRamen = {
        name: ramenName,
        restaurant: restaurant,
        image: ramenImage,
        rating: ramenRating,
        comment: ramenComment
      };
  
      var ramenMenu = document.getElementById('ramen-menu');
      var img = document.createElement('img');
      img.src = newRamen.image;
      img.alt = newRamen.name;
      img.addEventListener('click', function () {
        displayDetails(newRamen);
      });
      ramenMenu.appendChild(img);
  
      newRamenForm.reset();
    });
