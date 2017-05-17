<div class="ext left-content smaller">
    <div class="form-wrap">
        [[*id:is=`[[babelId?&id=`12`]]`:then=`
        <div class="fb-page" data-href="https://www.facebook.com/facebook" data-tabs="timeline" data-width="500"
             data-height="700" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false"
             data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/facebook" class="fb-xfbml-parse-ignore"><a
                        href="https://www.facebook.com/facebook">Facebook</a></blockquote>
        </div>
    </div>
    `:else=`
    <form action="/send_mail.php" method="post">
        <input type="hidden" name="action" value="send_mail">
        <input type="hidden" name="to" value="sergeysova@ukr.net">
        <input type="hidden" name="subject" value="Смотреть больше">
        <input type="text" name="name" id="form-name" placeholder="[[%name? &namespace=`unna`]]">
        <input type="tel" name="phone" id="form-tel" placeholder="[[%phone? &namespace=`unna`]]">
        <input type="email" name="mail" id="form-email" placeholder="e-mail">
        <input type="text" name="message" id="form-text" placeholder="[[%message? &namespace=`unna`]]">
        <button type="submit" id="form-submit">[[%learn? &namespace=`unna`]] [[%more? &namespace=`unna`]]
            <span>&#8250;</span></button>
    </form>
    `]]
</div>
</div>
<div class="ext right-content">
    [[!getResources?
    &parents=`[[*id]]`
    &tpl=`action-item-TPL`
    &includeTVs=`1`
    &includeContent=`1`
    &showHidden=`1`
    ]]
</div>
