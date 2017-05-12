<!DOCTYPE html>
<html lang="[[++cultureKey]]">

<head>
	<base href="[[++site_url]]">
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
	<title>[[*pagetitle:striptags]]</title>
	[[$seo.tpl]]
	<link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400|Roboto:100,300,400,700&amp;subset=cyrillic"
	      rel="stylesheet">
	<!--<link rel="stylesheet" href="assets/css/fonts.css">-->
	<link rel="stylesheet" href="assets/css/reset.css">
	<link rel="stylesheet" href="assets/css/slick.css">
	<link rel="stylesheet" href="assets/css/base-mobile.css">
	[[*id:is=`1`:then=`<link rel="stylesheet" href="assets/css/main-mobile.css">`]]
	[[*id:is=`6`:then=`<link rel="stylesheet" href="assets/css/contacts-mobile.css">`]]
	[[*id:is=`12`:then=`<link rel="stylesheet" href="assets/css/news-mobile.css">`]]

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="assets/js/lib/queryLoader.js"></script>
</head>

<body>
<div id="preload">
	<div class="white white-left"></div>
	<div class="white white-right"></div>
	<div class="white-center white-center-left"></div>
	<div class="white-center white-center-right"></div>
	<div class="line-top line"></div>
	<div class="line-bottom line"></div>
	<div class="logo"><img src="assets/images/logo-preload.png" alt="unna logo"></div>
</div>
<div id="callback">
	<div class="container">
		<div class="align-middle">
			<div class="form">
				<div class="close">
					<div class="cross">
						<div class="cross-line"></div>
						<div class="cross-line"></div>
					</div>
				</div>
				<form action="mail.php">
					<input type="text" name="name" placeholder="имя">
					<input type="text" name="phone" placeholder="телефон">
					<input type="text" name="email" placeholder="e-mail">
					<input type="text" name="comment" placeholder="сообщение">
					<button class="green-button">отправить <i class="icon-right-arrow"></i></button>
				</form>
			</div>
		</div>
	</div>
</div>
<div id="mobile-menu">
	<div class="container">
		<div class="top">
			<div class="left clearfix">
				<div class="menu-sandwich">
					<div class="sandwich-items">
						<div class="sandwich-item"></div>
						<div class="sandwich-item"></div>
						<div class="sandwich-item"></div>
					</div>
				</div>
				<div class="menu-lang">
					<a href="#">UA</a>
					<a class="active" href="#">RU</a>
				</div>
			</div>
			<a class="logo" href="/"><img src="assets/images/logo-menu.png" alt="unna logo"></a>
			<div class="right">
				<div class="menu-phone">
					<a href="tel:+38[[++kontakt-phone]]" class="mobile-phone"><i class="icon-phone"></i></a>
				</div>
			</div>
		</div>
		<div class="content">
			[[Wayfinder?
			&startId=`0`
			&excludeDocs=`27`
			&level=`2`
			&innerClass=`sub`
			&outerClass=`menu-bg`
			&outerTpl=`m.menu-mobile-outerTPL`
			&innerRowTpl=`m.inner-mobile-row-Tpl`
			&innerTpl=`m.menu-mobile-innerTPL`
			&rowTpl=`m.menu-modile-itemTPL`
			]]
			<a href="#" class="more-button green-button callback-open">узнать подробнее <i class="icon-right-arrow"></i></a>
		</div>
	</div>
</div>
<header>
    <div class="container">
        <div class="menu-sandwich">
            <div class="sandwich-items">
                <div class="sandwich-item"></div>
                <div class="sandwich-item"></div>
                <div class="sandwich-item"></div>
            </div>
        </div>
        <div class="menu-apartment">
            <a class="link-delay" href="get-apartment.html"></a>
            <div class="menu-apart-white">
                <div class="menu-apart-items">
                    <div class="menu-apart-item"><div class="circle"></div></div>
                    <div class="menu-apart-item"><div class="circle"></div></div>
                    <div class="menu-apart-item"><div class="circle"></div></div>
                </div>
            </div>
            <span>[[%select? &namespace=`unna`]] [[%apartment? &namespace=`unna`]]</span>
        </div>
        <div class="menu-phone">
            <a href="tel:+38[[++kontakt-phone]]" class="mobile-phone"><i class="icon-phone"></i></a>
        </div>
        <div class="menu-lang">
            <a href="ua">UA</a>
        </div>
    </div>
</header>