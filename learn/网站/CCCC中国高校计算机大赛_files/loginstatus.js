function getLoginStatus(){
  if(frontpage_variable.userinfo.email){
    strHTML = "<li id=\"c4top_register\"><a href='/redirect'>"+ frontpage_variable.userinfo.email +"</a></li>";
    $("#c4top_register").replaceWith(strHTML);
    strHTML = "";
    $("#c4top_login").replaceWith(strHTML);
	}
}
