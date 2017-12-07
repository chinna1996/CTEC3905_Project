//Responsee eside nav
  $('.aside-nav > ul > li ul').each(function(index, element) {
    var count = $(element).find('li').length;
    var content = '<span class="count-number"> ' + count + '</span>';
    $(element).closest('li').children('a').append(content);
  });
  $('.aside-nav > ul > li:has(ul)').addClass('aside-submenu');
  $('.aside-nav > ul ul > li:has(ul)').addClass('aside-sub-submenu'); 
    $('.aside-nav > ul > li.aside-submenu > a').attr('aria-haspopup', 'true').click(function() {
    //Close other open sub menus
    $('.aside-nav ul li.aside-submenu:not(:hover) > ul').removeClass('show-aside-ul', 'slow');
    $('.aside-nav ul li.aside-submenu:hover > ul').toggleClass('show-aside-ul', 'slow'); 
  }); 
  $('.aside-nav > ul ul > li.aside-sub-submenu > a').attr('aria-haspopup', 'true').click(function() { 
    //Close other open sub menus
    $('.aside-nav ul ul li:not(:hover) > ul').removeClass('show-aside-ul', 'slow');
    $('.aside-nav ul ul li:hover > ul').toggleClass('show-aside-ul', 'slow');
  });
  //Mobile aside navigation
  $('.aside-nav-text').each(function(index, element) {
    $(element).click(function() { 
      $('.aside-nav > ul').toggleClass('show-menu', 'slow');
    });
  });  
  //Responsee nav   
  $('.top-nav > ul > li ul').each(function(index, element) {
    var count = $(element).find('li').length;
    var content = '<span class="count-number"> ' + count + '</span>';
    $(element).closest('li').children('a').append(content);
  });
  $('.top-nav > ul li:has(ul)').addClass('submenu');
  $('.top-nav > ul ul li:has(ul)').addClass('sub-submenu').removeClass('submenu');
  $('.top-nav > ul li.submenu > a').attr('aria-haspopup', 'true').click(function() { 
    //Close other open sub menus
    $('.top-nav > ul li.submenu > ul').removeClass('show-ul', 'slow'); 
    $('.top-nav > ul li.submenu:hover > ul').toggleClass('show-ul', 'slow');
  }); 
  $('.top-nav > ul ul > li.sub-submenu > a').attr('aria-haspopup', 'true').click(function() {  
    //Close other open sub menus
    $('.top-nav ul ul li > ul').removeClass('show-ul', 'slow');  
    $('.top-nav ul ul li:hover > ul').toggleClass('show-ul', 'slow');   
  });
  //Mobile aside navigation  
  $('.nav-text').click(function() { 
    $('.top-nav > ul').toggleClass('show-menu', 'slow');
  }); 
  //Custom forms
  $(function() {
    var input = document.createElement("input");
    if (('placeholder' in input) == false) {
      $('[placeholder]').focus(function() {
        var i = $(this);
        if (i.val() == i.attr('placeholder')) {
          i.val('').removeClass('placeholder');
          if (i.hasClass('password')) {
            i.removeClass('password');
            this.type = 'password';
          }
        }
      }).blur(function() {
        var i = $(this);
        if (i.val() == '' || i.val() == i.attr('placeholder')) {
          if (this.type == 'password') {
            i.addClass('password');
            this.type = 'text';
          }
          i.addClass('placeholder').val(i.attr('placeholder'));
        }
      }).blur().parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
          var i = $(this);
          if (i.val() == i.attr('placeholder')) i.val('');
        })
      });
    }
  });