/*! spsext - v0.0.1 - 2015-04-01
* Copyright (c) 2015 dimkk; Licensed MIT */
(function ($) {
    var extensionMethods = {
        /**
         * Нашлепка на $().SPServices.SPFindPeoplePicker - ищет пп по ид указанному в дизайнере
         * @param options staticName - идентификатор или поля или уникальный свой указанный в дизайнере, valueToSet - что вбить в пп, checkNames - чекнуть ли, по умолчанию - true
         */
        findPP: function (options) {
            if (!options.Id || !options.valueToSet)
            {
                console.error('spservices extensions findPP: args error');
                return;
            };
            var $pp = $('span[id*="' + options.Id + '"]')
                                                        .first()
                                                        .wrap('<div '+options.debug ? +' style="background-color:red;" ' : ''+ '></div>');
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