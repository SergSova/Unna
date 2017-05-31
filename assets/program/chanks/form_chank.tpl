<form>
    <div class="input-container">
        <input type="hidden" name="action" value="send_mail">
        <input type="hidden" name="to" value="sergeysova@ukr.net">
        <input type="hidden" name="subject"
               value="[[%learn?namecpace=`unna`]] [[%more?namecpace=`unna`]] [[*pagetitle]]">

        <input type="text" name="name" id="js-name" autocomplete="off"/>
        <label class="label-name" for="js-name">[[%name?namecpace=`unna`]]</label>
        <div class="bar"></div>
    </div>
    <div class="input-container">
        <input type="tel" name="phone" id="js-tel" autocomplete="off"/>
        <label class="label-tel" for="js-tel">[[%phone?namecpace=`unna`]]</label>
        <div class="bar"></div>
    </div>
    <div class="input-container">
        <input type="email" name="mail" id="js-mail" autocomplete="off"/>
        <label class="label-mail" for="js-mail">e-mail</label>
        <div class="bar"></div>
    </div>
    <div class="input-container">
        <textarea class="textarea" type="text" name="message" id="js-message" autocomplete="off"/></textarea>
        <label class="label-message" for="js-message">[[%message?namecpace=`unna`]]</label>
        <div class="bar"></div>
    </div>
    <button type="submit" id="form-submit" data-toggle="[[*template]]">[[*template:in=`14,20`:then=`[[%send? &namecpace=`unna`]]`:else=`[[%learn? &namecpace=`unna`]] [[%more? &namecpace=`unna`]] <span>&#8250;</span>`]]
    </button>
</form>
