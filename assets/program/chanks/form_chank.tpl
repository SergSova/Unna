<form class="form">
  <div class="send-messages">
    <div class="send-success"><span>Заявка успешно отправлена!</span></div>
    <div class="send-error">Заявка не отправлена. Попробуйте еще раз!</div>
  </div>
  <div class="form-title">Обратная связь</div>
    <div class="input-container">
        <input type="hidden" name="action" value="send_mail">
        <input type="hidden" name="to" value="sergeysova@ukr.net">
        <input type="hidden" name="subject"
               value="[[%learn?namecpace=`unna`]] [[%more?namecpace=`unna`]] [[*pagetitle]]">

        <input type="text" name="name" id="js-name" autocomplete="off"/>
        <label class="label-name" for="js-name">
          <span class="label-default">[[%name_u?namecpace=`unna`]]</span>
          <span class="label-error">[[%label-error?&namespace=`unna`]]</span>
        </label>
        <div class="bar"></div>
    </div>
    <div class="input-container">
        <input type="tel" name="phone" id="js-tel" autocomplete="off"/>
        <label class="label-tel" for="js-tel">
          <span class="label-default">[[%phone?namecpace=`unna`]]</span>
          <span class="label-error">[[%label-error?&namespace=`unna`]]</span>
        </label>
        <div class="bar"></div>
    </div>
    <div class="input-container">
        <input type="text" name="mail" id="js-mail" autocomplete="off"/>
        <label class="label-mail" for="js-mail">
          <span class="label-default">e-mail</span>
          <span class="label-error">[[%label-error?&namespace=`unna`]]</span>
        </label>
        <div class="bar"></div>
    </div>
    <div class="input-container">
        <textarea class="textarea" type="text" name="message" id="js-message" autocomplete="off"/></textarea>
        <label class="label-message" for="js-message">
          <span class="label-default">[[%message?namecpace=`unna`]]</span>
          <span class="label-error">[[%label-error?&namespace=`unna`]]</span>
        </label>
        <div class="bar"></div>
    </div>
    <button type="submit" id="form-submit">[[*template:in=`14,20`:then=`[[%send-u:ucfirst? &namecpace=`unna`]]`:else=`[[%learn:ucfirst? &namecpace=`unna`]] [[%more:lcase? &namecpace=`unna`]] <span>&#8250;</span>`]]
    </button>
</form>
