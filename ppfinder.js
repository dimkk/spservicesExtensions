/**
 * Ищет пипл пикер по статик нейму поля - в дизайнере чуть модифицируем стандартное объявление серверного контрола - <SharePoint:FormField runat="server" id="ff2{concat($Pos,'ПИШЕМ ИЛИ НАЗВАНИЕ ПОЛЯ ИЛИ УНИКАЛЬНЫЙ ИД')}
 * usage - $().SPServices.findPP({Id:'', valueToSet:'', checkNames:bool, debug:bool}
 */
(function ($) {
    var extensionMethods = {
        /**
         * Нашлепка на $().SPServices.SPFindPeoplePicker - ищет пп по ид указанному в дизайнере
         * @param options staticName - идентификатор или поля или уникальный свой указанный в дизайнере, valueToSet - что вбить в пп, checkNames - чекнуть ли, по умолчанию - true
         */
        findPP: function (options) {
            if (!options.Id || options.Id === '' || !options.valueToSet || options.valueToSet === '')
            {
                console.error('args error');
                return;
            };
            var $pp = $('span[id*="' + options.Id + '"]').first().wrap('<div '+options.debug ? +' style="background-color:red;" ' : ''+ '></div>');
            var $row = $pp
                        .wrap('<td></td>')
                        .parent()
                        .wrap('<tr></tr>')
                        .parent();
                $row.wrap('<table></table>');
                $row.append('<td><nobr style="display:none;">' + options.Id + '</nobr></td>');

           return $().SPServices.SPFindPeoplePicker({
                peoplePickerDisplayName: options.Id,
                valueToSet: options.valueToSet,
                checkNames: options.checkNames || true
            });
        }
    };

    $.extend(true, $().SPServices, extensionMethods);


})(jQuery);