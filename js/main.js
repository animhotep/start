$(function(){
	var CMainPage = function(){
		this.init();
	};
});

CMainPage.prototype.init = function()
{
  this.initProfile();
};


CMainPage.prototype.initProfile = function()
{
  $('.something').on('click', function(){
    $('.something_else').toggle();
	return false;
  });
};