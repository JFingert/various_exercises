$(document).ready(function() { 
  $("#tour").on("click", "button", function() { 
    $.ajax('/photos.html', {
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});

//equivilent using $.get
$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.get('/photos.html', function(response) {
        $('.photos').html(response).fadeIn();
    });
  });
});

$(document).ready(function() {
  $("#tour").on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: $("london")},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});

$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      }
    });
  });
});
///////////////////

$(document).ready(function() {
  function showPhotos() {
    $(this).find('span').slideToggle();
  }
  $('.photos').on('mouseenter', 'li', showPhotos)
                 .on('mouseleave', 'li', showPhotos);


$(document).ready(function() {
  var el = $("#tour");
  el.on("click", "button", function() {
    $.ajax('/photos.html', {
      data: {location: el.data('location')},
      success: function(response) {
        $('.photos').html(response).fadeIn();
      },
          error: function() {
        $('.photos').html('<li>There was a problem fetching the latest photos. Please try again.</li>');
          },
          timeout: 3000,
          beforeSend: function() {
        $('#tour').addClass('is-fetching')},
      complete: function() {
        $('#tour').removeClass('is-fetching')}
      });
    });
  });
////////////////////

var AppointmentView = Backbone.View.extend({
  render: function(){
    $(this.el).html('<li>' + this.model.get('title') + '</li>');
  }
});

var Appointment = Backbone.Model.extend({
  defaults: function() {
    return {
      title: 'Checkup',
      date: new Date()
    }
  }
});